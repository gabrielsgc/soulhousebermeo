import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookieConsentService } from './cookie-consent.service';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly consent = inject(CookieConsentService);

  private readonly measurementId = environment.googleAnalyticsMeasurementId;
  private readonly gtmContainerId = environment.gtmContainerId;
  private readonly scriptId = 'ga4-script';
  private readonly gtmScriptId = 'gtm-script';
  private isLoaded = false;
  private isGtmLoaded = false;
  private isGaConfigured = false;

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      if (!this.measurementId && !this.gtmContainerId) return;

      if (this.measurementId && !this.gtmContainerId) {
        this.isLoaded = !!this.doc.getElementById(this.scriptId);
        this.isGaConfigured = typeof this.getWindow().gtag === 'function';
      }

      if (this.measurementId && !this.gtmContainerId) {
        this.bootstrapGaWithDeniedConsent();
      }

      const allowAnalytics = !!this.consent.consent()?.preferences;
      if (allowAnalytics) {
        this.enableAnalytics();
      } else {
        this.disableAnalytics();
      }
    });
  }

  private getWindow(): Window {
    return globalThis as unknown as Window;
  }

  private ensureGtagStub(): void {
    const win = this.getWindow();
    win.dataLayer = win.dataLayer || [];
    if (!win.gtag) {
      win.gtag = (...args: unknown[]) => {
        win.dataLayer.push(args);
      };
    }
  }

  private enableAnalytics(): void {
    if (this.gtmContainerId) {
      this.enableTagManager();
      return;
    }

    this.bootstrapGaWithDeniedConsent();

    const win = this.getWindow();

    win.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  }

  private disableAnalytics(): void {
    if (this.gtmContainerId) {
      this.disableTagManager();
      return;
    }

    const win = this.getWindow();
    win.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  }

  private enableTagManager(): void {
    const win = this.getWindow();
    win.dataLayer = win.dataLayer || [];

    if (!this.isGtmLoaded) {
      const script = this.doc.createElement('script');
      script.id = this.gtmScriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${this.gtmContainerId}`;
      this.doc.head.appendChild(script);

      win.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      this.isGtmLoaded = true;
    }

    win.dataLayer.push({
      event: 'consent_update',
      analytics_storage: 'granted',
    });
  }

  private disableTagManager(): void {
    const win = this.getWindow();
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      event: 'consent_update',
      analytics_storage: 'denied',
    });

    const script = this.doc.getElementById(this.gtmScriptId);
    if (script) {
      script.remove();
      this.isGtmLoaded = false;
    }
  }

  private bootstrapGaWithDeniedConsent(): void {
    this.ensureGtagStub();

    const win = this.getWindow();
    if (!this.isLoaded) {
      const existingScript = this.doc.getElementById(this.scriptId);
      if (existingScript) {
        this.isLoaded = true;
      } else {
        const script = this.doc.createElement('script');
        script.id = this.scriptId;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        this.doc.head.appendChild(script);
        this.isLoaded = true;
      }
    }

    win.gtag?.('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    if (!this.isGaConfigured) {
      win.gtag?.('js', new Date());
      win.gtag?.('config', this.measurementId, { anonymize_ip: true });
      this.isGaConfigured = true;
    }
  }
}
