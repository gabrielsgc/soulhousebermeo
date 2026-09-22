import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { GuideContent, GuideKey, GUIDES } from './guides-content';
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
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly guideKey = this.route.snapshot.data['guide'] as GuideKey;
  protected readonly guide = computed<GuideContent>(
    () => GUIDES[this.i18n.currentLang()][this.guideKey] ?? GUIDES.es[this.guideKey] ?? GUIDES.es.bermeo!,
  );
  protected readonly guideMapTitle = computed(() =>
    this.i18n.currentLang() === 'es' ? 'Mapa de Bermeo y sus alrededores' : 'Map of Bermeo and surroundings',
  );
  protected readonly quickAnswerLabel = computed(() => ({
    es: 'Respuesta rápida', eu: 'Erantzun azkarra', en: 'Quick answer',
    fr: 'Réponse rapide', de: 'Schnelle Antwort',
  })[this.i18n.currentLang()]);
  protected readonly guideMapUrl = computed(() => {
    const mapUrl = this.guide().mapUrl;
    return mapUrl ? this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl) : null;
  });
  protected renderText(text: string): string {
    return text.replace(
      /\[([^\]]+)\]\((\/[^)]+)\)/g,
      '<a href="$2">$1</a>',
    );
  }
  protected readonly t = this.i18n.t;
}
