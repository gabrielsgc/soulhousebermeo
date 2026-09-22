import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, CookieConsentComponent,
    HighlightsComponent, FooterComponent,
  ],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-hero />
      @defer (on viewport; prefetch on idle) {
        <app-highlights />
      } @placeholder { <div class="defer__placeholder defer__placeholder--large"></div> }
    </main>
    @defer (on viewport; prefetch on idle) {
      <app-footer />
    } @placeholder { <div class="defer__placeholder defer__placeholder--small"></div> }
    <app-cookie-consent />
  `,
})
export class HomeComponent {}
