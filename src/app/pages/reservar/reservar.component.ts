import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-reservar-page',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-contact />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class ReservarComponent {}
