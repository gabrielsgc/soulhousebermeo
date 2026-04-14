import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="location" id="ubicacion" aria-labelledby="location-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">{{ t().location.tag }}</span>
          <h2 id="location-heading">{{ t().location.heading }}</h2>
          <p>{{ t().location.intro }}</p>
        </header>
        <div class="location__layout">
          <div class="location__map" [attr.aria-label]="t().location.mapLabel">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.4!2d-2.7231!3d43.4196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI1JzEwLjYiTiAywrA0Myc0My4yIlc!5e0!3m2!1ses!2ses!4v1"
              width="100%" height="400" style="border:0;border-radius:12px;"
              allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              [attr.title]="t().location.mapLabel"
            ></iframe>
          </div>
          <div class="location__pois">
            <h3>{{ t().location.nearbyHeading }}</h3>
            <ul class="location__list" [attr.aria-label]="t().location.poisAriaLabel">
              @for (poi of t().location.pois; track poi.name) {
                <li class="location__poi">
                  <app-icon [name]="poi.icon" [size]="17" class="location__poi-icon" />
                  <div>
                    <strong>{{ poi.name }}</strong>
                    <span>{{ poi.dist }}</span>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class LocationComponent {
  protected readonly t = inject(I18nService).t;
}
