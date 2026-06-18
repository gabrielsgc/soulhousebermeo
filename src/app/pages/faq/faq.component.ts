import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [NavbarComponent, FaqComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-faq />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class FaqPageComponent {}
