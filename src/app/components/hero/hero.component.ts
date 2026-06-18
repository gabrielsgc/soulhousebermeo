import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent, NgOptimizedImage, RouterLink],
  template: `
    <section class="hero" id="inicio" aria-labelledby="hero-heading">
      <div class="hero__photo-wrap" aria-hidden="true">
        <img
          class="hero__photo"
          ngSrc="assets/images/hero-facade.png"
          width="1920"
          height="1280"
          alt=""
          role="presentation"
          priority
        />
        <div class="hero__photo-veil"></div>
      </div>
      <div class="hero__coords" aria-hidden="true">
        <span>43° 25' N</span><span class="hero__coords-sep">·</span>
        <span>2° 43' O</span><span class="hero__coords-sep">·</span>
        <span>Bermeo, Bizkaia</span>
      </div>
      <div class="hero__body">
        <div class="hero__text-col">
          <p class="hero__eyebrow" role="note">
            <span class="hero__eyebrow-line"></span>
            {{ t().hero.eyebrow }}
          </p>
          <h1 class="hero__title" id="hero-heading">
            <span class="hero__title-main">Soul</span>
            <span class="hero__title-main hero__title-main--accent">House</span>
            <span class="hero__title-sub">Bermeo</span>
          </h1>
          <p class="hero__tagline">{{ t().hero.tagline }}</p>
          <div class="hero__rule" aria-hidden="true"></div>
          <div class="hero__actions">
            <a class="btn btn--teal btn--lg" [routerLink]="'/reservar'">{{ t().hero.cta1 }}</a>
            <a class="btn btn--outline-light btn--lg" [routerLink]="'/la-casa'">{{ t().hero.cta2 }}</a>
          </div>
        </div>
        <div class="hero__side-tag" aria-hidden="true">
          <span>{{ t().hero.sideTag }}</span>
        </div>
      </div>
      <ul class="hero__strip" [attr.aria-label]="t().nav.ariaNav">
        @for (f of t().hero.features; track f.label) {
          <li class="hero__strip-item">
            <app-icon [name]="f.icon" [size]="17" class="hero__strip-icon" />
            <span>{{ f.label }}</span>
          </li>
        }
      </ul>
    </section>
  `,
})
export class HeroComponent {
  protected readonly t = inject(I18nService).t;
}
