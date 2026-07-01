import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { LocationComponent } from '../../components/location/location.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-ubicacion-page',
  standalone: true,
  imports: [LayoutComponent, LocationComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.ubicacion }}</h1>
      <app-location />
    </app-layout>
  `,
})
export class UbicacionComponent {
  protected readonly t = inject(I18nService).t;
}
