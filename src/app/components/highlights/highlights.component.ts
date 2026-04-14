import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="highlights" id="experiencias" aria-labelledby="highlights-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">{{ t().highlights.tag }}</span>
          <h2 id="highlights-heading">{{ t().highlights.heading }}</h2>
          <p>{{ t().highlights.intro }}</p>
        </header>
        <div class="highlights__grid" role="list">
          @for (h of t().highlights.items; track h.title) {
            <article class="highlights__card" role="listitem">
              <div class="highlights__icon" aria-hidden="true">
                <app-icon [name]="h.icon" [size]="34" />
              </div>
              <h3>{{ h.title }}</h3>
              <p>{{ h.desc }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class HighlightsComponent {
  protected readonly t = inject(I18nService).t;
}
