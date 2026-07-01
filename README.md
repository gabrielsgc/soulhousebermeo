# Soul House Bermeo — Sitio Web Oficial

Vivienda Turística en el puerto de Bermeo (Bizkaia, País Vasco).
3 habitaciones · 6 plazas · Reserva directa sin comisiones.

Web en producción: **https://www.soulhousebermeo.com**

---

## Stack

- **Angular 17** (standalone components) con **SSR** (Angular Universal + Express) y prerender de rutas.
- **CSS puro** mobile-first (sin librerías de UI).
- **i18n** propio en 4 idiomas: español · euskera · inglés · francés.
- **Backend serverless**: Cloudflare Pages Functions (`functions/api/`).
  - `POST /api/contact` — envía el email de la reserva usando **Resend**.
  - `GET /api/availability` — lee el iCal de Booking.com y devuelve las fechas bloqueadas (cacheado en el edge 1 h).
- **Deploy**: Cloudflare Pages (ver `wrangler.toml`).

> El formulario de contacto **ya no usa EmailJS**: el email se manda desde el servidor (Resend), así la clave nunca viaja al navegador.

---

## Requisitos

- **Node.js 20+** ([nodejs.org](https://nodejs.org/)).
- Cuenta de [Cloudflare Pages](https://pages.cloudflare.com/) para el deploy y los secrets.
- Cuenta de [Resend](https://resend.com/) con el dominio `soulhousebermeo.com` verificado (para el envío de emails).

---

## Instalar y ejecutar

```bash
npm install

# Servidor de desarrollo → http://localhost:4200
npm start

# Compilar para producción → dist/soul-house-bermeo/ (browser/ + server/)
npm run build

# Tests (headless):
npx ng test --watch=false --browsers=ChromeHeadless
```

> **Red corporativa con inspección SSL.** Si `npm install` falla con
> `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`, exporta el almacén de certificados raíz de
> Windows a un `.pem` y apunta Node a él:
> `npm config set cafile C:\ruta\corp-ca-bundle.pem` y
> variable de entorno `NODE_EXTRA_CA_CERTS=C:\ruta\corp-ca-bundle.pem`.
> No uses `strict-ssl false`.

---

## Configuración (variables de entorno)

### Frontend — `src/environments/*.ts` (no secretos)

| Variable | Descripción |
|---|---|
| `contactApiUrl` | Endpoint del formulario. Valor: `/api/contact`. |
| `googleAnalyticsMeasurementId` | ID de GA4 (solo en `environment.prod.ts`). |

### Backend — secrets en el panel de Cloudflare Pages

Se configuran en **Settings → Environment variables** y **nunca** se suben al repo. Para desarrollo local, copia `.env.example` a `.env`.

| Secret | Usado por | Descripción |
|---|---|---|
| `RESEND_API_KEY` | `functions/api/contact.ts` | API key de Resend para enviar emails. |
| `CONTACT_EMAIL` | `functions/api/contact.ts` | Destinatario de las consultas (por defecto el email del propietario). |
| `BOOKING_ICAL_URL` | `functions/api/availability.ts` | URL de exportación iCal del calendario de Booking.com. |

---

## Campos del formulario de contacto

El formulario envía a `/api/contact` un JSON con estos campos (validados también en el servidor):

| Campo | Descripción | Obligatorio |
|---|---|---|
| `nombre` | Nombre del visitante | ✅ |
| `email` | Email de contacto | ✅ |
| `telefono` | Teléfono | — |
| `personas` | Número de personas | ✅ |
| `fecha_llegada` | Fecha de llegada (YYYY-MM-DD) | ✅ |
| `fecha_salida` | Fecha de salida (YYYY-MM-DD) | ✅ |
| `mensaje` | Mensaje libre | — |

---

## Publicar (Cloudflare Pages)

1. Conecta el repositorio de GitHub en el panel de Cloudflare Pages.
2. Build command: `npm run build`. Output directory: `dist/soul-house-bermeo/browser`.
3. Las funciones de `functions/api/` se despliegan automáticamente junto a la web.
4. Añade los secrets (`RESEND_API_KEY`, `CONTACT_EMAIL`, `BOOKING_ICAL_URL`) en Settings → Environment variables.

> Alternativas estáticas (Netlify/Vercel): publica `dist/soul-house-bermeo/browser/`. Nota: `/api/*` depende de Cloudflare Pages Functions; en otros hostings habría que portar esas funciones.

---

## Estructura de carpetas

```
soulhousebermeo/
├── functions/api/           ← Cloudflare Pages Functions (backend)
│   ├── contact.ts           ← POST /api/contact  (Resend)
│   └── availability.ts      ← GET  /api/availability (iCal Booking)
├── public/                  ← assets estáticos servidos en la raíz
├── server.ts                ← servidor Express para SSR
├── wrangler.toml            ← config de Cloudflare Pages
├── src/
│   ├── main.ts · main.server.ts
│   ├── styles.css           ← design system global
│   ├── environments/        ← contactApiUrl + GA id (sin secretos)
│   └── app/
│       ├── app.routes.ts    ← rutas (lazy + prerender)
│       ├── services/        ← email · availability · i18n · seo · analytics · cookie-consent
│       ├── pages/           ← home · la-casa · galeria · servicios · ubicacion · faq · reservar
│       └── components/      ← navbar · hero · highlights · rooms · gallery · amenities · location · faq · contact · footer · cookie-consent · ui
└── README.md
```

---

## SEO & GEO

- Meta tags primarios + Open Graph + Twitter Card por ruta (`SeoService`).
- Canonical y hreflang (es / eu / en / fr).
- GEO tags (geo.region ES-BI, coordenadas lat 43.4196, lng -2.7231).
- Schema.org JSON-LD: `LodgingBusiness`, `ContactPage` / `ReserveAction`, etc.

## Accesibilidad (WCAG 2.2)

- Skip link, `focus-visible`, objetivos táctiles ≥ 44×44 px.
- `aria-expanded` / `aria-controls` en FAQ y menú móvil.
- `aria-invalid` + `aria-describedby` y `role="alert"` en el formulario.
- Selector de idioma con patrón listbox (APG). `prefers-reduced-motion` respetado.

## Seguridad

- Validación y sanitización en cliente **y** servidor (`hasScript()` / `sanitize()`).
- CORS restringido a los dominios del sitio; límites de tamaño y `Content-Type` en `/api/contact`.
- Honeypot anti-bot. Secretos solo en Cloudflare, nunca en el repo.

---

*Angular 17 SSR · Cloudflare Pages Functions · Resend · diseño responsive mobile-first.*
