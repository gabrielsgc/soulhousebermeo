# CLAUDE.md — Soul House Bermeo

Read always before task.

## Project

Soul House Bermeo — official website of a vivienda turística in the port of Bermeo (Bizkaia, Euskadi).

- Stack: Angular 17 · TS 5.2 · standalone components · SSR (Angular Universal + Express) · pure CSS
- Backend: Cloudflare Pages Functions (`functions/api/`) — no EmailJS, no client-side email
  - `POST /api/contact` → sends email via **Resend** API (`RESEND_API_KEY` secret)
  - `GET /api/availability` → parses Booking.com iCal feed (`BOOKING_ICAL_URL` secret), edge-cached 1h
- Deploy: **Cloudflare Pages** (primary; `wrangler.toml`). Static SSG output also works on Netlify/Vercel.
- Analytics: Google Analytics (`googleAnalyticsMeasurementId` in `environment.prod.ts`), gated by cookie consent
- Owner / contact: Gabriel García — `gabrielsgc@gmail.com`

## Structure

```
src/app/
  components/    # standalone section components (inline template or .html if >60 lines)
    amenities/ contact/ cookie-consent/ faq/ footer/ gallery/ hero/ highlights/ location/ rooms/
    layout/layout.component.ts         # shell of inner pages: navbar + <main><ng-content/></main> + footer + cookie
    navbar/navbar.component.ts
    navbar/lang-switcher.component.ts  # WCAG 2.2 lang switcher (APG listbox pattern)
    ui/icon.component.ts               # shared inline SVG icon component
  pages/         # one lazy-loaded standalone component per route (see Routing)
    home/ la-casa/ galeria/ servicios/ ubicacion/ faq/ reservar/
  services/
    email.service.ts          # POSTs the contact form to /api/contact (fetch)
    availability.service.ts    # fetches /api/availability (blocked date ranges)
    i18n.service.ts            # runtime i18n: signal<Lang> + computed() DICT[lang]
    seo.service.ts             # per-route <title>/meta/JSON-LD from route data
    analytics.service.ts       # Google Analytics, only after cookie consent
    cookie-consent.service.ts  # consent state (signal) + persistence
src/environments/  # contactApiUrl + GA id — NO secrets here (secrets live in Cloudflare)
functions/api/     # Cloudflare Pages Functions (contact.ts, availability.ts)
public/            # static assets served at site root (images, logo, etc.)
```

## Routing

SSR app with lazy-loaded routes (`src/app/app.routes.ts`), each prerendered as a static route at build:

| Path | Component | Notes |
|------|-----------|-------|
| `` | HomeComponent | assembles all landing sections |
| `la-casa` | LaCasaComponent | |
| `galeria` | GaleriaComponent | |
| `servicios` | ServiciosComponent | |
| `ubicacion` | UbicacionComponent | |
| `faq` | FaqPageComponent | |
| `reservar` | ReservarComponent | booking form + availability calendar |
| `**` | → redirect to `` | |

Route `data` carries `description` and optional `jsonLd`; `SeoService` applies them per navigation. Add new routes only on user request.

## i18n

- Langs: `es | eu | en | fr` (Spanish · Basque · English · French)
- Pattern: `inject(I18nService).t` → `computed(() => DICT[lang()])`
- Template: `{{ t().section.key }}`
- Lang switcher: `app-lang-switcher` standalone component in navbar

## Code conventions

- Standalone always (`standalone: true`). No NgModules.
- Inline template <60 lines; else `.html` file.
- CSS per component; global vars in `src/styles.css`.
- Selectors: kebab-case (`app-hero`, `app-rooms`…).
- Semantic HTML mandatory: `<section>` `<nav>` `<footer>` `aria-*` ARIA roles.
- No UI libs (Bootstrap / Material / Tailwind / PrimeNG).
- Visible text strings via i18n DICT in template (no per-string JSON files scattered around).
- WCAG AA contrast minimum; mobile-first CSS.
- SSR-safe: no direct `window`/`document` access outside browser guards (`isPlatformBrowser`).

## Commands

```bash
npm start         # ng serve → http://localhost:4200
npm run build     # ng build --configuration production → dist/soul-house-bermeo/ (browser/ + server/)
npm test          # Karma + Jasmine (headless: npx ng test --watch=false --browsers=ChromeHeadless)
```

> Corporate network with SSL inspection: if `npm install` fails with `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`,
> point Node at the Windows trust store bundle: `npm config set cafile <corp-ca-bundle.pem>` and
> `NODE_EXTRA_CA_CERTS=<corp-ca-bundle.pem>`. Do NOT set `strict-ssl false`.

## Env vars / secrets

Frontend config lives in `src/environments/*.ts` (safe, non-secret):

| Var | File | Value |
|-----|------|-------|
| `contactApiUrl` | both | `/api/contact` |
| `googleAnalyticsMeasurementId` | `environment.prod.ts` | GA4 measurement id |

Server secrets are set in the **Cloudflare Pages dashboard** (Settings → Environment variables), never committed:

| Secret | Used by | Purpose |
|--------|---------|---------|
| `RESEND_API_KEY` | `functions/api/contact.ts` | send contact emails via Resend |
| `CONTACT_EMAIL` | `functions/api/contact.ts` | recipient (defaults to owner email) |
| `BOOKING_ICAL_URL` | `functions/api/availability.ts` | Booking.com iCal export URL |

## Agents

**dev:** read component + CSS first · keep teal/dark palette · contact changes → update `EmailService` + `functions/api/contact.ts` together · SSR-safe code · run `npm run build` after · no new npm deps without user confirm.

**design/CSS:** use global vars · mobile-first · WCAG AA · no `!important` except justified.

**content:** warm/evocative tone · neutral Peninsular Spanish · booking is direct (no OTA commission) · text via i18n DICT.

**QA:** check `aria-label` `alt` heading order · form validates all required fields · build clean · `npm test` green · no secrets in source.

**deploy:** `npm run build` → Cloudflare Pages publishes `dist/soul-house-bermeo/browser/` (see `wrangler.toml`). Functions in `functions/api/` deploy automatically with Pages. Netlify/Vercel: publish dir = `browser/`.

## Architecture decisions

- Multi-route SSR site (prerendered). `HomeComponent` assembles landing sections; section order changed only there.
- `EmailService` is the only frontend caller of `/api/contact`; components never fetch it directly.
- Contact email is sent server-side (Resend) from `functions/api/contact.ts` — the browser only POSTs validated JSON.
- Availability comes from Booking.com iCal via `/api/availability`; parsing/caching stays in the Function.
- Images/assets in `public/`; no external CDN without confirm.

## NEVER

- NgModules
- UI component libs
- Extra routes without user request
- Change contact email without owner instruction
- `git push` or deploy autonomously
- Commit secrets (`RESEND_API_KEY`, `BOOKING_ICAL_URL`) to source
- Add EmailJS back — email is server-side via Resend
