import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CookieConsentComponent } from '../cookie-consent/cookie-consent.component';

/**
 * Shell común de las páginas interiores: navbar + <main> + footer + banner de cookies.
 * El contenido de la página se proyecta dentro de <main> mediante <ng-content>.
 * (La home no usa este layout porque aplica carga diferida propia con @defer.)
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CookieConsentComponent],
  template: `
    <app-navbar />
    <main id="main-content">
      <ng-content />
    </main>
    <app-footer />
    <app-cookie-consent />
  `,
})
export class LayoutComponent {}
