import { Routes } from '@angular/router';

const baseUrl = 'https://www.soulhousebermeo.com';

const lodgingBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Soul House Bermeo',
  description:
    'Vivienda turística con 3 habitaciones y 6 plazas en el Puerto de Bermeo, País Vasco',
  url: baseUrl,
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
    title: 'Soul House Bermeo | Vivienda turística en el Puerto de Bermeo',
    data: {
      description:
        'Vivienda turística en Bermeo, Bizkaia. 3 habitaciones, 6 plazas y reserva directa sin comisiones en Soul House Bermeo.',
      jsonLd: lodgingBusinessJsonLd,
    },
  },
  {
    path: 'la-casa',
    loadComponent: () =>
      import('./pages/la-casa/la-casa.component').then((m) => m.LaCasaComponent),
    title: 'Casa completa en Bermeo con vistas al Cantábrico | Soul House',
    data: {
      description:
        'Descubre la casa completa de Soul House Bermeo: 3 habitaciones, 6 plazas y vistas al Cantábrico para una escapada única en Bizkaia.',
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
    title: 'Dónde estamos | Bermeo, cerca de Gaztelugatxe y Mundaka',
    data: {
      description:
        'Ubicación de Soul House Bermeo en Bizkaia, cerca de Gaztelugatxe, Mundaka y Bilbao, con mapa y distancias clave.',
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
  { path: '**', redirectTo: '' },
];
