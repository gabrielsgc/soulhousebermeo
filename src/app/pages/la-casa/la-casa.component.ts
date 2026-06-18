import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { RoomsComponent } from '../../components/rooms/rooms.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-la-casa',
  standalone: true,
  imports: [
    NavbarComponent,
    HighlightsComponent,
    RoomsComponent,
    FooterComponent,
    CookieConsentComponent,
  ],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-highlights />
      <app-rooms />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class LaCasaComponent {}
