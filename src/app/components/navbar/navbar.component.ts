import { AfterViewInit, Component, inject, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { I18nService } from '../../services/i18n.service';
import { LangSwitcherComponent } from './lang-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LangSwitcherComponent, RouterLink],
  template: `
    <header id="site-header" role="banner">
      <nav class="navbar" [class.scrolled]="isScrolled()" [class.navbar--solid]="isGuidePage()" [attr.aria-label]="t().nav.ariaNav">
        <div class="container navbar__inner">

          <a class="navbar__brand" [routerLink]="'/'" [attr.aria-label]="t().nav.ariaBrand" (click)="closeMenu()">
            <img
              src="https://www.soulhousebermeo.com/imgs/logo-soulhousebermeo-VT.webp"
              alt="Soul House Bermeo"
              class="navbar__brand-logo"
              width="46"
              height="46"
            />
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
            <li><a class="navbar__link" [routerLink]="'/la-casa'" (click)="closeMenu()">{{ t().nav.home }}</a></li>
            <li><a class="navbar__link" [routerLink]="'/galeria'" (click)="closeMenu()">{{ t().nav.gallery }}</a></li>
            <li><a class="navbar__link" [routerLink]="'/servicios'" (click)="closeMenu()">{{ t().nav.services }}</a></li>
            <li><a class="navbar__link" [routerLink]="'/ubicacion'" (click)="closeMenu()">{{ t().nav.location }}</a></li>
            <li><a class="navbar__link" [routerLink]="'/faq'" (click)="closeMenu()">{{ t().nav.faq }}</a></li>
            <li>
              <a class="navbar__link navbar__cta btn btn--ghost"
                 [routerLink]="'/reservar'" (click)="closeMenu()">
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
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;

  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isGuidePage = signal(this.router.url.startsWith('/guia'));
  private routerSubscription?: Subscription;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => this.isGuidePage.set((event as NavigationEnd).urlAfterRedirects.startsWith('/guia')));

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  private readonly onScroll = (): void => {
    this.isScrolled.set(window.scrollY > 60);
  };

  toggleMenu(): void { this.isMenuOpen.update((v) => !v); }
  closeMenu(): void  { this.isMenuOpen.set(false); }
}
