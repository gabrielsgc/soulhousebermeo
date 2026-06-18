import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AmenitiesComponent } from '../../components/amenities/amenities.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-servicios-page',
  standalone: true,
  imports: [NavbarComponent, AmenitiesComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-amenities />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class ServiciosComponent {}
