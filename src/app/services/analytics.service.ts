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
  private hasVitalsTracking = false;

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
    this.setupWebVitalsTracking();
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

  private setupWebVitalsTracking(): void {
    if (this.hasVitalsTracking || !('PerformanceObserver' in globalThis)) return;
    this.hasVitalsTracking = true;

    this.observeLcp();
    this.observeCls();
    this.observeInp();
  }

  private reportVital(metricName: 'LCP' | 'CLS' | 'INP', value: number): void {
    const win = this.getWindow();
    if (!Number.isFinite(value) || value <= 0) return;

    const roundedValue = metricName === 'CLS' ? Math.round(value * 1000) : Math.round(value);
    win.gtag?.('event', 'web_vital', {
      metric_name: metricName,
      metric_value: roundedValue,
      metric_raw_value: value,
      non_interaction: true,
    });
  }

  private observeLcp(): void {
    let lcp = 0;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries.at(-1);
      if (last) {
        lcp = last.startTime;
      }
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });

    const finalize = () => {
      this.reportVital('LCP', lcp);
      observer.disconnect();
    };

    this.doc.addEventListener('visibilitychange', () => {
      if (this.doc.visibilityState === 'hidden') {
        finalize();
      }
    }, { once: true });
  }

  private observeCls(): void {
    let cls = 0;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
        if (!shift.hadRecentInput && typeof shift.value === 'number') {
          cls += shift.value;
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    this.doc.addEventListener('visibilitychange', () => {
      if (this.doc.visibilityState === 'hidden') {
        this.reportVital('CLS', cls);
        observer.disconnect();
      }
    }, { once: true });
  }

  private observeInp(): void {
    let maxInp = 0;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const interaction = entry as PerformanceEntry & { duration?: number };
        if (typeof interaction.duration === 'number') {
          maxInp = Math.max(maxInp, interaction.duration);
        }
      }
    });

    observer.observe({ type: 'event', buffered: true } as PerformanceObserverInit);

    this.doc.addEventListener('visibilitychange', () => {
      if (this.doc.visibilityState === 'hidden') {
        this.reportVital('INP', maxInp);
        observer.disconnect();
      }
    }, { once: true });
  }
}
