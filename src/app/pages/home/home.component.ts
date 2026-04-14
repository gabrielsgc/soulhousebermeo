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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HighlightsComponent,
    RoomsComponent,
    GalleryComponent,
    AmenitiesComponent,
    LocationComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main id="main-content">
      <app-hero />
      <app-highlights />
      <app-rooms />
      <app-gallery />
      <app-amenities />
      <app-location />
      <app-faq />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class HomeComponent {}
