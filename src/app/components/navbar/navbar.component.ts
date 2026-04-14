import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { LangSwitcherComponent } from './lang-switcher.component';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LangSwitcherComponent, IconComponent],
  template: `
    <header id="site-header" role="banner">
      <nav class="navbar" [class.scrolled]="isScrolled()" [attr.aria-label]="t().nav.ariaNav">
        <div class="container navbar__inner">

          <a class="navbar__brand" href="#inicio" [attr.aria-label]="t().nav.ariaBrand">
            <app-icon name="anchor" [size]="26" class="navbar__brand-icon" />
            <span class="navbar__brand-text">
              Soul House
              <small>{{ t().nav.brand }}</small>
            </span>
          </a>

          <button
            class="navbar__toggle"
            [attr.aria-expanded]="isMenuOpen()"
            aria-controls="nav-menu"
            [attr.aria-label]="isMenuOpen() ? t().nav.ariaClose : t().nav.ariaOpen"
            (click)="toggleMenu()"
          >
            <span class="navbar__toggle-bar" [class.open]="isMenuOpen()" aria-hidden="true"></span>
            <span class="navbar__toggle-bar" [class.open]="isMenuOpen()" aria-hidden="true"></span>
            <span class="navbar__toggle-bar" [class.open]="isMenuOpen()" aria-hidden="true"></span>
          </button>

          <ul class="navbar__nav" id="nav-menu" [class.open]="isMenuOpen()" role="list">
            <li><a class="navbar__link" href="#alojamiento" (click)="closeMenu()">{{ t().nav.home }}</a></li>
            <li><a class="navbar__link" href="#galeria" (click)="closeMenu()">{{ t().nav.gallery }}</a></li>
            <li><a class="navbar__link" href="#servicios" (click)="closeMenu()">{{ t().nav.services }}</a></li>
            <li><a class="navbar__link" href="#ubicacion" (click)="closeMenu()">{{ t().nav.location }}</a></li>
            <li><a class="navbar__link" href="#faq" (click)="closeMenu()">{{ t().nav.faq }}</a></li>
            <li>
              <a class="navbar__link navbar__cta btn btn--ghost"
                 href="#contacto" (click)="closeMenu()"
                 style="min-height:40px;padding:.4rem 1.1rem;">
                {{ t().nav.book }}
              </a>
            </li>
            <li class="navbar__lang-item">
              <app-lang-switcher />
            </li>
          </ul>

        </div>
      </nav>
    </header>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void { this.isScrolled.set(window.scrollY > 60); }

  toggleMenu(): void { this.isMenuOpen.update((v) => !v); }
  closeMenu(): void  { this.isMenuOpen.set(false); }
}
