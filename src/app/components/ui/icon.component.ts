import { Component, inject, input, computed } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/** Nautical-editorial stroke icon library — 24×24 viewBox, fill="none" */
const ICONS: Record<string, string> = {
  // ── Navigation / Brand ────────────────────────────────────────
  anchor: `<circle cx="12" cy="6" r="2.5"/>
    <line x1="12" y1="8.5" x2="12" y2="20"/>
    <line x1="5" y1="13" x2="19" y2="13"/>
    <path d="M8 20c0-3.5 2-5 4-5s4 1.5 4 5"/>`,

  house: `<path d="M3 10.5L12 3L21 10.5V20H15V13H9V20H3Z"/>`,

  compass: `<circle cx="12" cy="12" r="9"/>
    <polygon points="12,3 14,10 12,12 10,10" fill="currentColor" opacity=".8"/>
    <polygon points="12,21 10,14 12,12 14,14" fill="currentColor" opacity=".35"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,

  // ── Features / Amenities ──────────────────────────────────────
  users: `<path d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 20v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>`,

  wave: `<path d="M3 13c1.5-2.5 3-2.5 4.5 0s3 2.5 4.5 0 3-2.5 4.5 0 3 2.5 4.5 0"/>
    <path d="M3 9.5c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" stroke-opacity=".4"/>`,

  wifi: `<path d="M5 12.55a11 11 0 0114.08 0"/>
    <path d="M1.42 9a16 16 0 0121.16 0"/>
    <path d="M8.53 16.11a6 6 0 016.95 0"/>
    <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>`,

  car: `<rect x="3" y="11" width="18" height="7" rx="2"/>
    <path d="M5 11V9a2 2 0 012-2h10a2 2 0 012 2v2"/>
    <circle cx="7.5" cy="18.5" r="1.5"/>
    <circle cx="16.5" cy="18.5" r="1.5"/>`,

  'check-circle': `<circle cx="12" cy="12" r="9"/>
    <path d="M9 12l2.5 2.5L15 9"/>`,

  key: `<circle cx="7.5" cy="12" r="5.5"/>
    <line x1="12.5" y1="10.5" x2="21" y2="10.5"/>
    <line x1="19" y1="10.5" x2="19" y2="13.5"/>
    <line x1="16" y1="10.5" x2="16" y2="12.5"/>`,

  // ── Nature / Highlights ───────────────────────────────────────
  feather: `<path d="M20 4L2 20"/>
    <path d="M2 20c2-1.5 4-3 7-7 1-1.5 3-5 9-9"/>
    <path d="M10 13.5c2-3 5-5 9-9"/>`,

  utensils: `<line x1="9" y1="2" x2="9" y2="22"/>
    <path d="M17 2v6a3 3 0 01-6 0V2"/>
    <line x1="6" y1="2" x2="6" y2="8"/>
    <line x1="12" y1="2" x2="12" y2="8"/>`,

  'sun-beach': `<line x1="3" y1="20" x2="21" y2="20"/>
    <circle cx="12" cy="11" r="4"/>
    <line x1="12" y1="3" x2="12" y2="5"/>
    <line x1="5.6" y1="5.6" x2="7" y2="7"/>
    <line x1="3" y1="11" x2="5" y2="11"/>
    <line x1="19" y1="11" x2="21" y2="11"/>
    <line x1="17" y1="7" x2="18.4" y2="5.6"/>`,

  leaf: `<path d="M2 22c0-10 8-16 18-18C18 14 10 20 2 22z"/>
    <line x1="10" y1="12" x2="2" y2="22"/>`,

  // ── Rooms ─────────────────────────────────────────────────────
  bed: `<path d="M2 9V7a2 2 0 012-2h16a2 2 0 012 2v2"/>
    <path d="M2 20V11a2 2 0 012-2h16a2 2 0 012 2v9"/>
    <line x1="2" y1="14" x2="22" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>`,

  cooking: `<path d="M5 8h14v8a3 3 0 01-3 3H8a3 3 0 01-3-3V8z"/>
    <path d="M8 5c0-1.1.9-2 2-2h4a2 2 0 010 4H8V5z"/>
    <line x1="5" y1="11" x2="19" y2="11"/>`,

  // ── Amenities ─────────────────────────────────────────────────
  tv: `<rect x="2" y="7" width="20" height="13" rx="2"/>
    <path d="M15 2L12 7 9 2"/>`,

  laundry: `<rect x="3" y="3" width="18" height="18" rx="2"/>
    <circle cx="12" cy="13" r="5"/>
    <circle cx="12" cy="13" r="2"/>
    <path d="M8.5 5.5h.01"/>`,

  snowflake: `<line x1="12" y1="2" x2="12" y2="22"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"/>
    <path d="M9 5L12 2 15 5M9 19l3 3 3-3M19 9l3 3-3 3M5 9L2 12l3 3"/>`,

  coffee: `<path d="M18 8h1a4 4 0 010 8h-1"/>
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/>
    <line x1="6" y1="2" x2="6" y2="4"/>
    <line x1="10" y1="2" x2="10" y2="4"/>
    <line x1="14" y1="2" x2="14" y2="4"/>`,

  shower: `<path d="M4 22V14a8 8 0 0116 0v1"/>
    <path d="M9 22a3 3 0 006 0v-5H9v5z"/>
    <line x1="9" y1="17" x2="15" y2="17"/>`,

  linen: `<path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v2H3z"/>
    <rect x="3" y="7" width="18" height="14" rx="1"/>
    <path d="M7 12h10M7 16h6"/>`,

  towels: `<rect x="4" y="3" width="16" height="4" rx="1"/>
    <rect x="4" y="10" width="16" height="4" rx="1"/>
    <rect x="4" y="17" width="16" height="4" rx="1"/>`,

  wheelchair: `<circle cx="12" cy="5" r="2"/>
    <path d="M9 9.5L10.5 14 14.5 15.5 17.5 21H8"/>
    <path d="M7.5 21a5 5 0 009.5-2"/>`,

  paw: `<circle cx="7" cy="7.5" r="2"/>
    <circle cx="12" cy="5.5" r="2"/>
    <circle cx="17" cy="7.5" r="2"/>
    <circle cx="4.5" cy="12.5" r="1.5"/>
    <path d="M7.5 19c0-4 2-6 4.5-6s4.5 2 4.5 6v1a2 2 0 01-2 2H9.5a2 2 0 01-2-2v-1z"/>`,

  broom: `<path d="M4 20L14 10"/>
    <path d="M14 10l4-6 2 2-6 4z"/>
    <path d="M12 12l-8 8"/>
    <path d="M4 20h8"/>`,

  parcel: `<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>`,

  // ── Contact / Social ──────────────────────────────────────────
  mail: `<rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8l10 7 10-7"/>`,

  phone: `<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.17 10.8 19.9 19.9 0 01.1 2.2a2 2 0 012-2.2h3a2 2 0 012 1.72c.1.99.4 1.96.7 2.88a2 2 0 01-.45 2.1L7.08 7.97a16 16 0 006.95 6.95l1.27-1.27a2 2 0 012.1-.45c.93.3 1.89.6 2.88.7a2 2 0 011.72 2z"/>`,

  'map-pin': `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>`,

  calendar: `<rect x="3" y="4" width="18" height="17" rx="2"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>`,

  instagram: `<rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>`,

  building: `<path d="M3 21h18"/>
    <path d="M5 21V5h14v16"/>
    <path d="M9 21v-7h6v7"/>
    <rect x="7" y="7" width="2.5" height="2.5"/>
    <rect x="10.5" y="7" width="2.5" height="2.5"/>
    <rect x="14" y="7" width="2.5" height="2.5"/>
    <rect x="7" y="12" width="2.5" height="2.5"/>
    <rect x="14" y="12" width="2.5" height="2.5"/>`,

  'message-circle': `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`,

  // ── Gallery / POI ─────────────────────────────────────────────
  sunrise: `<path d="M17 17H7a5 5 0 0110 0z"/>
    <line x1="12" y1="5" x2="12" y2="7"/>
    <line x1="5.6" y1="7.6" x2="7" y2="9"/>
    <line x1="2" y1="15" x2="4" y2="15"/>
    <line x1="20" y1="15" x2="22" y2="15"/>
    <line x1="17" y1="9" x2="18.4" y2="7.6"/>
    <line x1="3" y1="21" x2="21" y2="21"/>`,

  sofa: `<path d="M3 9a3 3 0 013-3h12a3 3 0 013 3v3H3V9z"/>
    <path d="M21 12v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5"/>
    <line x1="5" y1="19" x2="5" y2="21"/>
    <line x1="19" y1="19" x2="19" y2="21"/>`,

  city: `<line x1="3" y1="21" x2="21" y2="21"/>
    <path d="M3 21V9l6-6v18"/>
    <path d="M9 21V6l6-4v19"/>
    <path d="M15 21V10l6-3v14"/>
    <line x1="9" y1="10" x2="9" y2="10.01"/>
    <line x1="15" y1="9" x2="15" y2="9.01"/>`,

  train: `<rect x="4" y="2" width="16" height="15" rx="3"/>
    <line x1="4" y1="9" x2="20" y2="9"/>
    <circle cx="9" cy="18" r="1.5"/>
    <circle cx="15" cy="18" r="1.5"/>
    <line x1="9" y1="2" x2="9" y2="9"/>
    <line x1="15" y1="2" x2="15" y2="9"/>
    <path d="M7.5 21l-2 2M16.5 21l2 2"/>`,

  cart: `<circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2 2h3l1.68 9.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L22 7H6"/>`,
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.stroke-width]="weight()"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon"
      aria-hidden="true"
      [innerHTML]="svgContent()"
    ></svg>
  `,
  styles: [`
    :host { display: inline-flex; align-items: center; justify-content: center; line-height: 1; }
    .icon { flex-shrink: 0; }
  `],
})
export class IconComponent {
  name   = input.required<string>();
  size   = input<number>(20);
  weight = input<number>(1.5);

  private sanitizer = inject(DomSanitizer);

  svgContent = computed((): SafeHtml => {
    const raw = ICONS[this.name()] ?? `<circle cx="12" cy="12" r="9"/>`;
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  });
}
