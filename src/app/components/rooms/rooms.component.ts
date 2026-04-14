import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="rooms" id="alojamiento" aria-labelledby="rooms-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">{{ t().rooms.tag }}</span>
          <h2 id="rooms-heading">{{ t().rooms.heading }}</h2>
          <p>{{ t().rooms.intro }}</p>
        </header>
        <div class="rooms__grid" role="list">
          @for (room of t().rooms.items; track room.title) {
            <article class="rooms__card" role="listitem">
              <div class="rooms__card-image" [attr.aria-label]="room.title" role="img">
                <app-icon [name]="room.emoji" [size]="44" class="rooms__card-emoji" />
              </div>
              <div class="rooms__card-body">
                <h3>{{ room.title }}</h3>
                <p>{{ room.desc }}</p>
                <ul class="rooms__card-features" [attr.aria-label]="room.title">
                  @for (f of room.features; track f) { <li>{{ f }}</li> }
                </ul>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class RoomsComponent {
  protected readonly t = inject(I18nService).t;
}
