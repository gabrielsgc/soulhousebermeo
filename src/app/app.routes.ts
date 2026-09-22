import { Routes } from '@angular/router';

const baseUrl = 'https://www.soulhousebermeo.com';
const logoUrl = `${baseUrl}/imgs/logo-soulhousebermeo-VT.webp`;
const coverImageUrl = `${baseUrl}/assets/images/hero-facade.png`;

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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuáles son las horas de check-in y check-out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El check-in es a partir de las 16:00 h y el check-out hasta las 11:00 h.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se permiten mascotas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las mascotas pequeñas son bienvenidas bajo petición previa. Es necesario indicarlo en el formulario de contacto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo llegar en transporte público?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La estación de EuskoTren de Bermeo está a 100 metros del alojamiento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye el precio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La estancia incluye ropa de cama, toallas, WiFi de fibra, agua caliente y calefacción. El parking se consulta aparte.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la política de cancelación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cancelación es gratuita hasta siete días antes de la llegada. Para fechas especiales conviene consultar las condiciones.',
      },
    },
  ],
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Soul House Bermeo | Alojamiento turístico en Bermeo para 6 personas',
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
    title: 'La casa: apartamento para 6 personas en Bermeo',
    data: {
      description:
        'Conoce Soul House Bermeo: apartamento turístico con 3 habitaciones, capacidad para 6 personas y espacios preparados para familias y grupos junto al puerto.',
      jsonLd: lodgingBusinessJsonLd,
    },
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./pages/galeria/galeria.component').then((m) => m.GaleriaComponent),
    title: 'Fotos del apartamento turístico Soul House Bermeo',
    data: {
      description:
        'Consulta las fotos de Soul House Bermeo: habitaciones, salón, cocina, baño, fachada y lugares cercanos del puerto y la costa vasca.',
    },
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/servicios.component').then((m) => m.ServiciosComponent),
    title: 'Servicios del apartamento turístico en Bermeo',
    data: {
      description:
        'Descubre los servicios de Soul House Bermeo: WiFi, cocina equipada, lavadora, ropa de cama, calefacción y comodidades para seis personas.',
    },
  },
  {
    path: 'ubicacion',
    loadComponent: () =>
      import('./pages/ubicacion/ubicacion.component').then((m) => m.UbicacionComponent),
    title: 'Dónde alojarse para visitar Gaztelugatxe y Urdaibai',
    data: {
      description:
        'Soul House está junto al puerto de Bermeo, a poca distancia de la estación, restaurantes y servicios, y es una base práctica para Urdaibai y Gaztelugatxe.',
    },
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then((m) => m.FaqPageComponent),
    title: 'Preguntas frecuentes sobre Soul House Bermeo',
    data: {
      description:
        'Resuelve tus dudas sobre reservas, check-in, check-out, cancelación, mascotas, parking, servicios y estancia en Soul House Bermeo.',
      jsonLd: faqJsonLd,
    },
  },
  {
    path: 'reservar',
    loadComponent: () =>
      import('./pages/reservar/reservar.component').then((m) => m.ReservarComponent),
    title: 'Reservar alojamiento en Bermeo | Soul House',
    data: {
      description:
        'Consulta disponibilidad y reserva directamente tu estancia en Soul House Bermeo, alojamiento para 6 personas junto al puerto y cerca de Urdaibai.',
      jsonLd: reservarJsonLd,
    },
  },
  { path: 'guia', redirectTo: 'guia/que-ver-en-bermeo', pathMatch: 'full' },
  {
    path: 'guia/que-ver-en-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Qué ver en Bermeo: 10 lugares y consejos locales',
    data: {
      guide: 'que-ver-en-bermeo',
      description:
        'Descubre qué ver y hacer en Bermeo: puerto viejo, casco histórico, museo, playas, gastronomía y excursiones a Urdaibai y Gaztelugatxe.',
    },
  },
  {
    path: 'guia/bermeo-en-dos-dias',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Bermeo en 2 días: itinerario por puerto y costa',
    data: {
      guide: 'bermeo-en-dos-dias',
      description:
        'Planifica una escapada de dos días en Bermeo con un itinerario por el puerto, casco histórico, gastronomía, costa y San Juan de Gaztelugatxe.',
    },
  },
  {
    path: 'guia/donde-alojarse-en-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde alojarse en Bermeo: zonas y apartamento para 6',
    data: {
      guide: 'donde-alojarse-en-bermeo',
      description:
        'Descubre dónde alojarse en Bermeo según tu viaje y por qué Soul House es una opción práctica para familias y grupos de hasta 6 personas.',
    },
  },
  {
    path: 'guia/playas-cerca-de-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Playas cerca de Bermeo: Laga, Laida y Aritzatxu',
    data: {
      guide: 'playas-cerca-de-bermeo',
      description:
        'Conoce las mejores playas cerca de Bermeo: Aritzatxu, Laga y Laida, con distancias, acceso, servicios y consejos para organizar la visita.',
    },
  },
  {
    path: 'guia/visitar-gaztelugatxe-desde-bermeo',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Visitar Gaztelugatxe desde Bermeo: guía práctica',
    data: {
      guide: 'visitar-gaztelugatxe-desde-bermeo',
      description:
        'Guía práctica para visitar San Juan de Gaztelugatxe desde Bermeo: acceso, reserva, transporte, aparcamiento y consejos para planificar la excursión.',
    },
  },
  {
    path: 'guia/donde-dormir-cerca-de-gaztelugatxe',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde dormir cerca de Gaztelugatxe: Bermeo como base',
    data: {
      guide: 'donde-dormir-cerca-de-gaztelugatxe',
      description:
        'Compara dónde dormir cerca de Gaztelugatxe y descubre por qué Bermeo ofrece servicios, restaurantes y una base cómoda para la excursión.',
    },
  },
  {
    path: 'guia/gaztelugatxe-y-bermeo-en-un-fin-de-semana',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Gaztelugatxe y Bermeo en un fin de semana',
    data: {
      guide: 'gaztelugatxe-y-bermeo-en-un-fin-de-semana',
      description:
        'Organiza un fin de semana combinando Bermeo y Gaztelugatxe con una ruta por el puerto, el casco histórico, la costa y la gastronomía vasca.',
    },
  },
  {
    path: 'guia/que-ver-en-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Qué ver en Urdaibai: pueblos, playas y naturaleza',
    data: {
      guide: 'que-ver-en-urdaibai',
      description:
        'Descubre qué ver en Urdaibai: Mundaka, Gernika, Laga, Laida, Bermeo, miradores y pueblos de la Reserva de la Biosfera.',
    },
  },
  {
    path: 'guia/ruta-por-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Ruta por Urdaibai desde Bermeo: itinerario completo',
    data: {
      guide: 'ruta-por-urdaibai',
      description:
        'Organiza una ruta por Urdaibai desde Bermeo con paradas en Mundaka, Laga, Laida, Gernika y los paisajes de la Reserva de la Biosfera.',
    },
  },
  {
    path: 'guia/donde-alojarse-en-urdaibai',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Dónde alojarse en Urdaibai: Bermeo como base',
    data: {
      guide: 'donde-alojarse-en-urdaibai',
      description:
        'Descubre dónde alojarte para visitar Urdaibai y por qué Bermeo es una base práctica para combinar playas, pueblos, naturaleza y gastronomía.',
    },
  },
  {
    path: 'guia/urdaibai-con-ninos',
    loadComponent: () => import('./pages/guias/guias.component').then((m) => m.GuiasComponent),
    title: 'Urdaibai con niños: playas y planes en familia',
    data: {
      guide: 'urdaibai-con-ninos',
      description:
        'Ideas para visitar Urdaibai con niños: playas, paseos sencillos, pueblos marineros, naturaleza y excursiones familiares desde Bermeo.',
    },
  },
  { path: 'guias/bermeo', redirectTo: 'guia/que-ver-en-bermeo', pathMatch: 'full' },
  { path: 'guias/gaztelugatxe', redirectTo: 'guia/visitar-gaztelugatxe-desde-bermeo', pathMatch: 'full' },
  { path: 'guias/urdaibai', redirectTo: 'guia/que-ver-en-urdaibai', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
