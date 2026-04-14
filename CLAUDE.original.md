# CLAUDE.md — Orquestación de agentes para Soul House Bermeo

Este fichero dirige el comportamiento de los agentes de IA al trabajar en este proyecto.
Léelo siempre antes de realizar cualquier tarea.

---

## Descripción del proyecto

**Soul House Bermeo** es el sitio web oficial de una vivienda turística en el puerto de Bermeo (Bizkaia, País Vasco).

- **Stack:** Angular 17 · TypeScript 5.2 · standalone components · CSS puro (sin frameworks UI)
- **Email:** EmailJS (`@emailjs/browser`) para el formulario de contacto, sin backend
- **Despliegue objetivo:** Netlify / GitHub Pages / Vercel (estático)
- **Propietario:** Gabriel García — `gabrielsgc@gmail.com`

---

## Estructura del proyecto

```
src/
  app/
    components/        ← Componentes de sección (standalone, inline template o .html)
      amenities/       Servicios y comodidades
      contact/         Formulario de contacto con EmailJS
      faq/             Preguntas frecuentes
      footer/          Pie de página
      gallery/         Galería de fotos
      hero/            Cabecera principal (above-the-fold)
      highlights/      Puntos destacados del alojamiento
      location/        Mapa e información de ubicación
      navbar/          Barra de navegación
      rooms/           Descripción de habitaciones
    pages/
      home/            HomeComponent — ensamblador de todas las secciones
    services/
      email.service.ts Servicio EmailJS (sanitización incluida)
  environments/
    environment.ts         Claves EmailJS para desarrollo (NO commitear valores reales)
    environment.prod.ts    Claves EmailJS para producción  (NO commitear valores reales)
  assets/
    images/            Todas las imágenes del sitio
```

---

## Convenciones de código

- **Componentes standalone** siempre (`standalone: true`). No usar NgModules.
- **Templates inline** para componentes pequeños; archivo `.html` separado solo si supera ~60 líneas.
- **CSS por componente** en su propio `.css`; variables globales en `src/styles.css`.
- Nombres en **kebab-case** para selectores (`app-hero`, `app-rooms`…).
- El HTML semántico es obligatorio: `<section>`, `<nav>`, `<footer>`, `aria-*`, roles ARIA.
- **Sin dependencias externas de UI** (no Bootstrap, no Tailwind, no Angular Material).
- Los literales de texto visibles están en **español**.

---

## Comandos habituales

```bash
npm start          # ng serve — servidor de desarrollo en http://localhost:4200
npm run build      # ng build --configuration production
npm test           # ng test (Karma + Jasmine)
```

---

## Variables de entorno sensibles

Las claves de EmailJS viven en `src/environments/`.  
**Nunca** hardcodear claves en componentes ni servicios.  
En CI/CD, inyectarlas como variables de entorno del pipeline y sustituirlas antes del build.

| Variable             | Fichero                  |
|----------------------|--------------------------|
| `emailjsPublicKey`   | `environment.ts`         |
| `emailjsServiceId`   | `environment.ts`         |
| `emailjsTemplateId`  | `environment.ts`         |

---

## Instrucciones por rol de agente

### Agente de desarrollo (implementación de features)

1. Lee primero el componente afectado y su CSS antes de tocar nada.
2. Mantén el estilo visual existente: paleta teal/oscuro, tipografía sobria, look "boutique".
3. Cambios en el formulario de contacto → también actualiza `EmailService` y la plantilla EmailJS si es necesario.
4. Tras cada cambio ejecuta `npm run build` para verificar que compila sin errores.
5. No añadas dependencias npm sin confirmar con el usuario.

### Agente de diseño / CSS

1. Las variables CSS globales están en `src/styles.css`; úsalas, no dupliques valores.
2. El diseño es **mobile-first**: primero estilos para móvil, luego media queries para escritorio.
3. Mantén el contraste WCAG AA mínimo en todos los textos.
4. No uses `!important` salvo overrides justificados.

### Agente de contenido / copy

1. El tono es **cálido, evocador y directo** — turismo de calidad, no corporativo.
2. Toda copy visible en **español neutro peninsular** (País Vasco como contexto geográfico).
3. Llama de reserva directa: `gabrielsgc@gmail.com` — no añadir intermediarios (Booking, Airbnb…) salvo indicación explícita del usuario.
4. Los textos van dentro del template del componente correspondiente, no en ficheros JSON externos.

### Agente de QA / revisión

1. Comprueba accesibilidad: `aria-label`, `alt` en `<img>`, orden lógico de headings (`h1` → `h2` → `h3`).
2. Verifica que el formulario valida todos los campos requeridos antes de enviar.
3. Asegúrate de que `npm run build` termina sin warnings ni errores.
4. Revisa que no queden claves reales de EmailJS en el código antes de cualquier commit.

### Agente de despliegue

1. Build de producción: `npm run build` — salida en `dist/soul-house-bermeo/`.
2. Para **Netlify**: sube la carpeta `dist/soul-house-bermeo/browser/` como publish directory.
3. Para **GitHub Pages**: usa `npx angular-cli-ghpages --dir=dist/soul-house-bermeo/browser`.
4. Confirma que el `index.html` raíz (versión sin Angular) sigue funcional de forma independiente.

---

## Decisiones de arquitectura ya tomadas

- Single-page application con una única ruta (`/`). No añadir rutas hijas sin consenso.
- El `HomeComponent` ensambla todas las secciones en orden; el orden de secciones se cambia solo ahí.
- `EmailService` es el único punto de integración con EmailJS; no llamar a emailjs directamente desde componentes.
- Las imágenes van como assets estáticos en `src/assets/images/`; no usar CDN externas sin confirmar.

---

## Lo que NO se debe hacer

- No crear NgModules.
- No instalar librerías de componentes UI (Bootstrap, Material, Tailwind, PrimeNG…).
- No añadir rutas adicionales sin que el usuario lo pida explícitamente.
- No cambiar el correo de contacto sin instrucción explícita del propietario.
- No hacer `git push` ni desplegar en producción de forma autónoma.
- No exponer claves de API en el código fuente versionado.
