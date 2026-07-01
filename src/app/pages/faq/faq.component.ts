import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [LayoutComponent, FaqComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.faq }}</h1>
      <app-faq />
    </app-layout>
  `,
})
export class FaqPageComponent {
  protected readonly t = inject(I18nService).t;
}
