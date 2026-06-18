import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoRouteData {
  description?: string;
  jsonLd?: JsonLdValue;
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

    if (title) {
      this.titleSvc.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
    }

    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }

    this.meta.updateTag({ name: 'robots', content: 'index,follow,max-image-preview:large' });

    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.upsertCanonicalLink(canonicalUrl);
    this.upsertJsonLd(data.jsonLd);
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
