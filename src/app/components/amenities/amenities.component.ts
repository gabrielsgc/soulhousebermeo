import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="amenities" id="servicios" aria-labelledby="amenities-heading">
      <div class="container">
        <header class="section-header section-header--light">
          <span class="section-tag section-tag--light">{{ t().amenities.tag }}</span>
          <h2 id="amenities-heading">{{ t().amenities.heading }}</h2>
          <p>{{ t().amenities.intro }}</p>
        </header>
        <div class="amenities__grid" role="list" [attr.aria-label]="t().amenities.heading">
          @for (a of t().amenities.items; track a.label) {
            <div class="amenities__item" role="listitem">
              <app-icon [name]="a.icon" [size]="22" class="amenities__icon" />
              <span>{{ a.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AmenitiesComponent {
  protected readonly t = inject(I18nService).t;
}
