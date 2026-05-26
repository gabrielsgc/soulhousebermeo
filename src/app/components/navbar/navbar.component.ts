import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { LangSwitcherComponent } from './lang-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LangSwitcherComponent],
  template: `
    <header id="site-header" role="banner">
      <nav class="navbar" [class.scrolled]="isScrolled()" [attr.aria-label]="t().nav.ariaNav">
        <div class="container navbar__inner">

          <a class="navbar__brand" href="#inicio" [attr.aria-label]="t().nav.ariaBrand">
            <span class="navbar__brand-logo" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="currentColor" class="logo-bg"/>
                <circle cx="40" cy="40" r="37" stroke="currentColor" stroke-width="1.2" fill="none" class="logo-ring"/>
                <g transform="translate(20, 22)">
                  <path d="M20 4L6 16h28L20 4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" fill="none" class="logo-stroke"/>
                  <rect x="10" y="16" width="20" height="18" stroke="currentColor" stroke-width="1.8" fill="none" rx="0.5" class="logo-stroke"/>
                  <rect x="17" y="24" width="6" height="10" stroke="currentColor" stroke-width="1.4" fill="none" rx="0.5" class="logo-stroke"/>
                  <rect x="12.5" y="19" width="5" height="5" stroke="currentColor" stroke-width="1.2" fill="none" rx="0.3" class="logo-stroke"/>
                  <rect x="22.5" y="19" width="5" height="5" stroke="currentColor" stroke-width="1.2" fill="none" rx="0.3" class="logo-stroke"/>
                </g>
                <path d="M16 58 C22 54, 28 62, 34 58 C40 54, 46 62, 52 58 C58 54, 64 62, 66 58" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none" class="logo-wave"/>
                <path d="M14 63 C20 59, 26 67, 32 63 C38 59, 44 67, 50 63 C56 59, 62 67, 68 63" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none" class="logo-wave-2"/>
              </svg>
            </span>
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
