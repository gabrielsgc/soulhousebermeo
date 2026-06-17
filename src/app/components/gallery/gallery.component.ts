import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [IconComponent, NgOptimizedImage],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  protected readonly t = inject(I18nService).t;
  sliderIndex = signal<number>(0);
  activeIndex = signal<number | null>(null);
  private touchStartX = 0;

  prevSlide(): void {
    this.sliderIndex.update(i => (i - 1 + this.t().gallery.items.length) % this.t().gallery.items.length);
  }
  nextSlide(): void {
    this.sliderIndex.update(i => (i + 1) % this.t().gallery.items.length);
  }
  goTo(i: number): void { this.sliderIndex.set(i); }

  onTouchStart(e: TouchEvent): void { this.touchStartX = e.touches[0].clientX; }
  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(dx) > 40) dx < 0 ? this.nextSlide() : this.prevSlide();
  }

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
