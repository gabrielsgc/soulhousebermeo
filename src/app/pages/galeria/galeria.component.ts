import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-galeria-page',
  standalone: true,
  imports: [NavbarComponent, GalleryComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-gallery />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class GaleriaComponent {}
