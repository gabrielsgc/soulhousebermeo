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

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      if (!this.measurementId) return;

      const allowAnalytics = !!this.consent.consent()?.preferences;
      if (allowAnalytics) {
        this.enableAnalytics();
      } else {
        this.disableAnalytics();
      }
    });
  }

  private ensureGtagStub(): void {
    const win = globalThis as Window;
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

    this.ensureGtagStub();

    const win = globalThis as Window;
    if (!this.isLoaded) {
      const script = this.doc.createElement('script');
      script.id = this.scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      this.doc.head.appendChild(script);

      win.gtag?.('js', new Date());
      win.gtag?.('config', this.measurementId, { anonymize_ip: true });
      this.isLoaded = true;
    }

    win.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  }

  private disableAnalytics(): void {
    if (this.gtmContainerId) {
      this.disableTagManager();
      return;
    }

    const win = globalThis as Window;
    win.gtag?.('consent', 'update', { analytics_storage: 'denied' });

    const script = this.doc.getElementById(this.scriptId);
    if (script) {
      script.remove();
      this.isLoaded = false;
    }
  }

  private enableTagManager(): void {
    const win = globalThis as Window;
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
    const win = globalThis as Window;
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
}
