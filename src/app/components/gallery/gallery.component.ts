import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section class="gallery" id="galeria" aria-labelledby="gallery-heading">
      <div class="container">
        <header class="section-header">
          <span class="section-tag">{{ t().gallery.tag }}</span>
          <h2 id="gallery-heading">{{ t().gallery.heading }}</h2>
          <p>{{ t().gallery.intro }}</p>
        </header>
        <div class="gallery__grid" role="list" [attr.aria-label]="t().gallery.heading">
          @for (item of t().gallery.items; track item.label; let i = $index) {
            <button class="gallery__item" role="listitem"
              [attr.aria-label]="t().gallery.viewPhoto + item.label"
              (click)="openLightbox(i)" (keydown.enter)="openLightbox(i)">
              <app-icon [name]="item.emoji" [size]="38" class="gallery__icon" aria-hidden="true" />
              <div class="gallery__overlay" aria-hidden="true"><span>{{ item.label }}</span></div>
            </button>
          }
        </div>
      </div>
      @if (activeIndex() !== null) {
        <div class="lightbox" role="dialog" aria-modal="true"
          [attr.aria-label]="'Foto: ' + t().gallery.items[activeIndex()!].label"
          (click)="closeLightbox()" (keydown.escape)="closeLightbox()"
          (keydown.arrowleft)="prevPhoto()" (keydown.arrowright)="nextPhoto()"
          tabindex="0">
          <div class="lightbox__content" (click)="$event.stopPropagation()">
            <button class="lightbox__close" (click)="closeLightbox()" [attr.aria-label]="t().gallery.close">✕</button>
            <div class="lightbox__media" aria-hidden="true">
              <app-icon [name]="t().gallery.items[activeIndex()!].emoji" [size]="64" class="lightbox__icon" />
            </div>
            <p class="lightbox__caption">{{ t().gallery.items[activeIndex()!].caption }}</p>
            <div class="lightbox__nav">
              <button class="lightbox__prev" (click)="prevPhoto()" [attr.aria-label]="t().gallery.prev">‹</button>
              <span aria-live="polite">{{ activeIndex()! + 1 }} / {{ t().gallery.items.length }}</span>
              <button class="lightbox__next" (click)="nextPhoto()" [attr.aria-label]="t().gallery.next">›</button>
            </div>
          </div>
        </div>
      }
    </section>
  `,
})
export class GalleryComponent {
  protected readonly t = inject(I18nService).t;
  activeIndex = signal<number | null>(null);

  openLightbox(i: number): void  { this.activeIndex.set(i); }
  closeLightbox(): void           { this.activeIndex.set(null); }
  prevPhoto(): void {
    const c = this.activeIndex();
    if (c !== null) this.activeIndex.set((c - 1 + this.t().gallery.items.length) % this.t().gallery.items.length);
  }
  nextPhoto(): void {
    const c = this.activeIndex();
    if (c !== null) this.activeIndex.set((c + 1) % this.t().gallery.items.length);
  }
}
