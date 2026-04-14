import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section class="faq" id="faq" aria-labelledby="faq-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">{{ t().faq.tag }}</span>
          <h2 id="faq-heading">{{ t().faq.heading }}</h2>
          <p>{{ t().faq.intro }}</p>
        </header>
        <dl class="faq__list" role="list">
          @for (item of t().faq.items; track item.question; let i = $index) {
            <div class="faq__item" role="listitem">
              <dt>
                <button class="faq__question"
                  [attr.aria-expanded]="openIndex() === i"
                  [attr.aria-controls]="'faq-answer-' + i"
                  [attr.id]="'faq-btn-' + i"
                  (click)="toggle(i)">
                  {{ item.question }}
                  <span class="faq__chevron" aria-hidden="true">{{ openIndex() === i ? '▲' : '▼' }}</span>
                </button>
              </dt>
              <dd [attr.id]="'faq-answer-' + i" [attr.aria-labelledby]="'faq-btn-' + i"
                role="region" class="faq__answer" [class.faq__answer--open]="openIndex() === i">
                <p>{{ item.answer }}</p>
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class FaqComponent {
  protected readonly t = inject(I18nService).t;
  openIndex = signal<number | null>(null);
  toggle(i: number): void { this.openIndex.set(this.openIndex() === i ? null : i); }
}
