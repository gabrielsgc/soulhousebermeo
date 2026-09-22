import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface CookieConsent {
  necessary: true;
  preferences: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'soulhouse_cookies';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly showBanner = signal<boolean>(this._load() === null);
  readonly showPanel = signal<boolean>(false);
  readonly consent    = signal<CookieConsent | null>(this._load());

  private _load(): CookieConsent | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CookieConsent) : null;
    } catch {
      return null;
    }
  }

  private _save(c: CookieConsent): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(c)); } catch { /* quota exceeded */ }
    this.consent.set(c);
    this.showPanel.set(false);
    this.showBanner.set(false);
  }

  acceptAll(): void {
    this._save({ necessary: true, preferences: true, timestamp: Date.now() });
  }

  acceptNecessaryOnly(): void {
    this._save({ necessary: true, preferences: false, timestamp: Date.now() });
  }

  savePreferences(preferences: boolean): void {
    this._save({ necessary: true, preferences, timestamp: Date.now() });
  }

  resetConsent(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    this.consent.set(null);
    this.showPanel.set(false);
    this.showBanner.set(true);
  }

  hasConsented(): boolean {
    return this.consent() !== null;
  }
}
