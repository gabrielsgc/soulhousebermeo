# CLAUDE.md — Soul House Bermeo

Read always before task.

## Project

Soul House Bermeo — official website vivienda turística puerto Bermeo (Bizkaia, Euskadi).

- Stack: Angular 18+ · TS 5.2 · standalone components · pure CSS
- Email: EmailJS (`@emailjs/browser`) contact form, no backend
- Deploy: Netlify / GitHub Pages / Vercel (static)
- Owner: Gabriel García — `gabrielsgc@gmail.com`

## Structure

```
src/app/
  components/    # standalone section components (inline template or .html if >60 lines)
    amenities/ contact/ faq/ footer/ gallery/ hero/ highlights/ location/ navbar/ rooms/
    navbar/lang-switcher.component.ts  # WCAG 2.2 lang switcher (APG listbox pattern)
  pages/home/    # HomeComponent — assembles all sections in order
  services/
    email.service.ts   # only EmailJS integration point
    i18n.service.ts    # runtime i18n: signal<Lang> + computed() DICT[lang]
src/environments/  # EmailJS keys — NO commit real values
src/assets/images/ # all site images (hero-facade.png etc.)
```

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
- Visible text strings in component template (no JSON files).
- WCAG AA contrast minimum; mobile-first CSS.

## Commands

```bash
npm start         # ng serve → http://localhost:4200
npm run build     # ng build --configuration production → dist/soul-house-bermeo/
npm test          # Karma + Jasmine
```

## Env vars / EmailJS keys

`src/environments/environment.ts` + `environment.prod.ts`  
Never hardcode keys. Inject via CI/CD pipeline env vars before build.

| Var | File |
|-----|------|
| `emailjsPublicKey` | `environment.ts` |
| `emailjsServiceId` | `environment.ts` |
| `emailjsTemplateId` | `environment.ts` |

## Agents

**dev:** read component + CSS first · keep teal/dark palette · contact changes → update EmailService · run `npm run build` after · no new npm deps without user confirm.

**design/CSS:** use global vars · mobile-first · WCAG AA · no `!important` except justified.

**content:** warm/evocative tone · neutral Peninsular Spanish · direct booking `gabrielsgc@gmail.com` · text in template, not JSON.

**QA:** check `aria-label` `alt` heading order · form validates all required fields · build clean · no real EmailJS keys in source.

**deploy:** `npm run build` → `dist/soul-house-bermeo/browser/`. Netlify: publish dir = browser/. GH Pages: `npx angular-cli-ghpages --dir=dist/soul-house-bermeo/browser`.

## Architecture decisions

- SPA single route `/`. No child routes without consensus.
- `HomeComponent` assembles sections; order changed only there.
- `EmailService` only EmailJS integration; no direct emailjs calls from components.
- Images as static assets `src/assets/images/`; no external CDN without confirm.

## NEVER

- NgModules
- UI component libs
- Extra routes without user request
- Change contact email without owner instruction
- `git push` or deploy autonomously
- Expose API keys in versioned source
