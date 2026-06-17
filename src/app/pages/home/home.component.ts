import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-hero />
      @defer (on viewport) {
        <app-highlights />
      }
      @defer (on viewport) {
        <app-rooms />
      }
      @defer (on viewport) {
        <app-gallery />
      }
      @defer (on viewport) {
        <app-amenities />
      }
      @defer (on viewport) {
        <app-location />
      }
      @defer (on viewport) {
        <app-faq />
      }
      @defer (on viewport) {
        <app-contact />
      }
      @defer (on viewport) {
        <app-footer />
      }
    </main>
    <app-cookie-consent />
  `,
})
export class HomeComponent {}
