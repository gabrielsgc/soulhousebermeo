import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LocationComponent } from '../../components/location/location.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-ubicacion-page',
  standalone: true,
  imports: [NavbarComponent, LocationComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-location />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class UbicacionComponent {}
