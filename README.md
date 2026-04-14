# Soul House Bermeo — Sitio Web Oficial

Vivienda Turística en el puerto de Bermeo (Bizkaia, País Vasco).  
3 habitaciones · 6 plazas · Reserva directa a `gabrielsgc@gmail.com`.

---

## Archivos del proyecto

| Archivo | Para qué sirve |
|---|---|
| `index.html` (raíz) | **Página lista para abrir ahora mismo** sin necesidad de Node.js. Ábrela con doble clic en el navegador. |
| `src/` | Proyecto Angular 17 para producción (requiere Node.js). |

---

## Uso inmediato (sin Node.js)

1. Abre `C:/proyectos/soul-house-bermeo/index.html` en cualquier navegador.
2. Configura EmailJS siguiendo los pasos de abajo.
3. Sube el archivo a cualquier hosting estático (Netlify, GitHub Pages, Vercel…).

---

## Configuración de EmailJS (imprescindible para el formulario)

El formulario de contacto usa [EmailJS](https://www.emailjs.com/) — envía emails directamente desde el navegador, sin servidor.

### Paso 1 — Crear cuenta

Ve a [https://www.emailjs.com/](https://www.emailjs.com/) y regístrate con `gabrielsgc@gmail.com`.

### Paso 2 — Crear un servicio de email

1. En el panel de EmailJS → **Email Services** → **Add New Service**
2. Selecciona **Gmail**
3. Conecta tu cuenta `gabrielsgc@gmail.com`
4. Dale el nombre `soul_house_service`
5. Copia el **Service ID** (ejemplo: `service_abc1234`)

### Paso 3 — Crear una plantilla de email

1. **Email Templates** → **Create New Template**
2. Usa este asunto: `Nueva consulta Soul House — {{nombre}}`
3. Cuerpo del mensaje:

```
Nombre: {{nombre}}
Email: {{email}}
Teléfono: {{telefono}}
Personas: {{personas}}
Llegada: {{fecha_llegada}}
Salida: {{fecha_salida}}

Mensaje:
{{mensaje}}
```

4. En **To email**: `gabrielsgc@gmail.com`
5. Guarda y copia el **Template ID** (ejemplo: `template_xyz9876`)

### Paso 4 — Obtener la Public Key

En el panel → **Account** → **General** → copia tu **Public Key** (ejemplo: `AbCdEfGhIjKlMnOp`)

### Paso 5 — Pegar las claves

#### En `index.html` (standalone)

Busca las líneas:
```javascript
const EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';
```
Reemplaza con tus valores reales.

#### En el proyecto Angular

Edita `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  emailjs: {
    publicKey:  'AbCdEfGhIjKlMnOp',   // ← tu Public Key
    serviceId:  'service_abc1234',      // ← tu Service ID
    templateId: 'template_xyz9876',     // ← tu Template ID
  },
};
```
Haz lo mismo en `src/environments/environment.prod.ts`.

---

## Instalar y ejecutar el proyecto Angular

> Requiere **Node.js 20+**. Descarga desde [https://nodejs.org/](https://nodejs.org/).

```bash
cd C:/proyectos/soul-house-bermeo

# Instalar dependencias
npm install

# Servidor de desarrollo (abre http://localhost:4200)
npx ng serve --open

# Compilar para producción
npx ng build --configuration production
# Resultado en dist/soul-house-bermeo/browser/
```

---

## Publicar online (gratis)

### Opción A — Netlify (recomendado, `index.html` standalone)

1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta `C:/proyectos/soul-house-bermeo/` (o solo `index.html`)
3. Netlify te da una URL pública inmediatamente
4. Puedes conectar tu dominio propio

### Opción B — GitHub Pages + Angular

```bash
npm install -g angular-cli-ghpages
npx ng build --configuration production --base-href /soul-house-bermeo/
npx ngh --dir=dist/soul-house-bermeo/browser
```

### Opción C — Vercel

```bash
npm i -g vercel
vercel
```

---

## Estructura de carpetas

```
soul-house-bermeo/
├── index.html                          ← Standalone HTML5 (listo para usar)
├── package.json
├── angular.json
├── tsconfig.json
├── src/
│   ├── index.html                      ← Entry Angular (SEO/GEO meta tags)
│   ├── main.ts
│   ├── styles.css                      ← Design system global
│   ├── environments/
│   │   ├── environment.ts              ← ⚠ Pon tus claves EmailJS aquí
│   │   └── environment.prod.ts
│   └── app/
│       ├── app.component.ts
│       ├── app.config.ts
│       ├── app.routes.ts
│       ├── services/
│       │   └── email.service.ts
│       ├── pages/home/
│       │   └── home.component.ts
│       └── components/
│           ├── navbar/
│           ├── hero/
│           ├── highlights/
│           ├── rooms/
│           ├── gallery/
│           ├── amenities/
│           ├── location/
│           ├── faq/
│           ├── contact/
│           └── footer/
└── README.md
```

---

## Variables de plantilla EmailJS

| Variable | Descripción |
|---|---|
| `{{nombre}}` | Nombre del visitante |
| `{{email}}` | Email de contacto |
| `{{telefono}}` | Teléfono (opcional) |
| `{{personas}}` | Número de personas |
| `{{fecha_llegada}}` | Fecha de llegada |
| `{{fecha_salida}}` | Fecha de salida |
| `{{mensaje}}` | Mensaje libre |

---

## SEO & GEO implementado

- ✅ Meta tags primarios (title, description, keywords)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ Canonical URL
- ✅ Hreflang (es / eu / en / x-default)
- ✅ GEO tags (geo.region ES-BI, geo.position, ICBM)
- ✅ Schema.org JSON-LD: `LodgingBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage`
- ✅ Coordenadas: lat 43.4196, lng -2.7231 (Bermeo, Bizkaia)

## Accesibilidad WCAG 2.2

- ✅ Skip link (Ir al contenido principal)
- ✅ `focus-visible` con 3px outline en todos los interactivos
- ✅ `aria-expanded` / `aria-controls` en FAQ y menú móvil
- ✅ `aria-invalid` + `aria-describedby` en todos los campos del formulario
- ✅ `role="alert"` en mensajes de error y éxito
- ✅ Mínimo 44×44px en todos los elementos interactivos
- ✅ Honeypot anti-spam (invisible para lectores de pantalla)
- ✅ `prefers-reduced-motion` respetado

## Seguridad

- ✅ CSP meta header
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy: geolocation=(), camera=(), microphone=()`
- ✅ `X-Frame-Options: DENY`  
- ✅ `rel="noopener noreferrer"` en todos los enlaces externos
- ✅ Validación XSS en formulario (`hasScript()` + `sanitize()`)
- ✅ Honeypot anti-bot

---

*Proyecto generado con Angular 17 Standalone Components + EmailJS. Diseño responsive mobile-first.*
