import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AmenitiesComponent } from '../../components/amenities/amenities.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-servicios-page',
  standalone: true,
  imports: [LayoutComponent, AmenitiesComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.servicios }}</h1>
      <app-amenities />
    </app-layout>
  `,
})
export class ServiciosComponent {
  protected readonly t = inject(I18nService).t;
}
