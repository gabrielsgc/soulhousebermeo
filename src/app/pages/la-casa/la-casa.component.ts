import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HighlightsComponent } from '../../components/highlights/highlights.component';
import { RoomsComponent } from '../../components/rooms/rooms.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-la-casa',
  standalone: true,
  imports: [LayoutComponent, HighlightsComponent, RoomsComponent],
  template: `
    <app-layout>
      <h1 class="sr-only">{{ t().pageTitles.laCasa }}</h1>
      <app-highlights />
      <app-rooms />
    </app-layout>
  `,
})
export class LaCasaComponent {
  protected readonly t = inject(I18nService).t;
}
