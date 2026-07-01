import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-galeria-page',
  standalone: true,
  imports: [LayoutComponent, GalleryComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.galeria }}</h1>
      <app-gallery />
    </app-layout>
  `,
})
export class GaleriaComponent {
  protected readonly t = inject(I18nService).t;
}
