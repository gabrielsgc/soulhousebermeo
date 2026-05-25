import { Injectable, signal } from '@angular/core';

export interface CookieConsent {
  necessary: true;
  preferences: boolean;
  timestamp: number;
}

const STORAGE_KEY = 'soulhouse_cookies';

@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  readonly showBanner = signal<boolean>(this._load() === null);
  readonly consent    = signal<CookieConsent | null>(this._load());

  private _load(): CookieConsent | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CookieConsent) : null;
    } catch {
      return null;
    }
  }

  private _save(c: CookieConsent): void {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(c)); } catch { /* quota exceeded */ }
    this.consent.set(c);
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
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
    this.consent.set(null);
    this.showBanner.set(true);
  }

  hasConsented(): boolean {
    return this.consent() !== null;
  }
}
