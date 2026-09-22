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
              src="https://www.google.com/maps?q=43.417199,-2.723924&z=16&output=embed"
              width="100" height="400" class="location__iframe"
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
