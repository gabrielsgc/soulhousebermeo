import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { GuideKey, GUIDES } from './guides-content';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieConsentComponent } from '../../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-guias',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent, CookieConsentComponent],
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css'],
})
export class GuiasComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);
  protected readonly guideKey = this.route.snapshot.data['guide'] as GuideKey;
  protected readonly guide = computed(() => GUIDES[this.i18n.currentLang()][this.guideKey]);
  protected readonly t = this.i18n.t;
}
