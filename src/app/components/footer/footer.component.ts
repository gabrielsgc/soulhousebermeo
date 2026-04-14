import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { IconComponent } from '../ui/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  template: `
    <footer class="footer" role="contentinfo">
      <div class="container footer__grid">
        <div class="footer__brand">
          <p class="footer__logo">Soul House</p>
          <p class="footer__tagline">{{ t().footer.tagline }}</p>
          <p class="footer__desc">{{ t().footer.desc }}</p>
        </div>
        <nav class="footer__nav" [attr.aria-label]="t().footer.exploreHeading">
          <h3>{{ t().footer.exploreHeading }}</h3>
          <ul>
            @for (link of t().footer.navLinks; track link.href) {
              <li><a [href]="link.href">{{ link.label }}</a></li>
            }
          </ul>
        </nav>
        <div class="footer__contact">
          <h3>{{ t().footer.contactHeading }}</h3>
          <address>
            <a href="mailto:gabrielsgc@gmail.com" aria-label="gabrielsgc@gmail.com">
              <app-icon name="mail" [size]="13" style="vertical-align:middle;margin-right:.35rem" />
              gabrielsgc&#64;gmail.com
            </a>
          </address>
          <p>
            <a href="#contacto" class="btn btn--teal btn--sm" style="margin-top:1rem;display:inline-block;">
              {{ t().footer.bookNow }}
            </a>
          </p>
        </div>
        <div class="footer__legal">
          <h3>{{ t().footer.legalHeading }}</h3>
          <ul>
            @for (item of t().footer.legal; track item) {
              <li>{{ item }}</li>
            }
            <li>
              <a href="https://www.orubide.eus/es" rel="noopener noreferrer" target="_blank"
                 aria-label="Bizkaia Turismo">
                Bizkaia Turismo ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© {{ year }} Soul House Bermeo ·
          <a href="https://www.booking.com/hotel/es/soul-house.es.html"
             rel="noopener noreferrer" target="_blank" aria-label="Booking.com">
            Booking.com ↗
          </a>
        </p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly t = inject(I18nService).t;
  year = new Date().getFullYear();
}
