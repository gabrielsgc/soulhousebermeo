import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-reservar-page',
  standalone: true,
  imports: [LayoutComponent, ContactComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.reservar }}</h1>
      <app-contact />
    </app-layout>
  `,
})
export class ReservarComponent {
  protected readonly t = inject(I18nService).t;
}
