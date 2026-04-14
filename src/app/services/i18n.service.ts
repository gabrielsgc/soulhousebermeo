import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'es' | 'eu' | 'en' | 'fr';

export interface Translations {
  lang: Lang;
  nav: {
    home: string; gallery: string; services: string;
    location: string; faq: string; book: string;
    brand: string; ariaNav: string; ariaBrand: string;
    ariaOpen: string; ariaClose: string;
  };
  hero: {
    eyebrow: string; tagline: string; cta1: string; cta2: string;
    sideTag: string;
    features: { icon: string; label: string }[];
  };
  highlights: {
    tag: string; heading: string; intro: string;
    items: { icon: string; title: string; desc: string }[];
  };
  rooms: {
    tag: string; heading: string; intro: string;
    items: { emoji: string; title: string; desc: string; features: string[] }[];
  };
  amenities: {
    tag: string; heading: string; intro: string;
    items: { icon: string; label: string }[];
  };
  gallery: {
    tag: string; heading: string; intro: string;
    close: string; prev: string; next: string; viewPhoto: string;
    items: { emoji: string; label: string; caption: string }[];
  };
  location: {
    tag: string; heading: string; intro: string;
    nearbyHeading: string; mapLabel: string; poisAriaLabel: string;
    pois: { icon: string; name: string; dist: string }[];
  };
  faq: {
    tag: string; heading: string; intro: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string; heading: string; intro: string;
    emailLabel: string; phoneLabel: string; addressLabel: string;
    addressValue: string; hoursLabel: string; hoursValue: string;
    followUs: string; formLegend: string;
    labelName: string; labelEmail: string; labelPhone: string;
    labelGuests: string; labelCheckin: string; labelCheckout: string;
    labelMessage: string; labelPrivacy: string;
    privacyText: string; submitBtn: string; submitting: string;
    successTitle: string; successText: string; sendAnother: string;
    errorMsg: string;
    guestOptions: string[]; guestPlaceholder: string;
    msgPlaceholder: string; charCount: string; formAriaLabel: string;
    errors: {
      required: string; requiredTrue: string; email: string;
      minLength: string; maxLength: string; pattern: string;
      pastDate: string; checkoutBeforeCheckin: string;
      noScript: string; invalid: string;
    };
  };
  footer: {
    tagline: string; desc: string; exploreHeading: string;
    contactHeading: string; legalHeading: string; bookNow: string;
    navLinks: { href: string; label: string }[];
    legal: string[];
  };
}

// ── Español ──────────────────────────────────────────────────────
const es: Translations = {
  lang: 'es',
  nav: {
    home: 'La Casa', gallery: 'Galería', services: 'Servicios',
    location: 'Ubicación', faq: 'FAQ', book: 'Reservar',
    brand: 'Bermeo · País Vasco',
    ariaNav: 'Navegación principal',
    ariaBrand: 'Soul House Bermeo — Inicio',
    ariaOpen: 'Abrir menú de navegación',
    ariaClose: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'Vivienda turística — Puerto de Bermeo',
    tagline: 'Una casa con alma en Bermeo, el puerto pesquero más pintoresco del País Vasco. Tres habitaciones, seis plazas, vistas a la ría del Cantábrico.',
    cta1: 'Consultar disponibilidad',
    cta2: 'Ver la casa',
    sideTag: 'Reserva directa · sin comisiones · uso exclusivo',
    features: [
      { icon: 'house', label: '3 habitaciones' }, { icon: 'users', label: '6 plazas' },
      { icon: 'wave', label: 'Vistas a la ría' }, { icon: 'wifi', label: 'WiFi fibra' },
      { icon: 'car', label: 'Parking gratuito' }, { icon: 'check-circle', label: 'Reserva directa' },
    ],
  },
  highlights: {
    tag: 'Por qué Bermeo',
    heading: 'Experiencias únicas a tu puerta',
    intro: 'Bermeo es mucho más que un destino turístico — es el latido del País Vasco marinero.',
    items: [
      { icon: 'anchor', title: 'Puerto Pesquero', desc: 'El puerto más pintoresco del Cantábrico. Txipirones frescos, traineras en el agua y una atmósfera auténtica imposible de encontrar en las grandes ciudades.' },
      { icon: 'feather', title: 'Reserva de la Biosfera — Urdaibai', desc: 'Declarada por la UNESCO. Marismas, robledales y aves migratorias que convierten cada paseo en una experiencia de naturaleza sin igual.' },
      { icon: 'utensils', title: 'Gastronomía Vasca', desc: 'Bacalao al pil-pil, txangurro, almejas a la marinera… A 200 m de Soul House encontrarás los mejores pintxos de la costa vasca.' },
      { icon: 'sun-beach', title: 'Playas y Surf', desc: 'Laga, Laida, Mundaka — hogar de la mejor ola de Europa para el surf. En 15 minutos en coche accedes a paraísos naturales protegidos.' },
    ],
  },
  rooms: {
    tag: 'Alojamiento', heading: '3 habitaciones · 6 plazas',
    intro: 'Cada estancia ha sido pensada para que te sientas como en casa, con el mar siempre cerca.',
    items: [
      { emoji: 'bed', title: 'Habitación Principal', desc: 'Amplia habitación con cama de matrimonio, armario empotrado y vistas a la ría de Bermeo al despertar.', features: ['Cama doble 150×200', 'Vistas al mar', 'Armario empotrado', 'Luz natural'] },
      { emoji: 'anchor', title: 'Habitación Marinera', desc: 'Decorada con elementos náuticos auténticos. Dos camas individuales, perfecta para niños o amigos viajeros.', features: ['2 camas individuales', 'Decoración marinera', 'Armario doble', 'Escritorio'] },
      { emoji: 'leaf', title: 'Habitación Urdaibai', desc: 'La más tranquila de la casa. Tonos verdes que evocan la biosfera, ideales para desconectar en pareja.', features: ['Cama doble 135×190', 'Ambiente natural', 'Estantes y mesillas', 'Ropa de cama incluida'] },
      { emoji: 'cooking', title: 'Salón-Cocina', desc: 'Cocina completamente equipada y salón con sofá cama adicional para 2 personas. El corazón de la casa.', features: ['Cocina equipada', 'Sofá cama 2 plazas', 'Smart TV', 'WiFi fibra óptica'] },
    ],
  },
  amenities: {
    tag: 'Servicios', heading: 'Todo lo que necesitas',
    intro: 'Soul House está equipada para que tu estancia sea perfecta desde el primer momento.',
    items: [
      { icon: 'wifi', label: 'WiFi fibra óptica' }, { icon: 'tv', label: 'Smart TV' },
      { icon: 'cooking', label: 'Cocina completa' }, { icon: 'laundry', label: 'Lavadora' },
      { icon: 'snowflake', label: 'Nevera y congelador' }, { icon: 'coffee', label: 'Cafetera y tostadora' },
      { icon: 'shower', label: 'Ducha de lluvia' }, { icon: 'linen', label: 'Ropa de cama incluida' },
      { icon: '🧸', label: 'Toallas incluidas' }, { icon: 'house', label: 'Calefacción' },
      { icon: 'key', label: 'Check-in autónomo' }, { icon: 'car', label: 'Parking' },
      { icon: 'wheelchair', label: 'Primera planta' }, { icon: 'paw', label: 'Mascotas (consultar)' },
      { icon: 'broom', label: 'Servicio de limpieza' }, { icon: 'parcel', label: 'Almacenaje de equipaje' },
    ],
  },
  gallery: {
    tag: 'Galería', heading: 'Descubre Soul House',
    intro: 'Cada rincón cuenta una historia del mar y la tradición vasca.',
    close: 'Cerrar galería', prev: 'Foto anterior', next: 'Foto siguiente', viewPhoto: 'Ver foto: ',
    items: [
      { emoji: 'sunrise', label: 'Vistas a la Ría', caption: 'Amanecer sobre la ría de Bermeo desde Soul House.' },
      { emoji: 'sofa', label: 'Salón Principal', caption: 'Salón acogedor con sofá cama y Smart TV.' },
      { emoji: 'cooking', label: 'Cocina Equipada', caption: 'Cocina completa con todos los electrodomésticos.' },
      { emoji: 'bed', label: 'Habitación Principal', caption: 'Dormitorio principal con cama doble y vistas al mar.' },
      { emoji: 'anchor', label: 'Habitación Marinera', caption: 'Dos camas individuales con decoración náutica.' },
      { emoji: 'leaf', label: 'Habitación Urdaibai', caption: 'Tranquilidad y naturaleza en la hab. Urdaibai.' },
      { emoji: 'shower', label: 'Baño', caption: 'Baño moderno con ducha de lluvia.' },
      { emoji: 'building', label: 'Exterior', caption: 'Fachada de Soul House en el casco histórico de Bermeo.' },
    ],
  },
  location: {
    tag: 'Ubicación', heading: 'En el corazón de Bermeo',
    intro: 'Bermeo (Bizkaia, 48370) — a 35 min de Bilbao por la BI-635, frente al mar Cantábrico.',
    nearbyHeading: '¿Qué hay cerca?', mapLabel: 'Mapa de ubicación de Soul House en Bermeo',
    poisAriaLabel: 'Puntos de interés cercanos',
    pois: [
      { icon: 'anchor', name: 'Puerto Pesquero de Bermeo', dist: '200 m a pie' },
      { icon: 'sun-beach', name: 'Playa Laga (Urdaibai)', dist: '12 km — 15 min' },
      { icon: 'wave', name: 'Mundaka (surf, Reserva MAB)', dist: '6 km — 8 min' },
      { icon: 'feather', name: 'Reserva Biosfera Urdaibai', dist: '10 km — 12 min' },
      { icon: 'city', name: 'Bilbao (Guggenheim)', dist: '35 km — 35 min' },
      { icon: 'train', name: 'Estación EuskoTren Bermeo', dist: '400 m a pie' },
      { icon: 'cart', name: 'Supermercado Eroski', dist: '300 m a pie' },
      { icon: 'utensils', name: 'Restaurante Txoko Mari', dist: '150 m a pie' },
    ],
  },
  faq: {
    tag: 'FAQ', heading: 'Preguntas frecuentes',
    intro: '¿Tienes dudas? Aquí respondemos a las más comunes.',
    items: [
      { question: '¿Cuáles son las horas de check-in y check-out?', answer: 'El check-in es a partir de las 16:00 h y el check-out hasta las 11:00 h. Para entradas o salidas fuera de este horario, consúltanos con antelación.' },
      { question: '¿Se permiten mascotas?', answer: 'Las mascotas pequeñas son bienvenidas bajo petición previa. Por favor indícalo en el formulario de contacto para que podamos confirmártelo.' },
      { question: '¿Puedo llegar en transporte público?', answer: 'Sí. La estación de EuskoTren de Bermeo está a 100 m. Desde Bilbao (Atxuri) hay trenes directos cada hora. También hay líneas de autobús Bizkaibus.' },
      { question: '¿Qué incluye el precio?', answer: 'Ropa de cama, toallas, WiFi de fibra, parking, agua caliente y calefacción. No cobramos gastos de gestión ni comisiones de plataformas.' },
      { question: '¿Cuál es la política de cancelación?', answer: 'Cancelación gratuita hasta 7 días antes de la llegada. Cancelaciones posteriores: 50% del importe total. Consúltanos en fechas especiales.' },
      { question: '¿Hay mínimo de noches?', answer: 'En temporada alta (julio-agosto) el mínimo es de 3 noches. El resto del año aceptamos reservas de 1 noche. Consúltanos para estancias largas con descuento.' },
    ],
  },
  contact: {
    eyebrow: 'Contacto', heading: 'Reserva tu estancia',
    intro: '¿Quieres pasar unos días en el País Vasco? Contáctanos directamente y te responderemos en menos de 2 horas. Sin comisiones, sin intermediarios.',
    emailLabel: 'Email', phoneLabel: 'Teléfono / WhatsApp',
    addressLabel: 'Dirección', addressValue: 'Bermeo, Bizkaia, 48370 · País Vasco',
    hoursLabel: 'Atención', hoursValue: 'Lunes – Domingo, 09:00 – 21:00',
    followUs: 'Síguenos',
    formLegend: 'Solicitar disponibilidad',
    labelName: 'Nombre completo', labelEmail: 'Correo electrónico',
    labelPhone: 'Teléfono (opcional)', labelGuests: 'Número de personas',
    labelCheckin: 'Fecha de llegada', labelCheckout: 'Fecha de salida',
    labelMessage: 'Mensaje (opcional)', labelPrivacy: 'He leído y acepto la política de privacidad',
    privacyText: 'Tus datos solo se usarán para responder tu consulta.',
    submitBtn: 'Enviar solicitud', submitting: 'Enviando…',
    successTitle: '¡Solicitud recibida!',
    successText: 'Te responderemos en menos de 2 horas a tu email. ¡Hasta pronto en Bermeo!',
    sendAnother: 'Enviar otra consulta',
    errorMsg: 'Hubo un error al enviar. Por favor escríbenos directamente a gabrielsgc@gmail.com',
    guestOptions: ['1 persona', '2 personas', '3 personas', '4 personas', '5 personas', '6 personas (máximo)'],
    guestPlaceholder: '¿Cuántos sois?',
    msgPlaceholder: '¿Petición especial? ¿Celebráis algo? ¿Necesitáis cuna para bebé?',
    charCount: '{n} / 800 caracteres',
    formAriaLabel: 'Formulario de reserva de Soul House Bermeo',
    errors: {
      required: 'Este campo es obligatorio.',
      requiredTrue: 'Debes aceptar la política de privacidad.',
      email: 'Introduce un email válido (ej. nombre@correo.com).',
      minLength: 'Mínimo {n} caracteres.',
      maxLength: 'Máximo {n} caracteres.',
      pattern: 'Formato no válido (ej. +34 600 000 000).',
      pastDate: 'La fecha no puede ser en el pasado.',
      checkoutBeforeCheckin: 'La salida debe ser posterior a la llegada.',
      noScript: 'El campo contiene contenido no permitido.',
      invalid: 'Campo no válido.',
    },
  },
  footer: {
    tagline: 'Bermeo · Bizkaia · País Vasco',
    desc: 'Vivienda Turística de uso exclusivo en el corazón del Puerto de Bermeo. 3 habitaciones · 6 plazas. Reserva directa sin comisiones.',
    exploreHeading: 'Explorar', contactHeading: 'Contacto', legalHeading: 'Información legal',
    bookNow: 'Solicitar reserva',
    navLinks: [
      { href: '#inicio', label: 'Inicio' }, { href: '#habitaciones', label: 'Habitaciones' },
      { href: '#galeria', label: 'Galería' }, { href: '#comodidades', label: 'Comodidades' },
      { href: '#ubicacion', label: 'Ubicación' }, { href: '#preguntas', label: 'FAQ' },
      { href: '#contacto', label: 'Contacto' },
    ],
    legal: ['VT nº EBI02583 (Gobierno Vasco)', 'Check-in: 16:00 · Check-out: 11:00', 'Capacidad máxima: 6 personas'],
  },
};

// ── Euskera ──────────────────────────────────────────────────────
const eu: Translations = {
  lang: 'eu',
  nav: {
    home: 'Etxea', gallery: 'Galeria', services: 'Zerbitzuak',
    location: 'Kokapena', faq: 'FAQ', book: 'Erreserbatu',
    brand: 'Bermeo · Euskadi',
    ariaNav: 'Nabigazio nagusia',
    ariaBrand: 'Soul House Bermeo — Hasiera',
    ariaOpen: 'Nabigazio menua ireki',
    ariaClose: 'Menua itxi',
  },
  hero: {
    eyebrow: 'Turismo-etxebizitza — Bermeoko portua',
    tagline: 'Arima duen etxea Bermeon, Euskal Herriko arrantzu-portu ederrenean. Hiru logela, sei leku, Kantauriko itsasadarraren ikuspegiarekin.',
    cta1: 'Erabilgarritasuna kontsultatu',
    cta2: 'Etxea ikusi',
    sideTag: 'Erreserba zuzena · komisiorik gabe · erabilera esklusiboak',
    features: [
      { icon: 'house', label: '3 logela' }, { icon: 'users', label: '6 leku' },
      { icon: 'wave', label: 'Itsasadarraren ikuspegia' }, { icon: 'wifi', label: 'WiFi zuntz' },
      { icon: 'car', label: 'Doako aparkamendua' }, { icon: 'check-circle', label: 'Erreserba zuzena' },
    ],
  },
  highlights: {
    tag: 'Zergatik Bermeo',
    heading: 'Zure atarian esperientzia bereziak',
    intro: 'Bermeo turismo-helmuga baino gehiago da — Itsas Euskal Herriko bihotza da.',
    items: [
      { icon: 'anchor', title: 'Arrantzu-portua', desc: 'Kantauriko portu pintorekoena. Txipiroe freskoak, trainak uretan eta hiri handietan aurkitu ezin den giro jatorra.' },
      { icon: 'feather', title: 'Biosferaren Erreserba — Urdaibai', desc: 'UNESCOk izendatua. Padura, haritzadi eta hegazti migratzaileak, ibilaldi bakoitza natura-esperientzia paregabea bilakatzen dutenak.' },
      { icon: 'utensils', title: 'Euskal Gastronomia', desc: 'Bacalao al pil-pil, txangurro, almejak marinera erara… Soul House-tik 200 metrora euskal kostaldeko pintxo onenak aurkituko dituzu.' },
      { icon: 'sun-beach', title: 'Hondartzak eta Surfa', desc: 'Laga, Laida, Mundaka — Europako surf-uhinik onena. Autoz 15 minutura babes-natur-paradisu iritsiko zara.' },
    ],
  },
  rooms: {
    tag: 'Ostatua', heading: '3 logela · 6 leku',
    intro: 'Egonaldi bakoitza etxean bezala sentitzeko pentsatua dago, itsasoa beti gertu.',
    items: [
      { emoji: 'bed', title: 'Logela Nagusia', desc: 'Matrimonio-ohea, armairua eta esnatzean Bermeoko itsasadarraren ikuspegiarekin logela zabala.', features: ['Bikoitza 150×200', 'Itsasoaren ikuspegia', 'Armairua', 'Argi naturala'] },
      { emoji: 'anchor', title: 'Itsasoko Logela', desc: 'Itsas elementu autentikoekin apaindurik. Bi oheak banaka, umeentzat edo lagunei egokia.', features: ['2 ohe banaka', 'Itsas apaindurak', 'Armairua', 'Mahai-idazketa'] },
      { emoji: 'leaf', title: 'Urdaibai Logela', desc: 'Etxeko logela lasaiena. Tonu berdeek biosfera ebakatzen dute, bikoteentzat deskonektatzeko bikaina.', features: ['Bikoitza 135×190', 'Ingurune naturala', 'Apalak eta gaumahaiak', 'Oheko arropa barne'] },
      { emoji: 'cooking', title: 'Egongela-Sukaldea', desc: 'Guztiz hornitutako sukaldea eta bi pertsonarentzako sofa-ohea duen egongela. Etxearen bihotza.', features: ['Sukalde osoa', 'Sofa-ohea 2 lekukoa', 'Smart TB', 'WiFi zuntz optikoa'] },
    ],
  },
  amenities: {
    tag: 'Zerbitzuak', heading: 'Behar duzun guztia',
    intro: 'Soul House lehen momentutik zure egonaldia bikaina izateko prestatuta dago.',
    items: [
      { icon: 'wifi', label: 'WiFi zuntz optikoa' }, { icon: 'tv', label: 'Smart TB' },
      { icon: 'cooking', label: 'Sukalde osoa' }, { icon: 'laundry', label: 'Garbigailua' },
      { icon: 'snowflake', label: 'Hozkailua eta izozgailua' }, { icon: 'coffee', label: 'Kafemakina eta tostadore' },
      { icon: 'shower', label: 'Euri-dutxa' }, { icon: 'linen', label: 'Oheko arropa barne' },
      { icon: '🧸', label: 'Eskuoihalak barne' }, { icon: 'house', label: 'Berokuntzea' },
      { icon: 'key', label: 'Check-in autonomoa' }, { icon: 'car', label: 'Aparkamendua' },
      { icon: 'wheelchair', label: 'Lehen solairua' }, { icon: 'paw', label: 'Animaliak (kontsultatu)' },
      { icon: 'broom', label: 'Garbiketa-zerbitzua' }, { icon: 'parcel', label: 'Maleta-biltegiratzea' },
    ],
  },
  gallery: {
    tag: 'Galeria', heading: 'Soul House ezagutu',
    intro: 'Txoko bakoitzak itsasoaren eta euskal tradizioaren istorioa kontatzen du.',
    close: 'Galeria itxi', prev: 'Aurreko argazkia', next: 'Hurrengo argazkia', viewPhoto: 'Argazkia ikusi: ',
    items: [
      { emoji: 'sunrise', label: 'Itsasadarraren ikuspegia', caption: 'Bermeoko itsasadarraren goiztiria Soul House-tik.' },
      { emoji: 'sofa', label: 'Egongela Nagusia', caption: 'Sofa-ohea eta Smart TBa duen egongela atsegingarria.' },
      { emoji: 'cooking', label: 'Sukalde Tresneria', caption: 'Sukalde osoa tresna guztiekin.' },
      { emoji: 'bed', label: 'Logela Nagusia', caption: 'Ohe bikoitza eta itsasoaren ikuspegiarekin logela nagusia.' },
      { emoji: 'anchor', label: 'Itsasoko Logela', caption: 'Bi ohe banaka itsas apaindurak dituena.' },
      { emoji: 'leaf', label: 'Urdaibai Logela', caption: 'Urdaibai logelan lasaitasuna eta natura.' },
      { emoji: 'shower', label: 'Bainugela', caption: 'Euri-dutxa duen bainugela modernoa.' },
      { emoji: 'building', label: 'Kanpoaldea', caption: 'Soul House-ren fatxada Bermeoko koru historikoan.' },
    ],
  },
  location: {
    tag: 'Kokapena', heading: 'Bermeoren bihotzean',
    intro: 'Bermeo (Bizkaia, 48370) — Bilbotik 35 min BI-635 errepidez, Kantauri itsasoaren aurrean.',
    nearbyHeading: 'Zer dago inguruan?', mapLabel: 'Soul House Bermeoko kokapenaren mapa',
    poisAriaLabel: 'Inguruko interes-guneak',
    pois: [
      { icon: 'anchor', name: 'Bermeoko Arrantzu-portua', dist: '200 m oinez' },
      { icon: 'sun-beach', name: 'Laga Hondartza (Urdaibai)', dist: '12 km — 15 min' },
      { icon: 'wave', name: 'Mundaka (surfa, MAB Erreserba)', dist: '6 km — 8 min' },
      { icon: 'feather', name: 'Urdaibai Biosferaren Erreserba', dist: '10 km — 12 min' },
      { icon: 'city', name: 'Bilbo (Guggenheim)', dist: '35 km — 35 min' },
      { icon: 'train', name: 'EuskoTren Bermeo geltokia', dist: '400 m oinez' },
      { icon: 'cart', name: 'Eroski supermerkatua', dist: '300 m oinez' },
      { icon: 'utensils', name: 'Txoko Mari jatetxea', dist: '150 m oinez' },
    ],
  },
  faq: {
    tag: 'FAQ', heading: 'Galdera ohikoak',
    intro: 'Zalantzak al dituzu? Hemen erantzuten ditugu ohikoenak.',
    items: [
      { question: 'Zeintzuk dira check-in eta check-out orduak?', answer: 'Check-ina 16:00etatik aurrera da eta check-outa 11:00etara arte. Ordutegi honetatik kanpoko sarrerak edo irteerak, kontsultatu aldez aurretik.' },
      { question: 'Onartzen al dira animaliak?', answer: 'Animal txikiak ongi etorriak dira aldez aurretiko eskaerarekin. Mesedez adierazi kontaktu formularioan berretsi dezagun.' },
      { question: 'Garraio publikoz iritsi al naiteke?', answer: 'Bai. Bermeoko EuskoTren geltokia 100 metrora dago. Bilbotik (Atxuri) ororo trenbide zuzenak. Bizkaibuseko lineak ere badaude.' },
      { question: 'Zer sartzen da prezioaren barruan?', answer: 'Oheko arropa, eskuoihalak, WiFi zuntz, aparkamendua, ur beroa eta berokuntzea. Ez dugu kudeaketa-gasturik edo plataforma-komisinorik kobratzen.' },
      { question: 'Zein da bertemate-politika?', answer: 'Etorrera baino 7 egun lehenago doan bertemate. Geroagoko bertematea: kopuru osoaren %50. Kontsultatu data berezietan.' },
      { question: 'Gauaren gutxieneko bermerik al dago?', answer: 'Goi-denboraldian (uztaila-abuztua) gutxieneko 3 gau. Urteko gainerakoan 1 gaueko erreserbak onartzen ditugu. Kontsultatu iraupen luzeagorako deskontuak.' },
    ],
  },
  contact: {
    eyebrow: 'Kontaktua', heading: 'Erreserbatu zure egonaldia',
    intro: 'Euskal Herrian egun batzuk igaro nahi al dituzu? Jarri harremanetan zuzenean eta bi ordu baino lehen erantzungo dizugu. Komisiorik gabe, bitartekorik gabe.',
    emailLabel: 'Helbide elektronikoa', phoneLabel: 'Telefonoa / WhatsApp',
    addressLabel: 'Helbidea', addressValue: 'Bermeo, Bizkaia, 48370 · Euskadi',
    hoursLabel: 'Arreta', hoursValue: 'Astelehena – Igandea, 09:00 – 21:00',
    followUs: 'Jarraitu iezaguzu',
    formLegend: 'Erabilgarritasuna eskatu',
    labelName: 'Izen-abizenak', labelEmail: 'Helbide elektronikoa',
    labelPhone: 'Telefonoa (aukerakoa)', labelGuests: 'Pertsona kopurua',
    labelCheckin: 'Iritze data', labelCheckout: 'Irteera data',
    labelMessage: 'Mezua (aukerakoa)', labelPrivacy: 'Pribatutasun politika irakurri eta onartu dut',
    privacyText: 'Zure datuak zure kontsulta erantzuteko soilik erabiliko dira.',
    submitBtn: 'Eskaera bidali', submitting: 'Bidaltzen…',
    successTitle: 'Eskaera jasota!',
    successText: 'Bi ordu baino lehen erantzungo dizugu zure helbidean. Laster arte Bermeon!',
    sendAnother: 'Beste kontsulta bat bidali',
    errorMsg: 'Errorea gertatu da bidaltzean. Mesedez idatzi zuzenean gabrielsgc@gmail.com helbidera',
    guestOptions: ['1 pertsona', '2 pertsona', '3 pertsona', '4 pertsona', '5 pertsona', '6 pertsona (gehienezko)'],
    guestPlaceholder: 'Zenbat zarete?',
    msgPlaceholder: 'Eskaera berezirik? Zerbait ospatzen al duzue? Haur-ohe behar al duzue?',
    charCount: '{n} / 800 karaktere',
    formAriaLabel: 'Soul House Bermeoko erreserba formularioa',
    errors: {
      required: 'Eremu hau beharrezkoa da.',
      requiredTrue: 'Pribatutasun politika onartu behar duzu.',
      email: 'Sartu baliozko helbide elektronikoa (adib. izena@posta.com).',
      minLength: 'Gutxienez {n} karaktere.',
      maxLength: 'Gehienez {n} karaktere.',
      pattern: 'Formatu baliogabea (adib. +34 600 000 000).',
      pastDate: 'Data ezin da iraganean egon.',
      checkoutBeforeCheckin: 'Irteera data iritze data baino beranduagoa izan behar da.',
      noScript: 'Eremuak ez-onartutako edukia dauka.',
      invalid: 'Eremu baliogabea.',
    },
  },
  footer: {
    tagline: 'Bermeo · Bizkaia · Euskadi',
    desc: 'Erabilera esklusiboko Turismo Etxebizitza Bermeoko Portuaren bihotzean. 3 logela · 6 leku. Erreserba zuzena, komisiorik gabe.',
    exploreHeading: 'Arakatu', contactHeading: 'Kontaktua', legalHeading: 'Informazio legala',
    bookNow: 'Erreserba eskatu',
    navLinks: [
      { href: '#inicio', label: 'Hasiera' }, { href: '#habitaciones', label: 'Logelak' },
      { href: '#galeria', label: 'Galeria' }, { href: '#comodidades', label: 'Erosotasunak' },
      { href: '#ubicacion', label: 'Kokapena' }, { href: '#preguntas', label: 'FAQ' },
      { href: '#contacto', label: 'Kontaktua' },
    ],
    legal: ['ET zk. XXXXXX (Eusko Jaurlaritza)', 'Check-in: 16:00 · Check-out: 11:00', 'Gehienezko edukiera: 6 pertsona'],
  },
};

// ── English ──────────────────────────────────────────────────────
const en: Translations = {
  lang: 'en',
  nav: {
    home: 'The House', gallery: 'Gallery', services: 'Amenities',
    location: 'Location', faq: 'FAQ', book: 'Book Now',
    brand: 'Bermeo · Basque Country',
    ariaNav: 'Main navigation',
    ariaBrand: 'Soul House Bermeo — Home',
    ariaOpen: 'Open navigation menu',
    ariaClose: 'Close menu',
  },
  hero: {
    eyebrow: 'Holiday home — Port of Bermeo',
    tagline: 'A soulful house in Bermeo, the most picturesque fishing port in the Basque Country. Three bedrooms, six guests, views over the Cantabrian estuary.',
    cta1: 'Check availability',
    cta2: 'See the house',
    sideTag: 'Direct booking · no commission · exclusive use',
    features: [
      { icon: 'house', label: '3 bedrooms' }, { icon: 'users', label: '6 guests' },
      { icon: 'wave', label: 'Estuary views' }, { icon: 'wifi', label: 'Fibre WiFi' },
      { icon: 'car', label: 'Free parking' }, { icon: 'check-circle', label: 'Direct booking' },
    ],
  },
  highlights: {
    tag: 'Why Bermeo',
    heading: 'Unique experiences at your door',
    intro: 'Bermeo is more than a tourist destination — it is the heartbeat of maritime Basque Country.',
    items: [
      { icon: 'anchor', title: 'Fishing Port', desc: 'The most picturesque port on the Bay of Biscay. Fresh squid, traditional rowing boats and an authentic atmosphere you won\'t find in big cities.' },
      { icon: 'feather', title: 'UNESCO Biosphere Reserve — Urdaibai', desc: 'Designated by UNESCO. Marshes, oak forests and migratory birds that make every walk a unique natural experience.' },
      { icon: 'utensils', title: 'Basque Gastronomy', desc: 'Bacalao al pil-pil, spider crab, clams in marinara… 200 m from Soul House you\'ll find the finest pintxos on the Basque coast.' },
      { icon: 'sun-beach', title: 'Beaches & Surf', desc: 'Laga, Laida, Mundaka — home to Europe\'s best surf wave. In 15 minutes by car you reach protected natural paradises.' },
    ],
  },
  rooms: {
    tag: 'Accommodation', heading: '3 bedrooms · 6 guests',
    intro: 'Every room has been designed to feel like home, with the sea always nearby.',
    items: [
      { emoji: 'bed', title: 'Master Bedroom', desc: 'Spacious room with double bed, built-in wardrobe and views of the Bermeo estuary upon waking.', features: ['Double bed 150×200', 'Sea views', 'Built-in wardrobe', 'Natural light'] },
      { emoji: 'anchor', title: 'Sailor\'s Room', desc: 'Decorated with authentic nautical elements. Two single beds, perfect for children or travelling friends.', features: ['2 single beds', 'Nautical décor', 'Double wardrobe', 'Desk'] },
      { emoji: 'leaf', title: 'Urdaibai Room', desc: 'The quietest room in the house. Green tones evoking the biosphere, ideal for couples unwinding.', features: ['Double bed 135×190', 'Natural atmosphere', 'Shelves & bedside tables', 'Linen included'] },
      { emoji: 'cooking', title: 'Living-Kitchen', desc: 'Fully equipped kitchen and living room with additional sofa bed for 2 people. The heart of the house.', features: ['Fully equipped kitchen', 'Sofa bed for 2', 'Smart TV', 'Fibre optic WiFi'] },
    ],
  },
  amenities: {
    tag: 'Amenities', heading: 'Everything you need',
    intro: 'Soul House is fully equipped so your stay is perfect from the very first moment.',
    items: [
      { icon: 'wifi', label: 'Fibre optic WiFi' }, { icon: 'tv', label: 'Smart TV' },
      { icon: 'cooking', label: 'Full kitchen' }, { icon: 'laundry', label: 'Washing machine' },
      { icon: 'snowflake', label: 'Fridge & freezer' }, { icon: 'coffee', label: 'Coffee maker & toaster' },
      { icon: 'shower', label: 'Rainfall shower' }, { icon: 'linen', label: 'Bed linen included' },
      { icon: '🧸', label: 'Towels included' }, { icon: 'house', label: 'Heating' },
      { icon: 'key', label: 'Self check-in' }, { icon: 'car', label: 'Parking' },
      { icon: 'wheelchair', label: 'Ground floor' }, { icon: 'paw', label: 'Pets (on request)' },
      { icon: 'broom', label: 'Cleaning service' }, { icon: 'parcel', label: 'Luggage storage' },
    ],
  },
  gallery: {
    tag: 'Gallery', heading: 'Discover Soul House',
    intro: 'Every corner tells a story of the sea and Basque tradition.',
    close: 'Close gallery', prev: 'Previous photo', next: 'Next photo', viewPhoto: 'View photo: ',
    items: [
      { emoji: 'sunrise', label: 'Estuary Views', caption: 'Sunrise over the Bermeo estuary from Soul House.' },
      { emoji: 'sofa', label: 'Living Room', caption: 'Cosy living room with sofa bed and Smart TV.' },
      { emoji: 'cooking', label: 'Equipped Kitchen', caption: 'Full kitchen with all appliances.' },
      { emoji: 'bed', label: 'Master Bedroom', caption: 'Master bedroom with double bed and sea views.' },
      { emoji: 'anchor', label: 'Sailor\'s Room', caption: 'Two single beds with nautical décor.' },
      { emoji: 'leaf', label: 'Urdaibai Room', caption: 'Peace and nature in the Urdaibai room.' },
      { emoji: 'shower', label: 'Bathroom', caption: 'Modern bathroom with rainfall shower.' },
      { emoji: 'building', label: 'Exterior', caption: 'Soul House façade in the historic centre of Bermeo.' },
    ],
  },
  location: {
    tag: 'Location', heading: 'In the heart of Bermeo',
    intro: 'Bermeo (Bizkaia, 48370) — 35 min from Bilbao on the BI-635, facing the Bay of Biscay.',
    nearbyHeading: 'What\'s nearby?', mapLabel: 'Map showing Soul House location in Bermeo',
    poisAriaLabel: 'Nearby points of interest',
    pois: [
      { icon: 'anchor', name: 'Bermeo Fishing Port', dist: '200 m on foot' },
      { icon: 'sun-beach', name: 'Laga Beach (Urdaibai)', dist: '12 km — 15 min' },
      { icon: 'wave', name: 'Mundaka (surf, MAB Reserve)', dist: '6 km — 8 min' },
      { icon: 'feather', name: 'Urdaibai Biosphere Reserve', dist: '10 km — 12 min' },
      { icon: 'city', name: 'Bilbao (Guggenheim)', dist: '35 km — 35 min' },
      { icon: 'train', name: 'EuskoTren Bermeo station', dist: '400 m on foot' },
      { icon: 'cart', name: 'Eroski supermarket', dist: '300 m on foot' },
      { icon: 'utensils', name: 'Restaurant Txoko Mari', dist: '150 m on foot' },
    ],
  },
  faq: {
    tag: 'FAQ', heading: 'Frequently asked questions',
    intro: 'Got questions? Here are the most common ones.',
    items: [
      { question: 'What are the check-in and check-out times?', answer: 'Check-in is from 16:00 and check-out by 11:00. For arrivals or departures outside these times, please contact us in advance.' },
      { question: 'Are pets allowed?', answer: 'Small pets are welcome upon prior request. Please mention it in the contact form so we can confirm.' },
      { question: 'Can I arrive by public transport?', answer: 'Yes. The EuskoTren station in Bermeo is 100 m away. Direct trains from Bilbao (Atxuri) run every hour. Bizkaibus lines also serve the area.' },
      { question: 'What is included in the price?', answer: 'Bed linen, towels, fibre WiFi, parking, hot water and heating. No management fees or platform commissions.' },
      { question: 'What is the cancellation policy?', answer: 'Free cancellation up to 7 days before arrival. Later cancellations: 50% of the total amount. Contact us for special dates.' },
      { question: 'Is there a minimum stay?', answer: 'During high season (July–August) the minimum is 3 nights. The rest of the year we accept 1-night bookings. Ask about discounts for longer stays.' },
    ],
  },
  contact: {
    eyebrow: 'Contact', heading: 'Book your stay',
    intro: 'Want to spend a few days in the Basque Country? Contact us directly and we\'ll reply within 2 hours. No commissions, no middlemen.',
    emailLabel: 'Email', phoneLabel: 'Phone / WhatsApp',
    addressLabel: 'Address', addressValue: 'Bermeo, Bizkaia, 48370 · Basque Country',
    hoursLabel: 'Availability', hoursValue: 'Monday – Sunday, 09:00 – 21:00',
    followUs: 'Follow us',
    formLegend: 'Request availability',
    labelName: 'Full name', labelEmail: 'Email address',
    labelPhone: 'Phone (optional)', labelGuests: 'Number of guests',
    labelCheckin: 'Arrival date', labelCheckout: 'Departure date',
    labelMessage: 'Message (optional)', labelPrivacy: 'I have read and accept the privacy policy',
    privacyText: 'Your data will only be used to respond to your enquiry.',
    submitBtn: 'Send request', submitting: 'Sending…',
    successTitle: 'Request received!',
    successText: 'We\'ll reply within 2 hours to your email. See you soon in Bermeo!',
    sendAnother: 'Send another enquiry',
    errorMsg: 'There was an error sending the form. Please write to us directly at gabrielsgc@gmail.com',
    guestOptions: ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people (maximum)'],
    guestPlaceholder: 'How many guests?',
    msgPlaceholder: 'Special request? Celebrating something? Need a cot for a baby?',
    charCount: '{n} / 800 characters',
    formAriaLabel: 'Soul House Bermeo booking form',
    errors: {
      required: 'This field is required.',
      requiredTrue: 'You must accept the privacy policy.',
      email: 'Enter a valid email address (e.g. name@email.com).',
      minLength: 'Minimum {n} characters.',
      maxLength: 'Maximum {n} characters.',
      pattern: 'Invalid format (e.g. +34 600 000 000).',
      pastDate: 'The date cannot be in the past.',
      checkoutBeforeCheckin: 'Departure must be after arrival.',
      noScript: 'The field contains disallowed content.',
      invalid: 'Invalid field.',
    },
  },
  footer: {
    tagline: 'Bermeo · Bizkaia · Basque Country',
    desc: 'Exclusive-use holiday rental in the heart of Bermeo harbour. 3 bedrooms · 6 guests. Direct booking, no commissions.',
    exploreHeading: 'Explore', contactHeading: 'Contact', legalHeading: 'Legal',
    bookNow: 'Request a booking',
    navLinks: [
      { href: '#inicio', label: 'Home' }, { href: '#habitaciones', label: 'Bedrooms' },
      { href: '#galeria', label: 'Gallery' }, { href: '#comodidades', label: 'Amenities' },
      { href: '#ubicacion', label: 'Location' }, { href: '#preguntas', label: 'FAQ' },
      { href: '#contacto', label: 'Contact' },
    ],
    legal: ['VT no. XXXXXX (Basque Government)', 'Check-in: 16:00 · Check-out: 11:00', 'Max. capacity: 6 guests'],
  },
};

// ── Français ──────────────────────────────────────────────────────
const fr: Translations = {
  lang: 'fr',
  nav: {
    home: 'La Maison', gallery: 'Galerie', services: 'Services',
    location: 'Localisation', faq: 'FAQ', book: 'Réserver',
    brand: 'Bermeo · Pays Basque',
    ariaNav: 'Navigation principale',
    ariaBrand: 'Soul House Bermeo — Accueil',
    ariaOpen: 'Ouvrir le menu de navigation',
    ariaClose: 'Fermer le menu',
  },
  hero: {
    eyebrow: 'Maison de vacances — Port de Bermeo',
    tagline: 'Une maison pleine d\'âme à Bermeo, le port de pêche le plus pittoresque du Pays Basque. Trois chambres, six personnes, vue sur l\'estuaire cantabrique.',
    cta1: 'Vérifier la disponibilité',
    cta2: 'Voir la maison',
    sideTag: 'Réservation directe · sans commission · usage exclusif',
    features: [
      { icon: 'house', label: '3 chambres' }, { icon: 'users', label: '6 personnes' },
      { icon: 'wave', label: 'Vue sur l\'estuaire' }, { icon: 'wifi', label: 'WiFi fibre' },
      { icon: 'car', label: 'Parking gratuit' }, { icon: 'check-circle', label: 'Réservation directe' },
    ],
  },
  highlights: {
    tag: 'Pourquoi Bermeo',
    heading: 'Des expériences uniques à votre porte',
    intro: 'Bermeo est bien plus qu\'une destination touristique — c\'est le battement de cœur du Pays Basque maritime.',
    items: [
      { icon: 'anchor', title: 'Port de pêche', desc: 'Le port le plus pittoresque de la mer Cantabrique. Chipirons frais, chalutiers à quai et une atmosphère authentique impossible à trouver en ville.' },
      { icon: 'feather', title: 'Réserve de biosphère — Urdaibai', desc: 'Classée par l\'UNESCO. Marais, chênaies et oiseaux migrateurs qui font de chaque promenade une expérience naturelle hors du commun.' },
      { icon: 'utensils', title: 'Gastronomie basque', desc: 'Morue au pil-pil, tourteau, palourdes à la marinière… À 200 m de Soul House vous trouverez les meilleurs pintxos de la côte basque.' },
      { icon: 'sun-beach', title: 'Plages et surf', desc: 'Laga, Laida, Mundaka — la meilleure vague de surf d\'Europe. En 15 minutes de voiture vous accédez à des paradis naturels protégés.' },
    ],
  },
  rooms: {
    tag: 'Hébergement', heading: '3 chambres · 6 personnes',
    intro: 'Chaque séjour a été pensé pour que vous vous sentiez comme à la maison, la mer toujours proche.',
    items: [
      { emoji: 'bed', title: 'Chambre principale', desc: 'Grande chambre avec lit double, armoire encastrée et vue sur l\'estuaire de Bermeo au réveil.', features: ['Lit double 150×200', 'Vue mer', 'Armoire encastrée', 'Lumière naturelle'] },
      { emoji: 'anchor', title: 'Chambre du marin', desc: 'Décorée d\'éléments nautiques authentiques. Deux lits simples, idéale pour enfants ou amis voyageurs.', features: ['2 lits simples', 'Décor nautique', 'Armoire double', 'Bureau'] },
      { emoji: 'leaf', title: 'Chambre Urdaibai', desc: 'La plus calme de la maison. Des tons verts évoquant la biosphère, parfaite pour se ressourcer en couple.', features: ['Lit double 135×190', 'Ambiance naturelle', 'Étagères et chevets', 'Linge de lit inclus'] },
      { emoji: 'cooking', title: 'Salon-cuisine', desc: 'Cuisine entièrement équipée et salon avec canapé-lit supplémentaire pour 2 personnes. Le cœur de la maison.', features: ['Cuisine équipée', 'Canapé-lit 2 places', 'Smart TV', 'WiFi fibre optique'] },
    ],
  },
  amenities: {
    tag: 'Services', heading: 'Tout ce dont vous avez besoin',
    intro: 'Soul House est entièrement équipée pour que votre séjour soit parfait dès le premier instant.',
    items: [
      { icon: 'wifi', label: 'WiFi fibre optique' }, { icon: 'tv', label: 'Smart TV' },
      { icon: 'cooking', label: 'Cuisine complète' }, { icon: 'laundry', label: 'Machine à laver' },
      { icon: 'snowflake', label: 'Réfrigérateur et congélateur' }, { icon: 'coffee', label: 'Cafetière et grille-pain' },
      { icon: 'shower', label: 'Douche à effet pluie' }, { icon: 'linen', label: 'Linge de lit inclus' },
      { icon: '🧸', label: 'Serviettes incluses' }, { icon: 'house', label: 'Chauffage' },
      { icon: 'key', label: 'Check-in autonome' }, { icon: 'car', label: 'Parking' },
      { icon: 'wheelchair', label: 'Rez-de-chaussée' }, { icon: 'paw', label: 'Animaux (sur demande)' },
      { icon: 'broom', label: 'Service de ménage' }, { icon: 'parcel', label: 'Stockage des bagages' },
    ],
  },
  gallery: {
    tag: 'Galerie', heading: 'Découvrez Soul House',
    intro: 'Chaque recoin raconte une histoire de la mer et de la tradition basque.',
    close: 'Fermer la galerie', prev: 'Photo précédente', next: 'Photo suivante', viewPhoto: 'Voir la photo : ',
    items: [
      { emoji: 'sunrise', label: 'Vue sur l\'estuaire', caption: 'Lever du soleil sur l\'estuaire de Bermeo depuis Soul House.' },
      { emoji: 'sofa', label: 'Salon principal', caption: 'Salon chaleureux avec canapé-lit et Smart TV.' },
      { emoji: 'cooking', label: 'Cuisine équipée', caption: 'Cuisine complète avec tous les appareils électroménagers.' },
      { emoji: 'bed', label: 'Chambre principale', caption: 'Chambre principale avec lit double et vue mer.' },
      { emoji: 'anchor', label: 'Chambre du marin', caption: 'Deux lits simples avec décoration nautique.' },
      { emoji: 'leaf', label: 'Chambre Urdaibai', caption: 'Calme et nature dans la chambre Urdaibai.' },
      { emoji: 'shower', label: 'Salle de bain', caption: 'Salle de bain moderne avec douche à effet pluie.' },
      { emoji: 'building', label: 'Extérieur', caption: 'Façade de Soul House dans le centre historique de Bermeo.' },
    ],
  },
  location: {
    tag: 'Localisation', heading: 'Au cœur de Bermeo',
    intro: 'Bermeo (Bizkaia, 48370) — à 35 min de Bilbao par la BI-635, face à la mer Cantabrique.',
    nearbyHeading: 'Qu\'y a-t-il à proximité ?', mapLabel: 'Carte de localisation de Soul House à Bermeo',
    poisAriaLabel: 'Points d\'intérêt proches',
    pois: [
      { icon: 'anchor', name: 'Port de pêche de Bermeo', dist: '200 m à pied' },
      { icon: 'sun-beach', name: 'Plage Laga (Urdaibai)', dist: '12 km — 15 min' },
      { icon: 'wave', name: 'Mundaka (surf, Réserve MAB)', dist: '6 km — 8 min' },
      { icon: 'feather', name: 'Réserve biosphère Urdaibai', dist: '10 km — 12 min' },
      { icon: 'city', name: 'Bilbao (Guggenheim)', dist: '35 km — 35 min' },
      { icon: 'train', name: 'Gare EuskoTren de Bermeo', dist: '400 m à pied' },
      { icon: 'cart', name: 'Supermarché Eroski', dist: '300 m à pied' },
      { icon: 'utensils', name: 'Restaurant Txoko Mari', dist: '150 m à pied' },
    ],
  },
  faq: {
    tag: 'FAQ', heading: 'Questions fréquentes',
    intro: 'Des questions ? Voici les plus fréquentes.',
    items: [
      { question: 'Quelles sont les heures de check-in et check-out ?', answer: 'Le check-in est à partir de 16h00 et le check-out jusqu\'à 11h00. Pour des arrivées ou départs en dehors de ces horaires, contactez-nous à l\'avance.' },
      { question: 'Les animaux de compagnie sont-ils acceptés ?', answer: 'Les petits animaux sont les bienvenus sur demande préalable. Veuillez l\'indiquer dans le formulaire de contact pour que nous puissions confirmer.' },
      { question: 'Puis-je venir en transport en commun ?', answer: 'Oui. La gare EuskoTren de Bermeo est à 100 m. Des trains directs depuis Bilbao (Atxuri) circulent toutes les heures. Des lignes Bizkaibus desservent également la zone.' },
      { question: 'Qu\'est-ce qui est inclus dans le prix ?', answer: 'Linge de lit, serviettes, WiFi fibre, parking, eau chaude et chauffage. Aucuns frais de gestion ni commissions de plateforme.' },
      { question: 'Quelle est la politique d\'annulation ?', answer: 'Annulation gratuite jusqu\'à 7 jours avant l\'arrivée. Annulations ultérieures : 50 % du montant total. Contactez-nous pour les dates spéciales.' },
      { question: 'Y a-t-il un séjour minimum ?', answer: 'En haute saison (juillet–août), le minimum est de 3 nuits. Le reste de l\'année, nous acceptons les réservations d\'1 nuit. Renseignez-vous pour des réductions sur les longs séjours.' },
    ],
  },
  contact: {
    eyebrow: 'Contact', heading: 'Réservez votre séjour',
    intro: 'Envie de passer quelques jours au Pays Basque ? Contactez-nous directement et nous répondrons en moins de 2 heures. Sans commission, sans intermédiaires.',
    emailLabel: 'E-mail', phoneLabel: 'Téléphone / WhatsApp',
    addressLabel: 'Adresse', addressValue: 'Bermeo, Bizkaia, 48370 · Pays Basque',
    hoursLabel: 'Disponibilité', hoursValue: 'Lundi – Dimanche, 09:00 – 21:00',
    followUs: 'Suivez-nous',
    formLegend: 'Demander la disponibilité',
    labelName: 'Nom complet', labelEmail: 'Adresse e-mail',
    labelPhone: 'Téléphone (facultatif)', labelGuests: 'Nombre de personnes',
    labelCheckin: 'Date d\'arrivée', labelCheckout: 'Date de départ',
    labelMessage: 'Message (facultatif)', labelPrivacy: 'J\'ai lu et j\'accepte la politique de confidentialité',
    privacyText: 'Vos données ne serviront qu\'à répondre à votre demande.',
    submitBtn: 'Envoyer la demande', submitting: 'Envoi en cours…',
    successTitle: 'Demande reçue !',
    successText: 'Nous vous répondrons dans les 2 heures à votre adresse e-mail. À bientôt à Bermeo !',
    sendAnother: 'Envoyer une autre demande',
    errorMsg: 'Une erreur s\'est produite lors de l\'envoi. Veuillez nous écrire directement à gabrielsgc@gmail.com',
    guestOptions: ['1 personne', '2 personnes', '3 personnes', '4 personnes', '5 personnes', '6 personnes (maximum)'],
    guestPlaceholder: 'Combien de personnes ?',
    msgPlaceholder: 'Demande spéciale ? Vous fêtez quelque chose ? Besoin d\'un lit bébé ?',
    charCount: '{n} / 800 caractères',
    formAriaLabel: 'Formulaire de réservation Soul House Bermeo',
    errors: {
      required: 'Ce champ est obligatoire.',
      requiredTrue: 'Vous devez accepter la politique de confidentialité.',
      email: 'Entrez une adresse e-mail valide (ex. nom@email.com).',
      minLength: 'Minimum {n} caractères.',
      maxLength: 'Maximum {n} caractères.',
      pattern: 'Format invalide (ex. +34 600 000 000).',
      pastDate: 'La date ne peut pas être dans le passé.',
      checkoutBeforeCheckin: 'La date de départ doit être après l\'arrivée.',
      noScript: 'Le champ contient du contenu non autorisé.',
      invalid: 'Champ non valide.',
    },
  },
  footer: {
    tagline: 'Bermeo · Bizkaia · Pays Basque',
    desc: 'Location vacances exclusive au cœur du port de Bermeo. 3 chambres · 6 personnes. Réservation directe sans commission.',
    exploreHeading: 'Explorer', contactHeading: 'Contact', legalHeading: 'Mentions légales',
    bookNow: 'Demander une réservation',
    navLinks: [
      { href: '#inicio', label: 'Accueil' }, { href: '#habitaciones', label: 'Chambres' },
      { href: '#galeria', label: 'Galerie' }, { href: '#comodidades', label: 'Services' },
      { href: '#ubicacion', label: 'Localisation' }, { href: '#preguntas', label: 'FAQ' },
      { href: '#contacto', label: 'Contact' },
    ],
    legal: ['VT n° XXXXXX (Gouvernement basque)', 'Check-in : 16h00 · Check-out : 11h00', 'Capacité max. : 6 personnes'],
  },
};

const DICT: Record<Lang, Translations> = { es, eu, en, fr };

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly currentLang = signal<Lang>('es');
  readonly t = computed(() => DICT[this.currentLang()]);

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    document.documentElement.lang = lang;
  }
}
