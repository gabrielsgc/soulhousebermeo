import { Routes } from '@angular/router';

const baseUrl = 'https://www.soulhousebermeo.com';
const logoUrl = `${baseUrl}/imgs/logo-soulhousebermeo-VT.webp`;
const coverImageUrl = `${baseUrl}/assets/images/og-image.jpg`;

const lodgingBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Soul House Bermeo',
  description:
    'Vivienda turística con 3 habitaciones y 6 plazas en el Puerto de Bermeo, País Vasco',
  url: baseUrl,
  logo: logoUrl,
  image: coverImageUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bermeo',
    addressRegion: 'Bizkaia',
    addressCountry: 'ES',
    postalCode: '48370',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.4196,
    longitude: -2.7231,
  },
  numberOfRooms: 3,
  occupancy: {
    '@type': 'QuantitativeValue',
    maxValue: 6,
  },
};

const reservarJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Reservar en Soul House Bermeo',
  url: `${baseUrl}/reservar/`,
  description:
    'Solicitud de disponibilidad y reserva directa para Soul House Bermeo, vivienda turística en Bizkaia.',
  mainEntity: {
    '@type': 'LodgingBusiness',
    name: 'Soul House Bermeo',
    url: baseUrl,
    logo: logoUrl,
    image: coverImageUrl,
    email: 'info@soulhousebermeo.com',
    telephone: '+34-665-743-132',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: `${baseUrl}/reservar/`,
    name: 'Solicitar reserva',
  },
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Alojamiento en Bermeo | Apartamento turístico junto al puerto',
    data: {
      description:
        'Apartamento turístico en Bermeo para 6 personas, junto al puerto y cerca de Urdaibai y San Juan de Gaztelugatxe. Reserva directa sin comisiones en Soul House Bermeo.',
      jsonLd: lodgingBusinessJsonLd,
    },
  },
  {
    path: 'la-casa',
    loadComponent: () =>
      import('./pages/la-casa/la-casa.component').then((m) => m.LaCasaComponent),
    title: 'Apartamento para 6 personas en Bermeo | Soul House',
    data: {
      description:
        'Descubre este apartamento para 6 personas en Bermeo: 3 habitaciones, vistas al Cantábrico y todo lo necesario para una escapada familiar en Bizkaia.',
      jsonLd: lodgingBusinessJsonLd,
    },
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./pages/galeria/galeria.component').then((m) => m.GaleriaComponent),
    title: 'Galería de Soul House Bermeo | Fotos de la vivienda turística',
    data: {
      description:
        'Explora la galería de Soul House Bermeo con fotos de habitaciones, salón, cocina y entorno costero en el puerto de Bermeo.',
    },
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios.component').then((m) => m.ServiciosComponent),
    title: 'Servicios y equipamiento | Soul House Bermeo',
    data: {
      description:
        'Consulta todos los servicios y amenities de Soul House Bermeo: cocina equipada, WiFi, confort y equipamiento para 6 plazas.',
    },
  },
  {
    path: 'ubicacion',
    loadComponent: () =>
      import('./pages/ubicacion/ubicacion.component').then((m) => m.UbicacionComponent),
    title: 'Alojamiento cerca de Gaztelugatxe y Urdaibai | Bermeo',
    data: {
      description:
        'Descubre dónde alojarse para visitar Urdaibai y San Juan de Gaztelugatxe: Soul House está en el puerto de Bermeo, cerca de Mundaka y Bilbao.',
    },
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then((m) => m.FaqPageComponent),
    title: 'Preguntas frecuentes | Soul House Bermeo',
    data: {
      description:
        'Resuelve tus dudas sobre reservas, check-in, cancelaciones y estancia en Soul House Bermeo.',
    },
  },
  {
    path: 'reservar',
    loadComponent: () =>
      import('./pages/reservar/reservar.component').then((m) => m.ReservarComponent),
    title: 'Reservar en Soul House Bermeo | Disponibilidad y contacto directo',
    data: {
      description:
        'Solicita disponibilidad y reserva directa en Soul House Bermeo sin comisiones, con respuesta rápida del alojamiento.',
      jsonLd: reservarJsonLd,
    },
  },
  { path: 'guia', redirectTo: 'guia/que-ver-en-bermeo', pathMatch: 'full' },
  {
    path: 'guia/que-ver-en-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Qué ver en Bermeo | Guía completa para visitar la joya de Urdaibai',
    data: {
      guide: 'que-ver-en-bermeo',
      description:
        'Descubre qué ver en Bermeo: puerto pesquero, casco histórico, Urdaibai, Isla de Izaro y San Juan de Gaztelugatxe. Guía completa para organizar tu escapada.',
    },
  },
  {
    path: 'guia/bermeo-en-dos-dias',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Bermeo en dos días | Ruta y guía local',
    data: {
      guide: 'bermeo-en-dos-dias',
      description:
        'Planifica qué hacer en Bermeo en dos días: puerto, casco histórico, gastronomía, San Juan de Gaztelugatxe y costa de Bizkaia.',
    },
  },
  {
    path: 'guia/donde-alojarse-en-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde alojarse en Bermeo | Soul House',
    data: {
      guide: 'donde-alojarse-en-bermeo',
      description:
        'Descubre dónde alojarse en Bermeo para disfrutar del puerto, Urdaibai, Mundaka, las playas de Bizkaia y San Juan de Gaztelugatxe.',
    },
  },
  {
    path: 'guia/playas-cerca-de-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Playas cerca de Bermeo | Laga, Laida y Urdaibai',
    data: {
      guide: 'playas-cerca-de-bermeo',
      description:
        'Conoce las mejores playas cerca de Bermeo, como Laga y Laida, y organiza una escapada por la costa de Urdaibai.',
    },
  },
  {
    path: 'guia/visitar-gaztelugatxe-desde-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Visitar Gaztelugatxe desde Bermeo | Guía práctica',
    data: {
      guide: 'visitar-gaztelugatxe-desde-bermeo',
      description:
        'Guía para visitar San Juan de Gaztelugatxe desde Bermeo: acceso, planificación, transporte y otros planes en la costa vasca.',
    },
  },
  {
    path: 'guia/donde-dormir-cerca-de-gaztelugatxe',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde dormir cerca de Gaztelugatxe | Soul House',
    data: {
      guide: 'donde-dormir-cerca-de-gaztelugatxe',
      description:
        'Descubre dónde dormir cerca de Gaztelugatxe y por qué Bermeo es una base cómoda para visitar el islote y Urdaibai.',
    },
  },
  {
    path: 'guia/gaztelugatxe-y-bermeo-en-un-fin-de-semana',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Gaztelugatxe y Bermeo en un fin de semana | Ruta',
    data: {
      guide: 'gaztelugatxe-y-bermeo-en-un-fin-de-semana',
      description:
        'Organiza un fin de semana en Bermeo y Gaztelugatxe con una ruta por el puerto, el casco histórico y la costa vasca.',
    },
  },
  {
    path: 'guia/que-ver-en-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Qué ver en Urdaibai | Guía de lugares imprescindibles',
    data: {
      guide: 'que-ver-en-urdaibai',
      description:
        'Descubre qué ver en Urdaibai: Mundaka, Gernika, las playas de Laga y Laida, el cabo Ogoño y los pueblos de la reserva.',
    },
  },
  {
    path: 'guia/ruta-por-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Ruta por Urdaibai | Itinerario desde Bermeo',
    data: {
      guide: 'ruta-por-urdaibai',
      description:
        'Organiza una ruta por Urdaibai desde Bermeo con paradas en Mundaka, Laga, Laida, Gernika y los paisajes de la reserva.',
    },
  },
  {
    path: 'guia/donde-alojarse-en-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde alojarse en Urdaibai | Soul House Bermeo',
    data: {
      guide: 'donde-alojarse-en-urdaibai',
      description:
        'Descubre dónde alojarse en Urdaibai y por qué Bermeo es una base cómoda para conocer playas, pueblos y naturaleza.',
    },
  },
  {
    path: 'guia/urdaibai-con-ninos',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Urdaibai con niños | Planes en familia',
    data: {
      guide: 'urdaibai-con-ninos',
      description:
        'Ideas para visitar Urdaibai con niños: playas, paseos por Bermeo y Mundaka, pueblos marineros y excursiones familiares.',
    },
  },
  {
    path: 'guias/bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Qué ver en Bermeo en 2 días | Guía local',
    data: {
      guide: 'bermeo',
      description:
        'Guía para descubrir Bermeo en dos días: puerto pesquero, casco histórico, isla de Ízaro y gastronomía vasca.',
    },
  },
  {
    path: 'guias/gaztelugatxe',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Cómo visitar San Juan de Gaztelugatxe desde Bermeo',
    data: {
      guide: 'gaztelugatxe',
      description:
        'Consejos para visitar San Juan de Gaztelugatxe desde Bermeo y disfrutar de la costa vasca con Soul House como base.',
    },
  },
  {
    path: 'guias/urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde alojarse para visitar Urdaibai | Guía local',
    data: {
      guide: 'urdaibai',
      description:
        'Descubre dónde alojarte para visitar Urdaibai: naturaleza, playas, pueblos marineros y gastronomía desde Bermeo.',
    },
  },
  { path: '**', redirectTo: '' },
];
