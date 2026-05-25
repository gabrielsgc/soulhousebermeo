import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { CookieConsentService } from '../../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css',
})
export class CookieConsentComponent {
  protected readonly t  = inject(I18nService).t;
  protected readonly cs = inject(CookieConsentService);

  showPanel  = signal(false);
  prefToggle = signal(true);

  openPanel(): void { this.showPanel.set(true); }
  closePanel(): void { this.showPanel.set(false); }

  acceptAll(): void { this.cs.acceptAll(); }
  acceptNecessary(): void { this.cs.acceptNecessaryOnly(); }

  savePreferences(): void {
    this.cs.savePreferences(this.prefToggle());
    this.showPanel.set(false);
  }
}
