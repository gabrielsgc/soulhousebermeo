import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoRouteData {
  description?: string;
  jsonLd?: JsonLdValue;
  guide?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleSvc = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly doc = inject(DOCUMENT);
  private readonly siteUrl = 'https://www.soulhousebermeo.com';
  private readonly jsonLdScriptId = 'route-jsonld';

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.applyRouteSeo());

    this.applyRouteSeo();
  }

  private applyRouteSeo(): void {
    const current = this.getDeepestRoute();
    const data = (current.snapshot.data ?? {}) as SeoRouteData;
    const title = current.snapshot.title ?? this.titleSvc.getTitle();
    const description = data.description ?? '';
    const path = this.router.url.split('?')[0].split('#')[0] || '/';
    const canonicalPath = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
    const canonicalUrl = `${this.siteUrl}${canonicalPath}`;
    const language = this.doc.documentElement.lang || 'es';

    if (title) {
      this.titleSvc.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ name: 'twitter:title', content: title }, 'name="twitter:title"');
    }

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description }, 'name="twitter:description"');
    }

    this.meta.updateTag({ name: 'robots', content: 'index,follow,max-image-preview:large' });

    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: data.guide ? 'article' : 'website' });
    this.meta.updateTag({ property: 'og:locale', content: this.toOgLocale(language) });
    this.meta.updateTag(
      { property: 'og:image', content: `${this.siteUrl}/assets/images/hero-facade.png` },
    );
    this.meta.updateTag(
      { name: 'twitter:image', content: `${this.siteUrl}/assets/images/hero-facade.png` },
      'name="twitter:image"',
    );
    this.upsertCanonicalLink(canonicalUrl);
    this.upsertJsonLd(this.buildJsonLd(data, title, description, canonicalUrl, language));
  }

  private buildJsonLd(
    data: SeoRouteData,
    title: string,
    description: string,
    canonicalUrl: string,
    language: string,
  ): JsonLdValue | undefined {
    const values: Array<Record<string, unknown>> = [];

    if (data.jsonLd) {
      values.push(...(Array.isArray(data.jsonLd) ? data.jsonLd : [data.jsonLd]));
    }

    if (this.router.url !== '/') {
      values.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: `${this.siteUrl}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: canonicalUrl,
          },
        ],
      });
    }

    if (data.guide) {
      values.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: title,
        description,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        image: `${this.siteUrl}/assets/images/hero-facade.png`,
        author: { '@type': 'Organization', name: 'Soul House Bermeo' },
        publisher: {
          '@type': 'Organization',
          name: 'Soul House Bermeo',
          logo: {
            '@type': 'ImageObject',
            url: `${this.siteUrl}/imgs/logo-soulhousebermeo-VT.webp`,
          },
        },
        inLanguage: language,
      });
    }

    return values.length ? values : undefined;
  }

  private toOgLocale(language: string): string {
    const locales: Record<string, string> = {
      es: 'es_ES',
      eu: 'eu_ES',
      en: 'en_GB',
      fr: 'fr_FR',
      de: 'de_DE',
    };
    return locales[language] ?? 'es_ES';
  }

  private getDeepestRoute(): ActivatedRoute {
    let current = this.route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  private upsertCanonicalLink(url: string): void {
    let canonical = this.doc.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = this.doc.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }

  private upsertJsonLd(jsonLd?: JsonLdValue): void {
    const existing = this.doc.getElementById(this.jsonLdScriptId);
    if (!jsonLd) {
      existing?.remove();
      return;
    }

    const script = existing ?? this.doc.createElement('script');
    script.id = this.jsonLdScriptId;
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(jsonLd);

    if (!existing) {
      this.doc.head.appendChild(script);
    }
  }
}
