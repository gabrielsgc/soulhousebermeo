import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { RoomsComponent } from '../../components/rooms/rooms.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { AmenitiesComponent } from '../../components/amenities/amenities.component';
import { LocationComponent } from '../../components/location/location.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, CookieConsentComponent,
    HighlightsComponent, RoomsComponent, GalleryComponent,
    AmenitiesComponent, LocationComponent, FaqComponent,
    ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-hero />
      @defer (on viewport; prefetch on idle) {
        <app-highlights />
      } @placeholder { <div style="min-height:400px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-rooms />
      } @placeholder { <div style="min-height:400px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-gallery />
      } @placeholder { <div style="min-height:400px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-amenities />
      } @placeholder { <div style="min-height:300px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-location />
      } @placeholder { <div style="min-height:400px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-faq />
      } @placeholder { <div style="min-height:300px"></div> }
      @defer (on viewport; prefetch on idle) {
        <app-contact />
      } @placeholder { <div style="min-height:500px"></div> }
    </main>
    @defer (on viewport; prefetch on idle) {
      <app-footer />
    } @placeholder { <div style="min-height:200px"></div> }
    <app-cookie-consent />
  `,
})
export class HomeComponent {}
