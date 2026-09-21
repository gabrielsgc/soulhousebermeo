import { Lang } from '../../services/i18n.service';

export type GuideKey =
  | 'bermeo'
  | 'gaztelugatxe'
  | 'urdaibai'
  | 'que-ver-en-bermeo'
  | 'bermeo-en-dos-dias'
  | 'donde-alojarse-en-bermeo'
  | 'playas-cerca-de-bermeo'
  | 'visitar-gaztelugatxe-desde-bermeo'
  | 'donde-dormir-cerca-de-gaztelugatxe'
  | 'gaztelugatxe-y-bermeo-en-un-fin-de-semana'
  | 'que-ver-en-urdaibai'
  | 'ruta-por-urdaibai'
  | 'donde-alojarse-en-urdaibai'
  | 'urdaibai-con-ninos';

export interface GuideContent {
  title: string;
  intro: string;
  sections: {
    heading: string;
    text: string;
    paragraphs?: string[];
    items?: string[];
  }[];
  relatedLinks?: { label: string; href: string }[];
  mapUrl?: string;
}

const BERMEO_LONG: Record<Lang, GuideContent> = {
  es: {
    title: 'Qué ver en Bermeo: 10 lugares imprescindibles para tu visita',
    intro: 'Bermeo es uno de los pueblos marineros con más personalidad de la costa vasca. En esta guía encontrarás qué ver en Bermeo, qué hacer durante una escapada y cómo combinar el puerto, la historia, la gastronomía y los paisajes de Urdaibai desde Soul House.',
    sections: [
      {
        heading: 'Bermeo, la puerta de Urdaibai',
        text: '',
        paragraphs: [
          'Situado en la costa de Bizkaia y vinculado al paisaje de la Reserva de la Biosfera de Urdaibai, Bermeo conserva una identidad marinera muy presente. El puerto, las casas del casco histórico, la tradición pesquera y la cercanía de San Juan de Gaztelugatxe hacen que sea una base excelente para recorrer esta parte del País Vasco.',
          'Si estás organizando vacaciones en Bermeo, puedes dedicar un día a caminar sin prisas por el municipio y otro a descubrir la costa y qué visitar en Urdaibai. La escala compacta del centro permite moverse a pie y reservar el coche para las excursiones del entorno.'
        ],
      },
      {
        heading: '1. El Puerto Viejo de Bermeo',
        text: '',
        paragraphs: [
          'El Puerto Viejo es el corazón de Bermeo y el mejor lugar para empezar la visita. Las fachadas de colores, los barcos, las terrazas y el movimiento del muelle cuentan la historia de una localidad que siempre ha mirado al Cantábrico.',
          'Al atardecer, la luz sobre el agua convierte el paseo en uno de los momentos más agradables de cualquier ruta por Bermeo. Es un buen sitio para tomar un café, probar un pintxo o sentarse a observar el ritmo del puerto.'
        ],
        items: ['Pasear por el muelle y el entorno del puerto.', 'Fotografiar las fachadas y los barcos.', 'Disfrutar de un pintxo frente al mar.', 'Observar, con respeto, la actividad pesquera local.'],
      },
      {
        heading: '2. Torre Ercilla y Museo del Pescador',
        text: '',
        paragraphs: [
          'La Torre Ercilla alberga el Museo del Pescador, una visita muy recomendable para entender la relación de Bermeo con el mar. El museo explica la vida de los marineros, las embarcaciones y el peso que la pesca ha tenido en la economía y la cultura local.',
          'Es una parada especialmente interesante si viajas en familia o si quieres que el paseo por el puerto tenga más contexto. Comprueba los horarios oficiales antes de ir, ya que pueden variar según la temporada.'
        ],
      },
      {
        heading: '3. Iglesia de Santa Eufemia',
        text: '',
        paragraphs: [
          'Junto al puerto se encuentra la iglesia de Santa Eufemia, uno de los edificios más reconocibles de Bermeo. Su ubicación, integrada en el paisaje urbano y marítimo, la convierte en una parada natural durante el recorrido por el centro.',
          'Después de verla, continúa hacia las calles del casco histórico y vuelve al puerto por alguno de los recorridos peatonales. Así podrás entender cómo se unen en Bermeo el patrimonio, la vida cotidiana y la actividad marinera.'
        ],
      },
      {
        heading: '4. Casco histórico y Puerta de San Juan',
        text: '',
        paragraphs: [
          'Perderse por el casco histórico es una de las mejores cosas que hacer en Bermeo. Encontrarás plazas, comercios, edificios tradicionales y rincones que conservan la escala de una villa marinera. La Puerta de San Juan recuerda las antiguas murallas y es una de las paradas imprescindibles para quienes disfrutan de la historia local.',
          'El centro se recorre cómodamente a pie. Lleva calzado confortable y deja espacio para entrar en una taberna, sentarte en una plaza y dejar que el paseo marque el ritmo.'
        ],
      },
      {
        heading: '5. Parque Lamera y playa de Aritzatxu',
        text: '',
        paragraphs: [
          'El Parque Lamera ofrece un descanso agradable en el centro urbano y puede ser una buena pausa si viajas con niños. Es un espacio vinculado a la vida local y a distintas actividades de Bermeo durante el año.',
          'La playa de Aritzatxu, cerca del centro, muestra una cara más natural y recogida del municipio. Sus condiciones pueden cambiar con el oleaje y la marea, así que conviene informarse y extremar la prudencia antes del baño. El paseo hasta allí completa muy bien una visita al puerto.'
        ],
      },
      {
        heading: '6. Isla de Izaro y miradores de la costa',
        text: '',
        paragraphs: [
          'La isla de Izaro es uno de los símbolos del paisaje de Bermeo y de Urdaibai. No es un lugar de visita libre, pero puede contemplarse desde distintos puntos del litoral y, según la temporada y la actividad disponible, desde el mar.',
          'Busca un mirador con tiempo despejado, observa cómo cambia la luz sobre la isla y disfruta del horizonte sin convertir la parada en una carrera. La costa vasca se entiende mejor cuando se deja espacio para mirar.'
        ],
      },
      {
        heading: '7. Qué visitar en Urdaibai desde Bermeo',
        text: '',
        paragraphs: [
          'Bermeo es una de las puertas de entrada a Urdaibai. Desde aquí puedes organizar excursiones hacia Mundaka, las playas de Laga y Laida, Gernika y otros pueblos y paisajes de la reserva. Cada zona tiene un carácter diferente: mar abierto, ría, marismas, bosques y patrimonio.',
          'No intentes abarcarlo todo en un solo día. Elige dos o tres paradas, consulta los desplazamientos y adapta el plan a la meteorología. En nuestra guía de [ruta por Urdaibai](/guia/ruta-por-urdaibai/) encontrarás una propuesta para ordenar el recorrido.'
        ],
      },
      {
        heading: '8. San Juan de Gaztelugatxe',
        text: '',
        paragraphs: [
          'San Juan de Gaztelugatxe es la excursión más conocida de la zona y una de las razones por las que muchas personas eligen Bermeo como base. El puente de piedra, las escaleras y el paisaje del Cantábrico forman una experiencia espectacular, pero requiere planificar la visita.',
          'Consulta siempre la información oficial sobre reserva, acceso y condiciones antes de salir. Lleva agua y calzado adecuado, y calcula tiempo para caminar sin prisas. Puedes ampliar la información en nuestra guía sobre [visitar Gaztelugatxe desde Bermeo](/guia/visitar-gaztelugatxe-desde-bermeo/).'
        ],
      },
      {
        heading: '9. Gastronomía marinera',
        text: '',
        paragraphs: [
          'Ninguna visita a Bermeo está completa sin sentarse a comer. El bonito del norte, el atún, el marmitako, las conservas y los pintxos forman parte de una tradición pesquera que sigue viva en sus restaurantes y tabernas.',
          'Pregunta por el producto del día y disfruta de una comida sin convertirla en una lista de obligaciones. La gastronomía también es una forma de conocer Bermeo: despacio, compartida y cerca del puerto.'
        ],
      },
      {
        heading: '10. Cómo organizar una escapada a Bermeo',
        text: '',
        paragraphs: ['Un fin de semana permite combinar turismo en Bermeo con naturaleza y costa. Esta propuesta es flexible y debe ajustarse a los horarios de acceso, al tiempo y a tus preferencias.'],
        items: ['Día 1: Puerto Viejo, Museo del Pescador, casco histórico, Puerta de San Juan y gastronomía local.', 'Día 2: San Juan de Gaztelugatxe, un mirador costero y una parada en Urdaibai o en la playa de Aritzatxu.', 'Con más tiempo: añade Mundaka, Laga, Laida o Gernika y disfruta de la comarca con menos desplazamientos.'],
      },
      {
        heading: 'Dónde alojarse en Bermeo',
        text: '',
        paragraphs: [
          'Para descubrir Bermeo, Urdaibai y Gaztelugatxe con comodidad, una base junto al puerto ayuda a organizar los días sin largos desplazamientos. Soul House Bermeo es una vivienda turística con tres habitaciones y capacidad para seis personas, pensada para familias y grupos que quieren compartir la experiencia de la costa vasca.',
          'Consulta la [ubicación de Soul House](/ubicacion/) y revisa la [disponibilidad para tu estancia](/reservar/). Si buscas más ideas, puedes seguir con nuestras guías sobre [dónde alojarse en Urdaibai](/guia/donde-alojarse-en-urdaibai/) y [Bermeo en dos días](/guia/bermeo-en-dos-dias/).'
        ],
      },
      {
        heading: 'Preguntas frecuentes sobre Bermeo',
        text: '',
        paragraphs: [
          '¿Cuánto tiempo se necesita para visitar Bermeo? Un día permite conocer los principales puntos del centro, pero un fin de semana es mejor para combinar Bermeo, Urdaibai y Gaztelugatxe.',
          '¿Cuál es la mejor época? La primavera y el verano ofrecen más horas de luz, aunque Bermeo conserva su interés durante todo el año. Para caminar y hacer excursiones, revisa siempre la previsión y el estado del mar.',
          '¿Se puede visitar Gaztelugatxe desde Bermeo? Sí. Bermeo es una base muy práctica, siempre que planifiques el acceso y consultes la información oficial antes de ir.'
        ],
      },
    ],
    relatedLinks: [
      { label: 'Descubre la ubicación', href: '/ubicacion/' },
      { label: 'Visitar Gaztelugatxe desde Bermeo', href: '/guia/visitar-gaztelugatxe-desde-bermeo/' },
      { label: 'Ruta por Urdaibai', href: '/guia/ruta-por-urdaibai/' },
      { label: 'Consultar disponibilidad', href: '/reservar/' },
    ],
    mapUrl: 'https://www.google.com/maps?q=Bermeo%2C%20Bizkaia&output=embed',
  },
  eu: {
    title: 'Bermeon zer ikusi: bisitarako ezinbesteko 10 leku',
    intro: 'Bermeo euskal kostaldeko itsas herri berezienetako bat da. Gida honetan portua, ondarea, gastronomia eta Urdaibaiko paisaiak ezagutzeko ibilbide praktikoa aurkituko duzu, Soul House oinarri hartuta.',
    sections: [
      { heading: 'Bermeo, Urdaibairako atea', text: '', paragraphs: ['Bizkaiko kostaldean eta Urdaibaiko Biosfera Erreserbaren paisaiatik gertu, Bermeok itsas nortasun bizia gordetzen du. Portuak, alde zaharrak eta San Juan de Gaztelugatxetik gertu egoteak ingurua ezagutzeko oinarri bikaina bihurtzen dute.', 'Bermeon oporrak antolatzen badituzu, egun bat herrian lasai ibiltzeko eta beste bat kostaldea eta Urdaibai ezagutzeko gorde dezakezu. Herrigunea oinez egiteko modukoa da eta autoa inguruko txangoetarako gorde daiteke.'] },
      { heading: '1. Bermeoko Portu Zaharra', text: '', paragraphs: ['Portu Zaharra da Bermeoren bihotza eta bisita hasteko lekurik onena. Koloretako etxeek, itsasontziek eta terrazek herriak Kantauri itsasoarekin duen lotura erakusten dute.', 'Arratsaldean, paseatu kaian, hartu kafe bat edo dastatu pintxo bat itsasoaren aurrean.'] },
      { heading: '2. Ercilla dorrea eta Arrantzaleen Museoa', text: '', paragraphs: ['Ercilla dorreak Arrantzaleen Museoa hartzen du, Bermeoren itsas historia ulertzeko bisita interesgarria. Marinel-en bizimodua eta arrantzaren garrantzia ezagutuko dituzu.', 'Familiatxoekin bisitatzeko aproposa da; kontsultatu ordutegi ofizialak, urtaroaren arabera alda baitaitezke.'] },
      { heading: '3. Santa Eufemia eliza', text: '', paragraphs: ['Portuaren ondoan dagoen Santa Eufemia eliza Bermeoko eraikin ezagunenetako bat da. Bere kokapenak hiriaren, ondarearen eta itsas giroaren arteko lotura erakusten du.'] },
      { heading: '4. Alde zaharra eta San Joan Atea', text: '', paragraphs: ['Alde zaharreko kaleetan galtzea da Bermeon egiteko gauzarik onenetakoa. Plazak, denda tradizionalak eta portura begiratzeko txokoak aurkituko dituzu. San Joan Atea antzinako harresien lekuko da.', 'Erdigunea erraz egiten da oinez; eraman oinetako erosoak eta utzi denbora taberna batean esertzeko.'] },
      { heading: '5. Lamera parkea eta Aritzatxu hondartza', text: '', paragraphs: ['Lamera parkeak atseden hartzeko aukera ematen du, bereziki haurrekin bidaiatzen baduzu. Aritzatxu hondartzak herriaren aurpegi naturalagoa erakusten du; olatuak eta mareak kontuan hartu bainatu aurretik.'] },
      { heading: '6. Izaro uhartea eta kostaldeko begiratokiak', text: '', paragraphs: ['Izaro uhartea Bermeoko eta Urdaibaiko paisaiaren ikurretako bat da. Ezin da libreki bisitatu, baina kostaldeko hainbat puntutatik ikus daiteke eta, baldintzen arabera, itsasotik ere bai.', 'Aukeratu egun argia eta gozatu bistaz presarik gabe.'] },
      { heading: '7. Bermeotik Urdaibain zer bisitatu', text: '', paragraphs: ['Bermeo Urdaibairako sarrera nagusietako bat da. Mundaka, Laga eta Laida hondartzak, Gernika eta erreserbako beste herri eta paisaiak bisita ditzakezu. Ez saiatu dena egun bakarrean egiten; aukeratu bizpahiru geldialdi eta egokitu plana eguraldira.', 'Ikusi [Urdaibaiko ibilbidea](/guia/ruta-por-urdaibai/) gida.'] },
      { heading: '8. San Juan de Gaztelugatxe', text: '', paragraphs: ['San Juan de Gaztelugatxe inguruko txangorik ezagunena da. Zubia, eskailerak eta Kantauri itsasoaren paisaia ikusgarriak dira, baina bisita aldez aurretik planifikatu behar da.', 'Kontsultatu beti sarbideari buruzko informazio ofiziala. Irakurri gure [Gaztelugatxe bisitatzeko gida](/guia/visitar-gaztelugatxe-desde-bermeo/).'] },
      { heading: '9. Itsas gastronomia', text: '', paragraphs: ['Bermeora egindako bisita ez da osatzen bertako janaria probatu gabe: hegaluzea, atuna, marmitakoa, kontserbak eta pintxoak. Galdetu eguneko produktuaz eta gozatu portutik gertu, presarik gabe.'] },
      { heading: '10. Bermeoko ihesaldia antolatzea', text: '', paragraphs: ['Asteburu batek turismoa, natura eta kostaldea uztartzeko aukera ematen du.'], items: ['1. eguna: Portu Zaharra, Arrantzaleen Museoa, alde zaharra eta bertako gastronomia.', '2. eguna: San Juan de Gaztelugatxe, kostaldeko begiratokia eta Urdaibai edo Aritzatxu.', 'Denbora gehiagoz: gehitu Mundaka, Laga, Laida edo Gernika.'] },
      { heading: 'Non ostatu hartu Bermeon', text: '', paragraphs: ['Soul House Bermeo portuan dagoen turismo-etxebizitza da, hiru logela eta sei lagunentzako edukierarekin. Begiratu [kokapena](/ubicacion/) eta [erreserbatu egonaldia](/reservar/).'] },
      { heading: 'Bermeori buruzko ohiko galderak', text: '', paragraphs: ['Egun batekin nahikoa da erdigunea ikusteko, baina asteburu batek Bermeo, Urdaibai eta Gaztelugatxe lasaiago uztartzen ditu. Udaberria eta uda egokiak dira aire zabaleko planetarako; hala ere, urte osoan du xarma.'] },
    ],
    relatedLinks: [{ label: 'Kokapena', href: '/ubicacion/' }, { label: 'Gaztelugatxe Bermeotik', href: '/guia/visitar-gaztelugatxe-desde-bermeo/' }, { label: 'Urdaibain barrena', href: '/guia/ruta-por-urdaibai/' }, { label: 'Erreserbatu', href: '/reservar/' }],
    mapUrl: 'https://www.google.com/maps?q=Bermeo%2C%20Bizkaia&output=embed',
  },
  en: {
    title: 'What to see in Bermeo: 10 essential places',
    intro: 'Bermeo is one of the Basque coast’s most distinctive fishing towns. This guide covers what to see and do in Bermeo, from the harbour and old town to Urdaibai and Gaztelugatxe, with Soul House as your base.',
    sections: [
      { heading: 'Bermeo, the gateway to Urdaibai', text: '', paragraphs: ['On the Biscay coast and close to the landscapes of the Urdaibai Biosphere Reserve, Bermeo has a strong maritime identity. Its harbour, old streets and position near San Juan de Gaztelugatxe make it an excellent base for this part of the Basque Country.', 'A day in town and another exploring the coast is a good way to plan a holiday in Bermeo. The centre is compact and easy to walk, leaving the car for trips further afield.'] },
      { heading: '1. Bermeo Old Harbour', text: '', paragraphs: ['The Old Harbour is Bermeo’s heart and the best place to start. Colourful façades, fishing boats, terraces and the working quay show the town’s connection with the Cantabrian Sea.', 'At sunset, walk the waterfront, stop for a pintxo or simply watch the harbour settle into the evening.'] },
      { heading: '2. Ercilla Tower and Fisherman’s Museum', text: '', paragraphs: ['Ercilla Tower houses the Fisherman’s Museum, a useful introduction to Bermeo’s maritime history, sailors’ lives and the importance of fishing to local culture.', 'It is a worthwhile family stop. Check official opening times before visiting, as they can change seasonally.'] },
      { heading: '3. Santa Eufemia Church', text: '', paragraphs: ['Next to the harbour, Santa Eufemia Church is one of Bermeo’s most recognisable buildings. Its setting makes it a natural stop as you move between the waterfront and the old town.'] },
      { heading: '4. Old town and San Juan Gate', text: '', paragraphs: ['Wandering the old town is one of the best things to do in Bermeo. Look out for small squares, traditional shops and views back towards the harbour. San Juan Gate is one of the remaining traces of the former walls.', 'The centre is comfortable on foot, so wear good shoes and leave room for an unplanned stop in a local bar.'] },
      { heading: '5. Lamera Park and Aritzatxu Beach', text: '', paragraphs: ['Lamera Park is an easy place to pause, especially with children. Aritzatxu Beach, close to the centre, offers a more sheltered natural setting; check sea and tide conditions before swimming.'] },
      { heading: '6. Izaro Island and coastal viewpoints', text: '', paragraphs: ['Izaro Island is one of the defining symbols of Bermeo and Urdaibai. It is not freely visitable, but can be viewed from the coast and, depending on the season and activity available, from the sea.', 'Choose a clear day and take time to enjoy the changing light across the water.'] },
      { heading: '7. What to visit in Urdaibai from Bermeo', text: '', paragraphs: ['Bermeo is one of the main gateways to Urdaibai. Plan trips to Mundaka, Laga and Laida beaches, Gernika and the reserve’s other villages and landscapes. Pick two or three stops rather than trying to cover everything in one day.', 'Continue with our [Urdaibai route](/guia/ruta-por-urdaibai/) guide.'] },
      { heading: '8. San Juan de Gaztelugatxe', text: '', paragraphs: ['San Juan de Gaztelugatxe is the area’s best-known excursion. The stone bridge, steps and Cantabrian views are spectacular, but access should be planned carefully.', 'Always check official access information before leaving. Read our guide to [visiting Gaztelugatxe from Bermeo](/guia/visitar-gaztelugatxe-desde-bermeo/).'] },
      { heading: '9. Seafood and Basque food', text: '', paragraphs: ['A visit is not complete without local food: bonito, tuna, marmitako, preserves and pintxos. Ask what is fresh and enjoy a relaxed meal close to the harbour.'] },
      { heading: '10. Planning a Bermeo break', text: '', paragraphs: ['A weekend is enough to combine Bermeo, nature and the coast.'], items: ['Day 1: Old Harbour, Fisherman’s Museum, old town, San Juan Gate and local food.', 'Day 2: San Juan de Gaztelugatxe, a coastal viewpoint and Urdaibai or Aritzatxu Beach.', 'With more time: add Mundaka, Laga, Laida or Gernika.'] },
      { heading: 'Where to stay in Bermeo', text: '', paragraphs: ['Soul House Bermeo is a holiday home in the harbour with three bedrooms and space for six guests. See the [location](/ubicacion/) and [check availability](/reservar/).'] },
      { heading: 'Frequently asked questions about Bermeo', text: '', paragraphs: ['One day covers the main centre, but a weekend is better for combining Bermeo, Urdaibai and Gaztelugatxe. Spring and summer bring longer days, although Bermeo is appealing year-round.'] },
    ],
    relatedLinks: [{ label: 'Find Soul House', href: '/ubicacion/' }, { label: 'Gaztelugatxe from Bermeo', href: '/guia/visitar-gaztelugatxe-desde-bermeo/' }, { label: 'Urdaibai route', href: '/guia/ruta-por-urdaibai/' }, { label: 'Check availability', href: '/reservar/' }],
    mapUrl: 'https://www.google.com/maps?q=Bermeo%2C%20Bizkaia&output=embed',
  },
  fr: {
    title: 'Que voir à Bermeo : 10 lieux incontournables',
    intro: 'Bermeo est l’un des ports de pêche les plus authentiques de la côte basque. Ce guide présente les lieux à voir et les activités à faire à Bermeo, avec Urdaibai et Gaztelugatxe depuis Soul House.',
    sections: [
      { heading: 'Bermeo, la porte d’Urdaibai', text: '', paragraphs: ['Sur la côte de Biscaye, près de la réserve de biosphère d’Urdaibai, Bermeo conserve une forte identité maritime. Son port, sa vieille ville et sa proximité avec San Juan de Gaztelugatxe en font une excellente base.', 'Le centre se visite facilement à pied : consacrez-lui une journée et gardez une autre journée pour la côte et la réserve.'] },
      { heading: '1. Le vieux port de Bermeo', text: '', paragraphs: ['Le vieux port est le cœur de Bermeo. Façades colorées, bateaux, terrasses et quais racontent le lien de la ville avec la mer Cantabrique.', 'Au coucher du soleil, promenez-vous, goûtez un pintxo et observez le port changer de rythme.'] },
      { heading: '2. La tour Ercilla et le Musée du Pêcheur', text: '', paragraphs: ['La tour Ercilla abrite le Musée du Pêcheur, idéal pour comprendre l’histoire maritime de Bermeo et la vie des marins. Vérifiez les horaires officiels avant la visite.'] },
      { heading: '3. L’église Santa Eufemia', text: '', paragraphs: ['Située près du port, l’église Santa Eufemia est l’un des bâtiments emblématiques de Bermeo et une étape naturelle entre le front de mer et la vieille ville.'] },
      { heading: '4. Vieille ville et porte de San Juan', text: '', paragraphs: ['Flâner dans la vieille ville est l’une des meilleures choses à faire à Bermeo. Places, commerces traditionnels et vues sur le port ponctuent la promenade. La porte de San Juan rappelle les anciennes murailles.'] },
      { heading: '5. Le parc Lamera et la plage d’Aritzatxu', text: '', paragraphs: ['Le parc Lamera est parfait pour une pause, notamment avec des enfants. La plage d’Aritzatxu offre un environnement plus naturel ; vérifiez les conditions de mer et de marée avant de vous baigner.'] },
      { heading: '6. L’île d’Izaro et les belvédères', text: '', paragraphs: ['L’île d’Izaro est un symbole de Bermeo et d’Urdaibai. Elle n’est pas librement accessible, mais se regarde depuis le littoral et parfois depuis la mer selon les activités disponibles.', 'Choisissez une journée dégagée pour profiter de la lumière sur l’horizon.'] },
      { heading: '7. Que visiter à Urdaibai depuis Bermeo', text: '', paragraphs: ['Depuis Bermeo, rejoignez Mundaka, les plages de Laga et Laida, Gernika et les paysages de la réserve. Choisissez quelques étapes plutôt que de tout faire en une journée.', 'Poursuivez avec notre guide de la [route d’Urdaibai](/guia/ruta-por-urdaibai/).'] },
      { heading: '8. San Juan de Gaztelugatxe', text: '', paragraphs: ['Gaztelugatxe est l’excursion la plus connue de la région. Le pont, les marches et les vues sont spectaculaires, mais l’accès doit être préparé. Consultez les informations officielles et notre guide pour [visiter Gaztelugatxe depuis Bermeo](/guia/visitar-gaztelugatxe-desde-bermeo/).'] },
      { heading: '9. Gastronomie marine', text: '', paragraphs: ['Goûtez le bonito, le thon, le marmitako, les conserves et les pintxos. Demandez le produit du jour et prenez le temps de manger près du port.'] },
      { heading: '10. Organiser une escapade à Bermeo', text: '', paragraphs: ['Un week-end permet de combiner Bermeo, nature et côte.'], items: ['Jour 1 : vieux port, musée, vieille ville, porte de San Juan et gastronomie.', 'Jour 2 : Gaztelugatxe, un belvédère côtier et Urdaibai ou Aritzatxu.', 'Avec plus de temps : Mundaka, Laga, Laida ou Gernika.'] },
      { heading: 'Où séjourner à Bermeo', text: '', paragraphs: ['Soul House Bermeo est une maison de vacances dans le port, avec trois chambres et six couchages. Consultez la [localisation](/ubicacion/) et la [disponibilité](/reservar/).'] },
      { heading: 'Questions fréquentes sur Bermeo', text: '', paragraphs: ['Une journée suffit pour le centre, mais un week-end permet de combiner Bermeo, Urdaibai et Gaztelugatxe. Le printemps et l’été offrent plus de lumière, mais Bermeo se découvre toute l’année.'] },
    ],
    relatedLinks: [{ label: 'Localisation de Soul House', href: '/ubicacion/' }, { label: 'Gaztelugatxe depuis Bermeo', href: '/guia/visitar-gaztelugatxe-desde-bermeo/' }, { label: 'Route d’Urdaibai', href: '/guia/ruta-por-urdaibai/' }, { label: 'Réserver', href: '/reservar/' }],
    mapUrl: 'https://www.google.com/maps?q=Bermeo%2C%20Bizkaia&output=embed',
  },
  de: {
    title: 'Was man in Bermeo sehen sollte: 10 wichtige Orte',
    intro: 'Bermeo ist eine der charaktervollsten Fischerstädte der baskischen Küste. Dieser Guide zeigt Sehenswürdigkeiten und Aktivitäten in Bermeo sowie Ausflüge nach Urdaibai und Gaztelugatxe ab Soul House.',
    sections: [
      { heading: 'Bermeo, das Tor zu Urdaibai', text: '', paragraphs: ['An der Küste von Bizkaia und nahe dem Biosphärenreservat Urdaibai bewahrt Bermeo seine maritime Identität. Hafen, Altstadt und die Nähe zu San Juan de Gaztelugatxe machen den Ort zu einer idealen Basis.', 'Das Zentrum ist kompakt: Planen Sie einen Tag für Bermeo und einen weiteren für Küste und Reserve.'] },
      { heading: '1. Der Alte Hafen von Bermeo', text: '', paragraphs: ['Der Alte Hafen ist das Herz der Stadt. Farbige Häuser, Boote, Terrassen und die Arbeitskais zeigen Bermeos Verbindung mit dem Kantabrischen Meer.', 'Am Abend lohnt sich ein Spaziergang mit Pintxo oder Kaffee am Wasser.'] },
      { heading: '2. Ercilla-Turm und Fischermuseum', text: '', paragraphs: ['Im Ercilla-Turm befindet sich das Fischermuseum. Es vermittelt die maritime Geschichte Bermeos und das Leben der Seeleute. Prüfen Sie die offiziellen Öffnungszeiten vor dem Besuch.'] },
      { heading: '3. Kirche Santa Eufemia', text: '', paragraphs: ['Die Kirche Santa Eufemia liegt am Hafen und gehört zu den bekanntesten Gebäuden Bermeos. Sie verbindet die Wege zwischen Ufer und Altstadt.'] },
      { heading: '4. Altstadt und San-Juan-Tor', text: '', paragraphs: ['Ein Spaziergang durch die Altstadt gehört zu den schönsten Aktivitäten in Bermeo. Plätze, traditionelle Geschäfte und Hafenblicke begleiten den Weg. Das San-Juan-Tor erinnert an die früheren Stadtmauern.'] },
      { heading: '5. Lamera-Park und Strand Aritzatxu', text: '', paragraphs: ['Der Lamera-Park ist eine angenehme Pause, besonders mit Kindern. Der Strand Aritzatxu liegt nahe dem Zentrum; prüfen Sie vor dem Baden Meer, Wellen und Gezeiten.'] },
      { heading: '6. Insel Izaro und Küstenblicke', text: '', paragraphs: ['Die Insel Izaro ist ein Wahrzeichen von Bermeo und Urdaibai. Sie ist nicht frei zugänglich, kann aber von der Küste und je nach Angebot vom Meer aus betrachtet werden.', 'Bei klarem Wetter ist das wechselnde Licht über der Insel besonders schön.'] },
      { heading: '7. Was man in Urdaibai ab Bermeo sehen kann', text: '', paragraphs: ['Von Bermeo erreichen Sie Mundaka, die Strände Laga und Laida, Gernika und weitere Landschaften des Reservats. Wählen Sie einige Stationen und planen Sie nicht zu viel an einem Tag.', 'Lesen Sie unseren Guide zur [Urdaibai-Route](/guia/ruta-por-urdaibai/).'] },
      { heading: '8. San Juan de Gaztelugatxe', text: '', paragraphs: ['Gaztelugatxe ist der bekannteste Ausflug der Region. Brücke, Stufen und Meerblick sind beeindruckend, der Zugang sollte aber geplant werden. Prüfen Sie offizielle Hinweise und unsere Anleitung für den [Besuch ab Bermeo](/guia/visitar-gaztelugatxe-desde-bermeo/).'] },
      { heading: '9. Baskische Küche am Meer', text: '', paragraphs: ['Probieren Sie Bonito, Thunfisch, Marmitako, Konserven und Pintxos. Fragen Sie nach dem Tagesfang und genießen Sie die Küche in Hafennähe.'] },
      { heading: '10. Einen Aufenthalt in Bermeo planen', text: '', paragraphs: ['Ein Wochenende verbindet Bermeo, Natur und Küste.'], items: ['Tag 1: Alter Hafen, Museum, Altstadt, San-Juan-Tor und lokale Küche.', 'Tag 2: Gaztelugatxe, ein Küstenblick und Urdaibai oder Aritzatxu.', 'Bei mehr Zeit: Mundaka, Laga, Laida oder Gernika ergänzen.'] },
      { heading: 'Wo man in Bermeo übernachten kann', text: '', paragraphs: ['Soul House Bermeo ist ein Ferienhaus im Hafen mit drei Schlafzimmern für bis zu sechs Personen. Sehen Sie die [Lage](/ubicacion/) und [prüfen Sie die Verfügbarkeit](/reservar/).'] },
      { heading: 'Häufige Fragen zu Bermeo', text: '', paragraphs: ['Ein Tag reicht für das Zentrum, ein Wochenende ist ideal für Bermeo, Urdaibai und Gaztelugatxe. Frühling und Sommer bieten mehr Licht, aber Bermeo ist das ganze Jahr über attraktiv.'] },
    ],
    relatedLinks: [{ label: 'Lage von Soul House', href: '/ubicacion/' }, { label: 'Gaztelugatxe ab Bermeo', href: '/guia/visitar-gaztelugatxe-desde-bermeo/' }, { label: 'Urdaibai-Route', href: '/guia/ruta-por-urdaibai/' }, { label: 'Buchen', href: '/reservar/' }],
    mapUrl: 'https://www.google.com/maps?q=Bermeo%2C%20Bizkaia&output=embed',
  },
};

const NEW_GUIDES: Record<Lang, Partial<Record<GuideKey, GuideContent>>> = {
  es: {},
  eu: {
    'que-ver-en-bermeo': {
      title: 'Bermeon zer ikusi: ezinbesteko lekuak',
      intro: 'Bermeo euskal kostaldeko itsas herri berezienetako bat da. Ezagutu arrantza-portua, alde zaharra eta Kantauri itsasoaren gaineko begiratokiak.',
      sections: [
        { heading: 'Arrantza-portua', text: 'Portua da Bermeo ezagutzen hasteko lekurik onena. Ibili itsasontzien, lonjen eta terrazetako giroaren artean, herriak itsasoarekin duen harremana ikusiz.' },
        { heading: 'Alde zaharra eta San Joan Atea', text: 'Alde zaharreko kaleetan barrena Santa Eufemia elizara eta San Joan Atetara iritsiko zara. Ibilaldiak ondarea eta bertako giroa uztartzen ditu.' },
        { heading: 'San Juan de Gaztelugatxe eta Izaro', text: 'Osatu bisita San Juan de Gaztelugatxera egindako txangoarekin eta Izaro uhartearen ikuspegiekin. Soul House oinarri erosoa da Bizkaiko kostaldea ezagutzeko.' },
      ],
    },
    'bermeo-en-dos-dias': {
      title: 'Bermeo bi egunetan: lasai gozatzeko gida',
      intro: 'Antolatu Bermeoko bi eguneko ihesaldia, ondarea, portua, euskal gastronomia eta Bizkaiko kostaldeko paisaiak uztartuz.',
      sections: [
        { heading: 'Lehen eguna: portua eta alde zaharra', text: 'Hasi arrantza-portuan eta jarraitu alde zaharrera, Santa Eufemia elizara eta San Joan Atera. Eman tartea pintxoak eta Kantauri itsasoko arraina dastatzeko.' },
        { heading: 'Bigarren eguna: kostaldea eta Gaztelugatxe', text: 'Erabili bigarren eguna San Juan de Gaztelugatxe eta kostaldeko begiratokiak ezagutzeko. Kontsultatu sarbide-baldintzak eta eraman oinetako erosoak.' },
        { heading: 'Non atseden hartu', text: 'Soul Housen ostatu hartuta, egunaren amaieran Bermeoko portura itzul zaitezke eta Mundaka, Urdaibai eta kostaldeko beste leku batzuk gertu izan.' },
      ],
    },
    'donde-alojarse-en-bermeo': {
      title: 'Non ostatu hartu Bermeon: aukerak eta eremuak',
      intro: 'Bermeon non ostatu hartu aukeratzeak portuaz gozatzeko eta Urdaibai zein San Juan de Gaztelugatxe eroso bisitatzeko aukera ematen du.',
      sections: [
        { heading: 'Portuaren ondoan lo egitea', text: 'Bermeoko portua oso praktikoa da ihesaldi baterako: jatetxeak, pasealekuak eta itsas giroa eskura dituzu, eskualdea ezagutzeko konexio onez gain.' },
        { heading: 'Familia eta taldeentzako etxebizitza', text: 'Soul House Bermeoko portuan dagoen turismo-etxebizitza da, hiru logela eta sei lagunentzako edukierarekin. Taldean bidaiatzen dutenentzat espazioa eta independentzia eskaintzen ditu.' },
        { heading: 'Bizkaia ezagutzeko oinarria', text: 'Bermeotik Mundaka, Laga eta Laida hondartzak, Urdaibai eta San Juan de Gaztelugatxe bisita ditzakezu. Naturak, gastronomiak eta itsas herriek bat egiten dute.' },
      ],
    },
    'playas-cerca-de-bermeo': {
      title: 'Bermeotik gertu dauden hondartzak: Laga, Laida eta gehiago',
      intro: 'Bermeotik gertu dauden hondartzek harea, itsaslabarrak eta Urdaibaiko paisaiak biltzen dituzte. Ezagutu zein hondartza bisitatu eta nola antolatu kostaldeko ihesaldia.',
      sections: [
        { heading: 'Laga hondartza', text: 'Laga Urdaibaiko Biosfera Erreserbako hondartza ikusgarrienetako bat da. Urrezko hareak eta Ogoño lurmuturraren inguruneak Kantauri itsasoaz gozatzeko ezinbesteko geldialdia egiten dute.' },
        { heading: 'Laida hondartza', text: 'Laidak paisaia irekiago eta familiarra eskaintzen du, Mundakako itsasadarraren eta erreserbaren ikuspegiekin. Bainua, paseoa eta uretako kirolak uztartzeko aukera ona da.' },
        { heading: 'Mundaka eta kostaldea Bermeotik', text: 'Mundaka, Ibarrangelu eta itsasadarraren beste herriak Bermeotik gertu daude. Soul Housen ostatu hartuta, hondartzetatik portura itzuli eta bertako gastronomiaz goza dezakezu.' },
      ],
    },
    'visitar-gaztelugatxe-desde-bermeo': {
      title: 'Gaztelugatxe Bermeotik bisitatzeko gida praktikoa',
      intro: 'San Juan de Gaztelugatxe Bermeotik bisitatzea euskal kostaldeko txangorik onenetakoa da. Hona hemen bisita antolatzeko eta inguruneaz gozatzeko gakoak.',
      sections: [
        { heading: 'Joan aurretik', text: 'Kontsultatu erreserbei, ordutegiei eta sarbideari buruzko informazio ofiziala. Ibilbideak aldapak eta eskailera ugari ditu; eraman oinetako erosoak eta ura.' },
        { heading: 'Nola iritsi Bermeotik', text: 'Bermeo oinarri praktikoa da Gaztelugatxera hurbildu eta gero portura itzultzeko. Garraioa aldez aurretik planifikatu eta jende gehieneko orduak saihestu.' },
        { heading: 'Ondoren zer egin', text: 'Itzultzean Bermeoko alde zaharrean pasea zaitezke, Kantauri itsasoko arraina jan edo Mundaka eta Urdaibaiko Biosfera Erreserbara hurbildu.' },
      ],
    },
    'donde-dormir-cerca-de-gaztelugatxe': {
      title: 'Non lo egin Gaztelugatzetik gertu',
      intro: 'Gaztelugatzetik gertu non lo egin aurkitzeak irla lasai bisitatzeko eta gainerako bidaian Bermeo, Urdaibai eta Bizkaiko kostaldea ezagutzeko aukera ematen du.',
      sections: [
        { heading: 'Bermeo, itsasoaren ondoko oinarria', text: 'Bermeo San Juan de Gaztelugatxetik gertu dago eta portua, jatetxeak, zerbitzuak eta bertako giroa eskaintzen ditu. Aukera erosoa da txangoa Kantauri itsasoaren ondoko egonaldiarekin uztartzeko.' },
        { heading: 'Sei lagunentzako ostatua', text: 'Soul House Bermeoko portuan dagoen turismo-etxebizitza da, hiru logela eta sei lagunentzako edukierarekin. Familientzat eta taldeentzat praktikoa da.' },
        { heading: 'Inguruko beste plan batzuk', text: 'Bermeotik bidaia Mundakarekin, Laga eta Laida hondartzekin, Izaro uhartearekin eta Urdaibaiko herriekin osa dezakezu.' },
      ],
    },
    'gaztelugatxe-y-bermeo-en-un-fin-de-semana': {
      title: 'Gaztelugatxe eta Bermeo asteburu batean',
      intro: 'Konbinatu San Juan de Gaztelugatxe eta Bermeo asteburu batean, euskal kostaldeko ondarea, gastronomia eta paisaiak ezagutzeko ibilbide batekin.',
      sections: [
        { heading: 'Larunbata: Bermeo eta portua', text: 'Hasi asteburua arrantza-portuan eta zeharkatu alde zaharra, Santa Eufemia eliza eta San Joan Atea. Eman denbora pintxoak edo bertako arraina jateko.' },
        { heading: 'Igandea: San Juan de Gaztelugatxe', text: 'Eskaini goiza Gaztelugatxeri eta kontsultatu sarbide-baldintzak aldez aurretik. Eraman oinetako egokiak eta utzi denbora paisaiaz gozatzeko.' },
        { heading: 'Bermeon oinarritutako ihesaldia', text: 'Soul Housen lo eginda kostaldean erraz mugi zaitezke eta egunaren amaieran portura itzuli. Denbora baduzu, gehitu Mundaka edo Urdaibaiko hondartzaren bat.' },
      ],
    },
    'que-ver-en-urdaibai': {
      title: 'Urdaibain zer ikusi: ezinbesteko lekuak',
      intro: 'Urdaibain padurak, hondartzak, basoak eta itsas herriak elkartzen dira Bizkaiko paisaiarik berezienetako batean. Ezagutu zer ikusi eta nola antolatu bisita Bermeotik.',
      sections: [
        { heading: 'Mundaka eta itsasadarra', text: 'Mundaka Urdaibaiko leku ezagunenetako bat da, portuagatik, itsasadarraren ikuspegiengatik eta itsas giroagatik. Ibili herrian eta behatu mareek paisaia nola aldatzen duten.' },
        { heading: 'Laga, Laida eta Ogoño lurmuturra', text: 'Laga eta Laida hondartzek kostaldea gozatzeko bi aukera eskaintzen dituzte: itsaso irekia Ogoñoren ondoan eta itsasadarraren urak. Ibilbidea osatzeko geldialdi ezin hobeak dira.' },
        { heading: 'Gernika eta erreserbaren bihotza', text: 'Hurbildu Gernikara haren historia ezagutzeko eta jarraitu erreserbako barnealdeko bide, padura eta herrietara. Bermeo kostaldeko oinarri ona da Urdaibai ezagutzeko.' },
      ],
    },
    'ruta-por-urdaibai': {
      title: 'Urdaibain barrena: kostaldeko eta erreserbako ibilbidea',
      intro: 'Urdaibaiko ibilbide honek portuak, hondartzak, begiratokiak eta nortasun handiko herriak uztartzen ditu. Egun batean egin dezakezu Bermeotik edo egonaldia luzatu.',
      sections: [
        { heading: 'Lehen geldialdia: Bermeo eta Mundaka', text: 'Hasi Bermeoko portuan eta jarraitu Mundakaraino itsasadarraren ikuspegiez gozatzeko. Ibilbideak itsas ondarea, gastronomia eta eskualdeko paisaia ezagunak biltzen ditu.' },
        { heading: 'Bigarren geldialdia: Laga eta Laida', text: 'Jarraitu Laga eta Laida hondartzetarantz. Kontsultatu itsasoaren egoera eta utzi denbora oinez ibiltzeko, atseden hartzeko edo uretako jarduerak egiteko.' },
        { heading: 'Ibilbide malgua', text: 'Gernika, Ogoño lurmuturra edo erreserbako bideak gehi ditzakezu. Soul Housen lo eginda ibilbidea eguraldira egokitu eta portura itzul zaitezke.' },
      ],
    },
    'donde-alojarse-en-urdaibai': {
      title: 'Non ostatu hartu Urdaibain: Bermeo oinarri',
      intro: 'Urdaibain non ostatu hartu bidaiaren araberakoa da, baina Bermeok itsasoaren ondoko oinarria eskaintzen du hondartzak, herriak, natura eta gastronomia ezagutzeko.',
      sections: [
        { heading: 'Bermeon ostatu hartzearen abantailak', text: 'Bermeok zerbitzuak, jatetxeak, portua eta Mundaka, Laga, Laida eta San Juan de Gaztelugatxera joateko konexio onak ditu. Aukera praktikoa da erreserba kostaldetik ezagutzeko.' },
        { heading: 'Soul House familientzat eta taldeentzat', text: 'Soul House Bermeoko portuan dagoen turismo-etxebizitza da, hiru logela eta sei lagunentzako edukierarekin. Espazioa eta independentzia eskaintzen ditu Urdaibain hainbat egun igarotzeko.' },
        { heading: 'Natura gertu', text: 'Bermeotik hondartzetara, paduretara, begiratokietara eta itsas herrietara txangoak antola ditzakezu. Amaitzean, itzuli portura atseden hartzeko eta euskal sukaldaritza dastatzeko.' },
      ],
    },
    'urdaibai-con-ninos': {
      title: 'Urdaibai haurrekin: familia planak',
      intro: 'Urdaibai haurrekin bisitatzeak hondartzak, ibilaldi errazak, itsas herriak eta natura uztartzeko aukera ematen du. Bermeo oinarri hartuta, egun malguak antola ditzakezu.',
      sections: [
        { heading: 'Jolasteko eta atseden hartzeko hondartzak', text: 'Laga eta Laida aukera onak dira itsasoaren ondoan ordu batzuk igarotzeko. Bainatu aurretik, begiratu beti hondartzaren egoera, marea eta eguneko baldintzak.' },
        { heading: 'Paseoak eta itsas herriak', text: 'Bermeoko eta Mundakako portuetako paseoak erraz konbina daitezke bazkari edo izozki batekin. Itsasoaren, itsasadarraren eta paduren arteko paisaia-aldaketek txikienen interesa pizten dute.' },
        { heading: 'Oinarri erosoa', text: 'Soul Housen ostatu hartuta hainbat logela izan eta ordutegiak malgutasunez antola ditzakezu. Bermeotik txango laburrak egin eta atseden hartzera itzul zaitezke.' },
      ],
    },
  },
  en: {
    'que-ver-en-bermeo': {
      title: 'What to see in Bermeo: essential places',
      intro: 'Bermeo is one of the Basque coast’s most distinctive fishing towns. Discover its harbour, old town and viewpoints over the Cantabrian Sea.',
      sections: [
        { heading: 'The fishing harbour', text: 'The harbour is the best place to start exploring Bermeo. Walk among boats, fish markets and terraces, and see how closely the town is tied to the sea.' },
        { heading: 'Old town and San Juan Gate', text: 'Follow the old streets to Santa Eufemia church and the San Juan Gate. The walk combines heritage, local atmosphere and some of Bermeo’s most photogenic corners.' },
        { heading: 'San Juan de Gaztelugatxe and Izaro', text: 'Complete your visit with a trip to San Juan de Gaztelugatxe and views of Izaro Island. Soul House is a comfortable base for exploring the Biscay coast.' },
      ],
    },
    'bermeo-en-dos-dias': {
      title: 'Bermeo in two days: a relaxed guide',
      intro: 'Plan a two-day break in Bermeo combining heritage, the harbour, Basque food and the landscapes of the Biscay coast.',
      sections: [
        { heading: 'Day one: harbour and old town', text: 'Start at the fishing harbour and continue to the old town, Santa Eufemia church and the San Juan Gate. Make time for pintxos and Cantabrian fish.' },
        { heading: 'Day two: coast and Gaztelugatxe', text: 'Spend the second day at San Juan de Gaztelugatxe and the coastal viewpoints. Check access conditions and wear comfortable shoes for the steep sections.' },
        { heading: 'Where to rest', text: 'Staying at Soul House lets you return to Bermeo harbour at the end of the day, with Mundaka, Urdaibai and other coastal highlights close by.' },
      ],
    },
    'donde-alojarse-en-bermeo': {
      title: 'Where to stay in Bermeo: areas and options',
      intro: 'Choosing where to stay in Bermeo makes it easy to enjoy the harbour, explore the Basque coast and visit Urdaibai and San Juan de Gaztelugatxe.',
      sections: [
        { heading: 'Stay by the harbour', text: 'Bermeo harbour is one of the most convenient areas for a break. Restaurants, walks and local maritime life are close by, with good connections around the region.' },
        { heading: 'A home for families and groups', text: 'Soul House is a holiday home in Bermeo harbour with three bedrooms and space for six guests. It offers the independence and room that groups need.' },
        { heading: 'A base for Biscay', text: 'From Bermeo you can visit Mundaka, Laga and Laida beaches, Urdaibai and San Juan de Gaztelugatxe. Nature, food and fishing villages are all within reach.' },
      ],
    },
    'playas-cerca-de-bermeo': {
      title: 'Beaches near Bermeo: Laga, Laida and more',
      intro: 'The beaches near Bermeo combine sand, cliffs and the landscapes of Urdaibai. Discover where to go and how to plan a coastal day from the harbour.',
      sections: [
        { heading: 'Laga Beach', text: 'Laga is one of the most spectacular beaches in the Urdaibai Biosphere Reserve. Its golden sand and the setting beneath Cape Ogoño make it an essential Cantabrian coast stop.' },
        { heading: 'Laida Beach', text: 'Laida offers a more open, family-friendly landscape overlooking Mundaka estuary and the reserve. It is ideal for combining swimming, walking and water sports when conditions allow.' },
        { heading: 'Mundaka and the coast from Bermeo', text: 'Mundaka, Ibarrangelu and other estuary villages are close to Bermeo. From Soul House you can return to the harbour after the beaches and enjoy local food.' },
      ],
    },
    'visitar-gaztelugatxe-desde-bermeo': {
      title: 'Visiting Gaztelugatxe from Bermeo: practical guide',
      intro: 'Visiting San Juan de Gaztelugatxe from Bermeo is one of the best trips on the Basque coast. Here are the essentials for planning the visit and enjoying the area.',
      sections: [
        { heading: 'Before you go', text: 'Check official information about reservations, opening times and access. The route has steep sections and many steps, so bring comfortable shoes, water and enough time.' },
        { heading: 'Getting there from Bermeo', text: 'Bermeo is a practical base for reaching Gaztelugatxe and returning to the harbour afterwards. Plan transport ahead and avoid the busiest times for a better experience.' },
        { heading: 'What to do afterwards', text: 'Back in Bermeo, walk through the old town, eat Cantabrian fish or continue to Mundaka and the Urdaibai Biosphere Reserve.' },
      ],
    },
    'donde-dormir-cerca-de-gaztelugatxe': {
      title: 'Where to stay near Gaztelugatxe',
      intro: 'Finding where to stay near Gaztelugatxe lets you visit the islet without rushing and spend the rest of your trip exploring Bermeo, Urdaibai and the Biscay coast.',
      sections: [
        { heading: 'Bermeo, a base by the sea', text: 'Bermeo is close to San Juan de Gaztelugatxe and offers a harbour, restaurants, services and local atmosphere. It is a comfortable base for a stay beside the Cantabrian Sea.' },
        { heading: 'Accommodation for six guests', text: 'Soul House is a holiday home in Bermeo harbour with three bedrooms and space for six guests. It works well for families and groups travelling together.' },
        { heading: 'More things to do nearby', text: 'From Bermeo, add Mundaka, Laga and Laida beaches, Izaro Island and the villages of Urdaibai to your trip.' },
      ],
    },
    'gaztelugatxe-y-bermeo-en-un-fin-de-semana': {
      title: 'Gaztelugatxe and Bermeo in a weekend',
      intro: 'Combine San Juan de Gaztelugatxe and Bermeo in a weekend with an easy route through heritage, Basque food and the landscapes of the coast.',
      sections: [
        { heading: 'Saturday: Bermeo and the harbour', text: 'Start the weekend at the fishing harbour and walk through the old town, Santa Eufemia church and the San Juan Gate. Leave time for pintxos or local fish.' },
        { heading: 'Sunday: San Juan de Gaztelugatxe', text: 'Spend the morning at Gaztelugatxe and check access conditions in advance. Wear suitable shoes for the trail and steps, and allow time for the views.' },
        { heading: 'A weekend based in Bermeo', text: 'Staying at Soul House makes it easy to explore the coast and return to the harbour at the end of the day. Add Mundaka or a beach in Urdaibai if time allows.' },
      ],
    },
    'que-ver-en-urdaibai': {
      title: 'What to see in Urdaibai: essential places',
      intro: 'Urdaibai brings together marshes, beaches, forests and fishing villages in one of Biscay’s most special landscapes. Discover what to see from Bermeo.',
      sections: [
        { heading: 'Mundaka and the estuary', text: 'Mundaka is known for its harbour, estuary views and maritime atmosphere. Walk through the village and watch the landscape change with the tides.' },
        { heading: 'Laga, Laida and Cape Ogoño', text: 'Laga and Laida offer two different ways to enjoy the coast: open sea beneath Cape Ogoño and the calmer estuary waters. They are ideal stops on the route.' },
        { heading: 'Gernika and the heart of the reserve', text: 'Visit Gernika for its history, then continue towards the paths, marshes and inland villages of the reserve. Bermeo is a good coastal base for Urdaibai.' },
      ],
    },
    'ruta-por-urdaibai': {
      title: 'A route through Urdaibai: coast and reserve itinerary',
      intro: 'This Urdaibai route combines harbours, beaches, viewpoints and distinctive villages. Do it in one day from Bermeo or take longer to enjoy it slowly.',
      sections: [
        { heading: 'First stop: Bermeo and Mundaka', text: 'Start at Bermeo harbour and continue to Mundaka for its estuary views. The route brings together maritime heritage, food and the area’s signature landscapes.' },
        { heading: 'Second stop: Laga and Laida', text: 'Continue to Laga and Laida beaches. Check sea conditions and leave time for walking, relaxing or water activities depending on the season.' },
        { heading: 'A flexible route', text: 'Add Gernika, Cape Ogoño or trails in the reserve. Staying at Soul House makes it easy to adapt the itinerary to the weather and return to the harbour.' },
      ],
    },
    'donde-alojarse-en-urdaibai': {
      title: 'Where to stay in Urdaibai: Bermeo as a base',
      intro: 'Where you stay in Urdaibai depends on your trip, but Bermeo offers a seaside base for beaches, villages, nature and food without changing accommodation.',
      sections: [
        { heading: 'Why stay in Bermeo', text: 'Bermeo combines services, restaurants, a harbour and good connections to Mundaka, Laga, Laida and San Juan de Gaztelugatxe. It is a practical coastal base for the reserve.' },
        { heading: 'Soul House for families and groups', text: 'Soul House is a holiday home in Bermeo harbour with three bedrooms and space for six guests. It offers room and independence for several days in Urdaibai.' },
        { heading: 'Nature within easy reach', text: 'From Bermeo, plan trips to beaches, marshes, viewpoints and fishing villages. Return to the harbour afterwards to rest and enjoy Basque cuisine.' },
      ],
    },
    'urdaibai-con-ninos': {
      title: 'Urdaibai with children: family ideas',
      intro: 'Urdaibai with children combines beaches, easy walks, fishing villages and nature. With Bermeo as a base, you can plan varied days at a family pace.',
      sections: [
        { heading: 'Beaches for play and rest', text: 'Laga and Laida are good options for a few hours by the sea. Always check the beach, tide and conditions before swimming.' },
        { heading: 'Walks and fishing villages', text: 'Walks around Bermeo and Mundaka harbours are easy to combine with lunch or ice cream. The changing scenery from sea to estuary and marshes keeps younger visitors interested.' },
        { heading: 'A comfortable base', text: 'Soul House offers several bedrooms and flexibility for family schedules. From Bermeo, take short trips and return to rest without long drives.' },
      ],
    },
  },
  fr: {
    'que-ver-en-bermeo': {
      title: 'Que voir à Bermeo : les lieux incontournables',
      intro: 'Bermeo est l’un des ports de pêche les plus authentiques de la côte basque. Découvrez son port, sa vieille ville et ses points de vue sur la mer Cantabrique.',
      sections: [
        { heading: 'Le port de pêche', text: 'Le port est le meilleur point de départ pour découvrir Bermeo. Promenez-vous entre les bateaux, les halles et les terrasses pour comprendre le lien entre la ville et la mer.' },
        { heading: 'Vieille ville et porte de San Juan', text: 'Traversez les rues anciennes jusqu’à l’église Santa Eufemia et la porte de San Juan. La promenade associe patrimoine, ambiance locale et beaux points de vue.' },
        { heading: 'San Juan de Gaztelugatxe et Izaro', text: 'Complétez la visite par une excursion à San Juan de Gaztelugatxe et les vues sur l’île d’Izaro. Soul House est une base confortable pour explorer la côte de Biscaye.' },
      ],
    },
    'bermeo-en-dos-dias': {
      title: 'Bermeo en deux jours : guide sans se presser',
      intro: 'Organisez deux jours à Bermeo entre patrimoine, port, gastronomie basque et paysages de la côte de Biscaye.',
      sections: [
        { heading: 'Premier jour : port et vieille ville', text: 'Commencez au port de pêche puis rejoignez la vieille ville, l’église Santa Eufemia et la porte de San Juan. Prenez le temps de goûter les pintxos et le poisson cantabrique.' },
        { heading: 'Deuxième jour : côte et Gaztelugatxe', text: 'Consacrez la deuxième journée à San Juan de Gaztelugatxe et aux belvédères côtiers. Vérifiez les conditions d’accès et prévoyez des chaussures confortables.' },
        { heading: 'Où se reposer', text: 'Séjourner à Soul House permet de revenir au port de Bermeo en fin de journée, avec Mundaka, Urdaibai et d’autres sites de la côte à proximité.' },
      ],
    },
    'donde-alojarse-en-bermeo': {
      title: 'Où séjourner à Bermeo : quartiers et options',
      intro: 'Choisir où séjourner à Bermeo permet de profiter du port, de parcourir la côte basque et de visiter Urdaibai et San Juan de Gaztelugatxe.',
      sections: [
        { heading: 'Dormir près du port', text: 'Le port de Bermeo est un quartier pratique pour une escapade. Restaurants, promenades et ambiance maritime sont accessibles à pied, avec de bonnes liaisons dans la région.' },
        { heading: 'Une maison pour familles et groupes', text: 'Soul House est une maison de vacances dans le port de Bermeo, avec trois chambres et six couchages. Elle offre l’espace et l’indépendance nécessaires aux groupes.' },
        { heading: 'Une base pour découvrir la Biscaye', text: 'Depuis Bermeo, rejoignez Mundaka, les plages de Laga et Laida, Urdaibai et San Juan de Gaztelugatxe. Nature, gastronomie et villages marins sont tout proches.' },
      ],
    },
    'playas-cerca-de-bermeo': {
      title: 'Les plages près de Bermeo : Laga, Laida et plus',
      intro: 'Les plages près de Bermeo associent sable, falaises et paysages d’Urdaibai. Découvrez lesquelles visiter et comment organiser une journée sur la côte.',
      sections: [
        { heading: 'La plage de Laga', text: 'Laga est l’une des plages les plus spectaculaires de la réserve de biosphère d’Urdaibai. Son sable doré et le cap Ogoño en font une étape incontournable.' },
        { heading: 'La plage de Laida', text: 'Laida offre un paysage plus ouvert et familial, avec vue sur l’estuaire de Mundaka et la réserve. C’est un bon choix pour combiner baignade, promenade et sports nautiques.' },
        { heading: 'Mundaka et la côte depuis Bermeo', text: 'Mundaka, Ibarrangelu et les villages de l’estuaire sont proches de Bermeo. Depuis Soul House, revenez au port après les plages et profitez de la cuisine locale.' },
      ],
    },
    'visitar-gaztelugatxe-desde-bermeo': {
      title: 'Visiter Gaztelugatxe depuis Bermeo : guide pratique',
      intro: 'Visiter San Juan de Gaztelugatxe depuis Bermeo est l’une des meilleures excursions de la côte basque. Voici les clés pour préparer la visite et profiter des environs.',
      sections: [
        { heading: 'Avant de partir', text: 'Consultez les informations officielles sur les réservations, les horaires et l’accès. Le parcours comporte des pentes et de nombreuses marches : prévoyez de bonnes chaussures et de l’eau.' },
        { heading: 'Venir depuis Bermeo', text: 'Bermeo est une base pratique pour rejoindre Gaztelugatxe puis revenir au port. Organisez le transport à l’avance et évitez les heures les plus fréquentées.' },
        { heading: 'Après la visite', text: 'De retour à Bermeo, promenez-vous dans la vieille ville, goûtez le poisson cantabrique ou continuez vers Mundaka et la réserve d’Urdaibai.' },
      ],
    },
    'donde-dormir-cerca-de-gaztelugatxe': {
      title: 'Où dormir près de Gaztelugatxe',
      intro: 'Trouver où dormir près de Gaztelugatxe permet de visiter l’îlot sans se presser et de découvrir ensuite Bermeo, Urdaibai et la côte de Biscaye.',
      sections: [
        { heading: 'Bermeo, une base au bord de la mer', text: 'Bermeo est proche de San Juan de Gaztelugatxe et offre port, restaurants, services et ambiance locale. C’est une base confortable au bord de la mer Cantabrique.' },
        { heading: 'Un logement pour six personnes', text: 'Soul House est une maison de vacances dans le port de Bermeo, avec trois chambres et six couchages. Elle convient aux familles et aux groupes.' },
        { heading: 'D’autres idées dans les environs', text: 'Depuis Bermeo, ajoutez Mundaka, les plages de Laga et Laida, l’île d’Izaro et les villages d’Urdaibai à votre séjour.' },
      ],
    },
    'gaztelugatxe-y-bermeo-en-un-fin-de-semana': {
      title: 'Gaztelugatxe et Bermeo en un week-end',
      intro: 'Combinez San Juan de Gaztelugatxe et Bermeo en un week-end entre patrimoine, gastronomie basque et paysages de la côte.',
      sections: [
        { heading: 'Samedi : Bermeo et son port', text: 'Commencez au port de pêche puis traversez la vieille ville, l’église Santa Eufemia et la porte de San Juan. Gardez du temps pour les pintxos ou le poisson local.' },
        { heading: 'Dimanche : San Juan de Gaztelugatxe', text: 'Consacrez la matinée à Gaztelugatxe et vérifiez les conditions d’accès. Portez des chaussures adaptées au sentier et aux marches, et profitez des points de vue.' },
        { heading: 'Un week-end basé à Bermeo', text: 'Séjourner à Soul House facilite les déplacements sur la côte et le retour au port en fin de journée. Ajoutez Mundaka ou une plage d’Urdaibai si le temps le permet.' },
      ],
    },
    'que-ver-en-urdaibai': {
      title: 'Que voir à Urdaibai : les lieux incontournables',
      intro: 'Urdaibai réunit marais, plages, forêts et villages marins dans l’un des paysages les plus remarquables de Biscaye. Découvrez les sites à voir depuis Bermeo.',
      sections: [
        { heading: 'Mundaka et l’estuaire', text: 'Mundaka est connue pour son port, ses vues sur l’estuaire et son ambiance maritime. Promenez-vous dans le village et observez les changements du paysage avec les marées.' },
        { heading: 'Laga, Laida et le cap Ogoño', text: 'Laga et Laida offrent deux façons de profiter de la côte : la mer ouverte au pied du cap Ogoño et les eaux plus calmes de l’estuaire. Ce sont des étapes idéales.' },
        { heading: 'Gernika et le cœur de la réserve', text: 'Visitez Gernika pour son histoire puis continuez vers les chemins, les marais et les villages de l’intérieur. Bermeo est une bonne base côtière pour explorer Urdaibai.' },
      ],
    },
    'ruta-por-urdaibai': {
      title: 'Itinéraire à Urdaibai : côte et réserve',
      intro: 'Cet itinéraire à Urdaibai associe ports, plages, belvédères et villages de caractère. Faites-le en une journée depuis Bermeo ou prenez plus de temps.',
      sections: [
        { heading: 'Première étape : Bermeo et Mundaka', text: 'Commencez au port de Bermeo et continuez vers Mundaka pour ses vues sur l’estuaire. Le trajet associe patrimoine maritime, gastronomie et paysages emblématiques.' },
        { heading: 'Deuxième étape : Laga et Laida', text: 'Poursuivez vers les plages de Laga et Laida. Vérifiez l’état de la mer et prévoyez du temps pour marcher, vous reposer ou pratiquer des activités nautiques.' },
        { heading: 'Un itinéraire flexible', text: 'Ajoutez Gernika, le cap Ogoño ou les sentiers de la réserve. Depuis Soul House, adaptez facilement le programme à la météo et revenez au port.' },
      ],
    },
    'donde-alojarse-en-urdaibai': {
      title: 'Où séjourner à Urdaibai : Bermeo comme base',
      intro: 'Le choix du lieu où séjourner à Urdaibai dépend du voyage, mais Bermeo offre une base au bord de la mer pour découvrir plages, villages, nature et gastronomie.',
      sections: [
        { heading: 'Les avantages de Bermeo', text: 'Bermeo réunit services, restaurants, port et bonnes liaisons vers Mundaka, Laga, Laida et San Juan de Gaztelugatxe. C’est une base côtière pratique.' },
        { heading: 'Soul House pour familles et groupes', text: 'Soul House est une maison de vacances dans le port de Bermeo, avec trois chambres et six couchages. Elle offre espace et indépendance pour plusieurs jours à Urdaibai.' },
        { heading: 'La nature à proximité', text: 'Depuis Bermeo, organisez des excursions vers les plages, les marais, les belvédères et les villages marins. Revenez ensuite au port pour vous reposer et goûter la cuisine basque.' },
      ],
    },
    'urdaibai-con-ninos': {
      title: 'Urdaibai avec des enfants : idées en famille',
      intro: 'Urdaibai avec des enfants permet de combiner plages, promenades faciles, villages marins et nature. Bermeo offre une base adaptée au rythme familial.',
      sections: [
        { heading: 'Des plages pour jouer et se reposer', text: 'Laga et Laida sont de bonnes options pour passer quelques heures au bord de la mer. Vérifiez toujours l’état de la plage, la marée et les conditions avant de vous baigner.' },
        { heading: 'Promenades et villages marins', text: 'Les promenades dans les ports de Bermeo et Mundaka se combinent facilement avec un repas ou une glace. Les paysages de mer, d’estuaire et de marais captent l’attention des enfants.' },
        { heading: 'Une base confortable', text: 'Soul House dispose de plusieurs chambres et permet d’organiser les horaires avec souplesse. Depuis Bermeo, faites de courtes excursions et revenez vous reposer.' },
      ],
    },
  },
  de: {
    'que-ver-en-bermeo': {
      title: 'Was man in Bermeo sehen sollte: die wichtigsten Orte',
      intro: 'Bermeo ist eine der charaktervollsten Fischerstädte der baskischen Küste. Entdecken Sie den Hafen, die Altstadt und die Aussichtspunkte über das Kantabrische Meer.',
      sections: [
        { heading: 'Der Fischerhafen', text: 'Der Hafen ist der beste Ausgangspunkt für Bermeo. Spazieren Sie zwischen Booten, Fischhallen und Terrassen und erleben Sie die enge Verbindung der Stadt mit dem Meer.' },
        { heading: 'Altstadt und San-Juan-Tor', text: 'Folgen Sie den alten Gassen zur Kirche Santa Eufemia und zum San-Juan-Tor. Der Rundgang verbindet Geschichte, lokales Leben und schöne Fotomotive.' },
        { heading: 'San Juan de Gaztelugatxe und Izaro', text: 'Ergänzen Sie den Besuch mit einem Ausflug nach San Juan de Gaztelugatxe und dem Blick auf die Insel Izaro. Soul House ist ein komfortabler Ausgangspunkt für die Küste von Bizkaia.' },
      ],
    },
    'bermeo-en-dos-dias': {
      title: 'Bermeo in zwei Tagen: entspannt erleben',
      intro: 'Planen Sie zwei Tage in Bermeo mit Geschichte, Hafen, baskischer Küche und den Landschaften der Küste von Bizkaia.',
      sections: [
        { heading: 'Tag eins: Hafen und Altstadt', text: 'Beginnen Sie am Fischerhafen und gehen Sie weiter zur Altstadt, zur Kirche Santa Eufemia und zum San-Juan-Tor. Nehmen Sie sich Zeit für Pintxos und Fisch aus dem Kantabrischen Meer.' },
        { heading: 'Tag zwei: Küste und Gaztelugatxe', text: 'Verbringen Sie den zweiten Tag bei San Juan de Gaztelugatxe und an den Küstenblicken. Prüfen Sie die Zugangsbedingungen und tragen Sie bequeme Schuhe.' },
        { heading: 'Wo man sich ausruht', text: 'Im Soul House kehren Sie am Ende des Tages bequem zum Hafen von Bermeo zurück. Mundaka, Urdaibai und weitere Küstenziele liegen in der Nähe.' },
      ],
    },
    'donde-alojarse-en-bermeo': {
      title: 'Wo man in Bermeo übernachten kann: Gegenden und Optionen',
      intro: 'Die Wahl der Unterkunft in Bermeo macht es leicht, den Hafen zu genießen, die baskische Küste zu erkunden und Urdaibai sowie Gaztelugatxe zu besuchen.',
      sections: [
        { heading: 'Am Hafen übernachten', text: 'Der Hafen von Bermeo ist für einen Kurzurlaub besonders praktisch. Restaurants, Spazierwege und maritimes Leben liegen nah, außerdem gibt es gute Verbindungen in die Region.' },
        { heading: 'Ein Zuhause für Familien und Gruppen', text: 'Soul House liegt im Hafen von Bermeo und bietet drei Schlafzimmer für bis zu sechs Personen. Gruppen finden hier Platz und Unabhängigkeit.' },
        { heading: 'Ein Ausgangspunkt für Bizkaia', text: 'Von Bermeo erreichen Sie Mundaka, die Strände Laga und Laida, Urdaibai und San Juan de Gaztelugatxe. Natur, Küche und Fischerdörfer liegen nah beieinander.' },
      ],
    },
    'playas-cerca-de-bermeo': {
      title: 'Strände nahe Bermeo: Laga, Laida und mehr',
      intro: 'Die Strände nahe Bermeo verbinden Sand, Klippen und die Landschaften von Urdaibai. Entdecken Sie die besten Ziele für einen Küstentag am Hafen.',
      sections: [
        { heading: 'Strand von Laga', text: 'Laga ist einer der spektakulärsten Strände des Biosphärenreservats Urdaibai. Goldener Sand und die Umgebung des Kaps Ogoño machen ihn zu einem besonderen Ziel.' },
        { heading: 'Strand von Laida', text: 'Laida bietet eine offene, familienfreundliche Landschaft mit Blick auf die Mündung von Mundaka und das Reservat. Je nach Bedingungen eignen sich Baden, Spaziergänge und Wassersport.' },
        { heading: 'Mundaka und die Küste ab Bermeo', text: 'Mundaka, Ibarrangelu und weitere Orte an der Mündung liegen nahe bei Bermeo. Vom Soul House kehren Sie nach dem Strandtag zum Hafen und zur lokalen Küche zurück.' },
      ],
    },
    'visitar-gaztelugatxe-desde-bermeo': {
      title: 'Gaztelugatxe von Bermeo aus besuchen: praktischer Guide',
      intro: 'San Juan de Gaztelugatxe von Bermeo aus zu besuchen, gehört zu den schönsten Ausflügen an der baskischen Küste. Hier finden Sie die wichtigsten Planungstipps.',
      sections: [
        { heading: 'Vor der Abfahrt', text: 'Informieren Sie sich offiziell über Reservierungen, Zeiten und Zugang. Der Weg hat Steigungen und viele Stufen; bequeme Schuhe und Wasser sind wichtig.' },
        { heading: 'Anreise ab Bermeo', text: 'Bermeo ist ein praktischer Ausgangspunkt für Gaztelugatxe und die Rückkehr zum Hafen. Planen Sie den Transport vorher und meiden Sie die stärksten Besucherzeiten.' },
        { heading: 'Danach', text: 'Zurück in Bermeo können Sie durch die Altstadt gehen, Fisch aus dem Kantabrischen Meer essen oder nach Mundaka und Urdaibai weiterfahren.' },
      ],
    },
    'donde-dormir-cerca-de-gaztelugatxe': {
      title: 'Wo man nahe Gaztelugatxe übernachten kann',
      intro: 'Wer nahe Gaztelugatxe übernachtet, kann den Felsen ohne Eile besuchen und anschließend Bermeo, Urdaibai und die Küste von Bizkaia erkunden.',
      sections: [
        { heading: 'Bermeo, eine Basis am Meer', text: 'Bermeo liegt nahe San Juan de Gaztelugatxe und bietet Hafen, Restaurants, Dienstleistungen und lokales Leben. Eine bequeme Unterkunft am Kantabrischen Meer.' },
        { heading: 'Unterkunft für sechs Personen', text: 'Soul House liegt im Hafen von Bermeo und hat drei Schlafzimmer für bis zu sechs Personen. Ideal für Familien und gemeinsam reisende Gruppen.' },
        { heading: 'Weitere Ziele in der Umgebung', text: 'Von Bermeo aus lassen sich Mundaka, die Strände Laga und Laida, die Insel Izaro und die Orte Urdaibais gut verbinden.' },
      ],
    },
    'gaztelugatxe-y-bermeo-en-un-fin-de-semana': {
      title: 'Gaztelugatxe und Bermeo an einem Wochenende',
      intro: 'Verbinden Sie San Juan de Gaztelugatxe und Bermeo an einem Wochenende mit Geschichte, baskischer Küche und den Landschaften der Küste.',
      sections: [
        { heading: 'Samstag: Bermeo und der Hafen', text: 'Beginnen Sie am Fischerhafen und gehen Sie durch die Altstadt, zur Kirche Santa Eufemia und zum San-Juan-Tor. Lassen Sie Zeit für Pintxos oder lokalen Fisch.' },
        { heading: 'Sonntag: San Juan de Gaztelugatxe', text: 'Planen Sie den Vormittag für Gaztelugatxe und prüfen Sie den Zugang vorher. Tragen Sie geeignete Schuhe für Weg und Stufen und genießen Sie die Aussicht.' },
        { heading: 'Ein Wochenende mit Basis in Bermeo', text: 'Vom Soul House aus erreichen Sie die Küste bequem und kehren abends zum Hafen zurück. Bei Zeit können Sie Mundaka oder einen Strand in Urdaibai ergänzen.' },
      ],
    },
    'que-ver-en-urdaibai': {
      title: 'Was man in Urdaibai sehen sollte: die wichtigsten Orte',
      intro: 'Urdaibai vereint Feuchtgebiete, Strände, Wälder und Fischerdörfer in einer der schönsten Landschaften von Bizkaia. Entdecken Sie die Ziele ab Bermeo.',
      sections: [
        { heading: 'Mundaka und die Flussmündung', text: 'Mundaka ist für Hafen, Ausblicke auf die Mündung und maritimes Leben bekannt. Spazieren Sie durch den Ort und beobachten Sie den Einfluss der Gezeiten.' },
        { heading: 'Laga, Laida und Kap Ogoño', text: 'Laga und Laida zeigen zwei Seiten der Küste: das offene Meer am Kap Ogoño und die ruhigeren Wasser der Mündung. Ideale Stationen für die Route.' },
        { heading: 'Gernika und das Herz des Reservats', text: 'Besuchen Sie Gernika wegen seiner Geschichte und fahren Sie weiter zu Wegen, Feuchtgebieten und Dörfern im Inneren. Bermeo ist eine gute Küstenbasis.' },
      ],
    },
    'ruta-por-urdaibai': {
      title: 'Route durch Urdaibai: Küste und Biosphärenreservat',
      intro: 'Diese Route durch Urdaibai verbindet Häfen, Strände, Aussichtspunkte und charaktervolle Orte. Sie ist als Tagestour ab Bermeo oder mit mehr Zeit möglich.',
      sections: [
        { heading: 'Erste Station: Bermeo und Mundaka', text: 'Starten Sie am Hafen von Bermeo und fahren Sie nach Mundaka zu den Ausblicken auf die Mündung. Die Strecke verbindet maritimes Erbe, Küche und typische Landschaften.' },
        { heading: 'Zweite Station: Laga und Laida', text: 'Weiter geht es zu den Stränden Laga und Laida. Prüfen Sie die Meeresbedingungen und planen Sie Zeit zum Spazieren, Erholen oder für Wassersport ein.' },
        { heading: 'Eine flexible Route', text: 'Ergänzen Sie Gernika, Kap Ogoño oder Wege im Reservat. Im Soul House können Sie die Route dem Wetter anpassen und zum Hafen zurückkehren.' },
      ],
    },
    'donde-alojarse-en-urdaibai': {
      title: 'Wo man in Urdaibai übernachten kann: Bermeo als Basis',
      intro: 'Die passende Unterkunft in Urdaibai hängt von der Reise ab. Bermeo bietet jedoch eine Basis am Meer für Strände, Dörfer, Natur und Gastronomie.',
      sections: [
        { heading: 'Vorteile einer Unterkunft in Bermeo', text: 'Bermeo verbindet Dienstleistungen, Restaurants, Hafen und gute Verbindungen nach Mundaka, Laga, Laida und San Juan de Gaztelugatxe. Eine praktische Küstenbasis für das Reservat.' },
        { heading: 'Soul House für Familien und Gruppen', text: 'Soul House liegt im Hafen von Bermeo und bietet drei Schlafzimmer für bis zu sechs Personen. Viel Platz und Unabhängigkeit für mehrere Tage in Urdaibai.' },
        { heading: 'Natur in der Nähe', text: 'Von Bermeo aus planen Sie Ausflüge zu Stränden, Feuchtgebieten, Aussichtspunkten und Fischerdörfern. Danach kehren Sie zum Hafen und zur baskischen Küche zurück.' },
      ],
    },
    'urdaibai-con-ninos': {
      title: 'Urdaibai mit Kindern: Ideen für Familien',
      intro: 'Urdaibai mit Kindern verbindet Strände, einfache Spaziergänge, Fischerdörfer und Natur. Bermeo ist eine gute Basis für abwechslungsreiche Familientage.',
      sections: [
        { heading: 'Strände zum Spielen und Erholen', text: 'Laga und Laida eignen sich für einige Stunden am Meer. Prüfen Sie vor dem Baden immer Strand, Gezeiten und die Bedingungen des Tages.' },
        { heading: 'Spaziergänge und Fischerdörfer', text: 'Die Hafenwege von Bermeo und Mundaka lassen sich leicht mit einem Essen oder Eis verbinden. Der Wechsel zwischen Meer, Mündung und Feuchtgebieten bleibt für Kinder spannend.' },
        { heading: 'Eine komfortable Basis', text: 'Soul House bietet mehrere Schlafzimmer und flexible Tagesabläufe. Von Bermeo aus unternehmen Sie kurze Ausflüge und kehren ohne lange Fahrten zur Erholung zurück.' },
      ],
    },
  },
};

export const GUIDES: Record<Lang, Partial<Record<GuideKey, GuideContent>>> = {
  es: {
    bermeo: {
      title: 'Qué ver en Bermeo en 2 días',
      intro: 'Bermeo combina historia, puerto pesquero, gastronomía vasca y paisajes del Cantábrico. Esta ruta permite conocer lo esencial con Soul House como base.',
      sections: [
        { heading: 'Día 1: casco histórico y puerto', text: 'Empieza el paseo en el puerto pesquero y continúa por el casco histórico hasta la iglesia de Santa Eufemia y la Puerta de San Juan, dos lugares que recuerdan la importancia de Bermeo en la historia marítima de Bizkaia.' },
        { heading: 'Día 1: sabor local', text: 'Reserva tiempo para probar la cocina bermeana. En restaurantes como Almiketxu o Akelarre Taberna puedes descubrir recetas tradicionales como el marmitako y pescados del Cantábrico, incluida la ventresca de atún a la parrilla.' },
        { heading: 'Día 2: Ízaro y la costa', text: 'Dedica el segundo día a contemplar la isla de Ízaro y los paisajes de la costa. La luz cambia constantemente sobre el mar y convierte los miradores cercanos en una de las mejores experiencias de la visita.' },
      ],
    },
    gaztelugatxe: {
      title: 'Cómo visitar San Juan de Gaztelugatxe desde Bermeo',
      intro: 'Alojarse en Bermeo permite visitar San Juan de Gaztelugatxe con calma y combinar la excursión con el puerto, la gastronomía y otros paisajes de la costa vasca.',
      sections: [
        { heading: 'Planifica la visita', text: 'Consulta siempre la información oficial y las condiciones de acceso antes de salir. La ruta incluye tramos con desnivel y escaleras, por lo que conviene llevar calzado cómodo, agua y tiempo suficiente.' },
        { heading: 'Una excursión desde Bermeo', text: 'Desde Soul House puedes organizar la salida hacia el islote y regresar a Bermeo para comer o pasear por el puerto. Es una base práctica para quienes buscan alojamiento cerca de San Juan de Gaztelugatxe.' },
        { heading: 'Qué hacer después', text: 'Completa el día con una visita al casco histórico, una mesa de cocina vasca o un paseo por la costa. La isla de Ízaro y la Reserva de la Biosfera de Urdaibai son otras paradas destacadas.' },
      ],
    },
    urdaibai: {
      title: 'Dónde alojarse para visitar Urdaibai',
      intro: 'La Reserva de la Biosfera de Urdaibai reúne marismas, bosques, playas y pueblos marineros. Bermeo es un punto de partida cómodo para explorarla y disfrutar de una estancia junto al puerto.',
      sections: [
        { heading: 'Una base junto al mar', text: 'Soul House ofrece una vivienda turística en el puerto de Bermeo, con tres habitaciones y capacidad para seis personas. Es una opción práctica para familias y grupos que quieren moverse por la comarca.' },
        { heading: 'Naturaleza y pueblos cercanos', text: 'Desde Bermeo puedes acercarte a Mundaka, Laga, Laida y otros rincones de Urdaibai. Combina playas, senderos, observación de aves y pueblos con una marcada tradición marinera.' },
        { heading: 'Gastronomía de Urdaibai', text: 'Después de recorrer la reserva, disfruta de la gastronomía vasca en Bermeo. El pescado del día, el marmitako y los pintxos son parte esencial de la experiencia.' },
      ],
    },
    'bermeo-en-dos-dias': {
      title: 'Bermeo en dos días: guía para disfrutarlo sin prisas',
      intro: 'Organiza una escapada a Bermeo en dos días con una ruta que combina patrimonio, puerto, gastronomía vasca y paisajes de la costa de Bizkaia.',
      sections: [
        { heading: 'Primer día: puerto y casco antiguo', text: 'Empieza en el puerto pesquero y continúa hacia el casco histórico, la iglesia de Santa Eufemia y la Puerta de San Juan. Haz una pausa para probar pintxos y pescado del Cantábrico.' },
        { heading: 'Segundo día: costa y Gaztelugatxe', text: 'Reserva el segundo día para San Juan de Gaztelugatxe y los miradores de la costa. Consulta siempre las condiciones de acceso y lleva calzado cómodo para los tramos con desnivel.' },
        { heading: 'Dónde descansar', text: 'Alojarte en Soul House te permite volver al puerto de Bermeo al final del día y tener cerca Mundaka, Urdaibai y otros lugares destacados de la costa vasca.' },
      ],
    },
    'donde-alojarse-en-bermeo': {
      title: 'Dónde alojarse en Bermeo: opciones y zonas',
      intro: 'Elegir dónde alojarse en Bermeo permite disfrutar del puerto, moverse por la costa vasca y visitar Urdaibai y San Juan de Gaztelugatxe con comodidad.',
      sections: [
        { heading: 'Dormir junto al puerto', text: 'El puerto de Bermeo es una de las zonas más prácticas para una escapada. Tendrás restaurantes, paseos y el ambiente marinero a pocos pasos, además de buenas conexiones para recorrer la comarca.' },
        { heading: 'Una vivienda para familias y grupos', text: 'Soul House es una vivienda turística en el puerto de Bermeo con tres habitaciones y capacidad para seis personas. Ofrece la independencia y el espacio que buscan quienes viajan en grupo.' },
        { heading: 'Una base para conocer Bizkaia', text: 'Desde Bermeo puedes visitar Mundaka, las playas de Laga y Laida, Urdaibai y San Juan de Gaztelugatxe. La ubicación permite combinar naturaleza, gastronomía y pueblos marineros.' },
      ],
    },
    'playas-cerca-de-bermeo': {
      title: 'Playas cerca de Bermeo: Laga, Laida y más',
      intro: 'Las playas cerca de Bermeo reúnen arena, acantilados y paisajes de Urdaibai. Descubre qué playas visitar y cómo organizar una escapada costera desde el puerto.',
      sections: [
        { heading: 'Playa de Laga', text: 'Laga es una de las playas más espectaculares de la Reserva de la Biosfera de Urdaibai. Su arena dorada y el entorno del cabo Ogoño la convierten en una parada imprescindible para disfrutar del Cantábrico.' },
        { heading: 'Playa de Laida', text: 'Laida ofrece un paisaje más abierto y familiar, con vistas a la ría de Mundaka y al entorno de la reserva. Es una buena opción para combinar baño, paseo y deportes acuáticos según las condiciones.' },
        { heading: 'Mundaka y la costa desde Bermeo', text: 'Mundaka, Ibarrangelu y otros pueblos de la ría quedan cerca de Bermeo. Alojarte en Soul House permite volver al puerto después de recorrer las playas y probar la gastronomía local.' },
      ],
    },
    'visitar-gaztelugatxe-desde-bermeo': {
      title: 'Visitar Gaztelugatxe desde Bermeo: guía práctica',
      intro: 'Visitar San Juan de Gaztelugatxe desde Bermeo es una de las mejores excursiones de la costa vasca. Aquí tienes las claves para organizar la visita y disfrutar también del entorno.',
      sections: [
        { heading: 'Antes de ir', text: 'Consulta la información oficial sobre reservas, horarios y acceso antes de salir. La ruta incluye pendientes y muchas escaleras, así que lleva calzado cómodo, agua y tiempo suficiente.' },
        { heading: 'Cómo llegar desde Bermeo', text: 'Bermeo es una base práctica para acercarte a Gaztelugatxe y regresar después al puerto. Planifica el transporte con antelación y evita las horas de mayor afluencia para disfrutar mejor del paisaje.' },
        { heading: 'Qué hacer después', text: 'A la vuelta puedes pasear por el casco histórico de Bermeo, comer pescado del Cantábrico o acercarte a Mundaka y a la Reserva de la Biosfera de Urdaibai.' },
      ],
    },
    'donde-dormir-cerca-de-gaztelugatxe': {
      title: 'Dónde dormir cerca de Gaztelugatxe',
      intro: 'Encontrar dónde dormir cerca de Gaztelugatxe te permite visitar el islote sin prisas y aprovechar el resto del viaje para conocer Bermeo, Urdaibai y la costa de Bizkaia.',
      sections: [
        { heading: 'Bermeo, una base junto al mar', text: 'Bermeo está cerca de San Juan de Gaztelugatxe y ofrece puerto, restaurantes, servicios y ambiente local. Es una opción cómoda para combinar la excursión con una estancia junto al Cantábrico.' },
        { heading: 'Alojamiento para seis personas', text: 'Soul House es una vivienda turística en el puerto de Bermeo con tres habitaciones y capacidad para seis personas. Resulta práctica para familias y grupos que quieren compartir alojamiento.' },
        { heading: 'Más planes en la zona', text: 'Desde Bermeo puedes completar el viaje con Mundaka, las playas de Laga y Laida, la isla de Ízaro y los pueblos de Urdaibai.' },
      ],
    },
    'gaztelugatxe-y-bermeo-en-un-fin-de-semana': {
      title: 'Gaztelugatxe y Bermeo en un fin de semana',
      intro: 'Combina San Juan de Gaztelugatxe y Bermeo en un fin de semana con una ruta sencilla por el patrimonio, la gastronomía y los paisajes de la costa vasca.',
      sections: [
        { heading: 'Sábado: Bermeo y su puerto', text: 'Comienza el fin de semana en el puerto pesquero y recorre el casco histórico, la iglesia de Santa Eufemia y la Puerta de San Juan. Reserva tiempo para comer pintxos o pescado local.' },
        { heading: 'Domingo: San Juan de Gaztelugatxe', text: 'Dedica la mañana a Gaztelugatxe y consulta previamente las condiciones de acceso. Lleva calzado adecuado para el sendero y las escaleras, y calcula tiempo para disfrutar de las vistas.' },
        { heading: 'Una escapada con base en Bermeo', text: 'Dormir en Soul House permite moverte con facilidad por la costa y volver al puerto al final del día. Si queda tiempo, añade Mundaka o alguna playa de Urdaibai.' },
      ],
    },
    'que-ver-en-urdaibai': {
      title: 'Qué ver en Urdaibai: lugares imprescindibles',
      intro: 'Urdaibai reúne marismas, playas, bosques y pueblos marineros en uno de los paisajes más especiales de Bizkaia. Descubre qué ver y cómo organizar la visita desde Bermeo.',
      sections: [
        { heading: 'Mundaka y la ría', text: 'Mundaka es uno de los lugares más conocidos de Urdaibai por su puerto, sus vistas a la ría y su ambiente marinero. Pasea por el pueblo y contempla cómo cambia el paisaje con las mareas.' },
        { heading: 'Laga, Laida y el cabo Ogoño', text: 'Las playas de Laga y Laida ofrecen dos formas diferentes de disfrutar de la costa: el mar abierto junto al cabo Ogoño y las aguas de la ría. Son paradas ideales para completar la ruta.' },
        { heading: 'Gernika y el corazón de la reserva', text: 'Acércate a Gernika para conocer su historia y continúa hacia los caminos, marismas y pueblos del interior de la reserva. Bermeo funciona como base costera para recorrer Urdaibai.' },
      ],
    },
    'ruta-por-urdaibai': {
      title: 'Ruta por Urdaibai: itinerario por la costa y la reserva',
      intro: 'Esta ruta por Urdaibai combina puertos, playas, miradores y pueblos con identidad propia. Puedes recorrerla en un día desde Bermeo o ampliar la estancia para disfrutarla con calma.',
      sections: [
        { heading: 'Primera parada: Bermeo y Mundaka', text: 'Empieza en el puerto de Bermeo y continúa hacia Mundaka para disfrutar de sus vistas a la ría. El trayecto reúne patrimonio marinero, gastronomía y algunos de los paisajes más reconocibles de la comarca.' },
        { heading: 'Segunda parada: Laga y Laida', text: 'Sigue la ruta hacia las playas de Laga y Laida. Consulta el estado del mar y reserva tiempo para caminar, descansar o practicar actividades acuáticas según la temporada.' },
        { heading: 'Una ruta flexible', text: 'Puedes añadir Gernika, el cabo Ogoño o los senderos de la reserva. Dormir en Soul House facilita adaptar el itinerario a la meteorología y volver al puerto al final del día.' },
      ],
    },
    'donde-alojarse-en-urdaibai': {
      title: 'Dónde alojarse en Urdaibai: Bermeo como base',
      intro: 'Decidir dónde alojarse en Urdaibai depende del tipo de viaje, pero Bermeo ofrece una base junto al mar para conocer playas, pueblos, naturaleza y gastronomía sin cambiar de alojamiento.',
      sections: [
        { heading: 'Ventajas de alojarse en Bermeo', text: 'Bermeo combina servicios, restaurantes, puerto y buenas conexiones con Mundaka, Laga, Laida y San Juan de Gaztelugatxe. Es una opción práctica para explorar la reserva desde la costa.' },
        { heading: 'Soul House para familias y grupos', text: 'Soul House es una vivienda turística en el puerto de Bermeo con tres habitaciones y capacidad para seis personas. Ofrece espacio e independencia para disfrutar de varios días en Urdaibai.' },
        { heading: 'Naturaleza a poca distancia', text: 'Desde Bermeo puedes organizar excursiones a playas, marismas, miradores y pueblos marineros. Al terminar, vuelve al puerto para descansar y probar la cocina vasca.' },
      ],
    },
    'urdaibai-con-ninos': {
      title: 'Urdaibai con niños: planes para toda la familia',
      intro: 'Urdaibai con niños permite combinar playas, paseos sencillos, pueblos marineros y naturaleza. Con Bermeo como base puedes diseñar días variados y adaptados al ritmo familiar.',
      sections: [
        { heading: 'Playas para jugar y descansar', text: 'Laga y Laida son buenas opciones para pasar unas horas junto al mar. Revisa siempre el estado de la playa, la marea y las condiciones del día antes de bañarte.' },
        { heading: 'Paseos y pueblos marineros', text: 'Los paseos por el puerto de Bermeo y Mundaka son fáciles de combinar con una comida o un helado. El cambio de paisaje entre el mar, la ría y las marismas mantiene el interés de los más pequeños.' },
        { heading: 'Una base cómoda', text: 'Alojarse en Soul House permite disponer de varias habitaciones y organizar los horarios con flexibilidad. Desde Bermeo puedes hacer excursiones cortas y volver a descansar sin largos desplazamientos.' },
      ],
    },
    'que-ver-en-bermeo': BERMEO_LONG.es,
  },
  eu: {
    bermeo: {
      title: 'Zer ikusi Bermeon 2 egunetan',
      intro: 'Bermeok historia, arrantza-portua, euskal gastronomia eta Kantauri itsasoko paisaiak elkartzen ditu. Ibilbide honek ezinbestekoak ezagutzeko aukera ematen du.',
      sections: [
        { heading: '1. eguna: alde zaharra eta portua', text: 'Hasi ibilaldia arrantza-portuan eta jarraitu alde zaharrerantz, Santa Eufemia elizara eta San Joan Atera iritsiz. Bi lekuek Bermeok Bizkaiko itsas historian izan duen garrantzia gogorarazten dute.' },
        { heading: '1. eguna: bertako zaporea', text: 'Eman denbora Bermeoko sukaldaritza probatzeko. Almiketxu edo Akelarre Taberna bezalako jatetxeetan marmitakoa eta Kantauri itsasoko arrainak dastatu ahal izango dituzu.' },
        { heading: '2. eguna: Izaro eta kostaldea', text: 'Bigarren eguna Izaro uhartea eta kostaldeko paisaiak ikusteko erabili. Itsasoaren gaineko argiak etengabe aldatzen dira eta begiratokiak bisitaren une berezi bihurtzen dituzte.' },
      ],
    },
    gaztelugatxe: {
      title: 'San Juan de Gaztelugatxe Bermeotik bisitatzeko gida',
      intro: 'Bermeon ostatu hartuta, San Juan de Gaztelugatxe lasai bisita dezakezu eta txangoa portuarekin eta euskal kostaldeko gastronomiarekin konbinatu.',
      sections: [
        { heading: 'Bisita planifikatu', text: 'Kontsultatu beti sarbideari buruzko informazio ofiziala irten aurretik. Ibilbideak aldapak eta eskailerak dituenez, oinetako erosoak, ura eta denbora nahikoa eramatea komeni da.' },
        { heading: 'Bermeotik txangoa', text: 'Soul House-tik irlarako irteera antolatu eta Bermeora itzul zaitezke portuan bazkaltzeko edo paseatzeko. Gaztelugatxetik gertu ostatu bila dabiltzanentzat oinarri praktikoa da.' },
        { heading: 'Ondoren zer egin', text: 'Osatu eguna alde zaharra, euskal gastronomiako mahai bat edo kostaldeko ibilaldi batekin. Izaro eta Urdaibaiko Biosfera Erreserba ere aukera bikainak dira.' },
      ],
    },
    urdaibai: {
      title: 'Non ostatu hartu Urdaibai bisitatzeko',
      intro: 'Urdaibaiko Biosfera Erreserbak padurak, basoak, hondartzak eta itsas herriak biltzen ditu. Bermeo abiapuntu erosoa da eskualdea ezagutzeko.',
      sections: [
        { heading: 'Itsasoaren ondoan dagoen oinarria', text: 'Soul House Bermeoko portuan dagoen turismo-etxebizitza da, hiru logela eta sei lagunentzako edukierarekin. Familientzat eta taldeentzat aukera praktikoa da.' },
        { heading: 'Natura eta inguruko herriak', text: 'Bermeotik Mundaka, Laga, Laida eta Urdaibaiko beste txokoetara hurbil zaitezke. Hondartzak, bideak, hegaztien behaketa eta itsas tradizioa uztartu.' },
        { heading: 'Urdaibaiko gastronomia', text: 'Erreserba ezagutu ondoren, gozatu euskal gastronomiaz Bermeon. Eguneko arraina, marmitakoa eta pintxoak esperientziaren parte dira.' },
      ],
    },
    ...NEW_GUIDES.eu,
    'que-ver-en-bermeo': BERMEO_LONG.eu,
  },
  en: {
    bermeo: {
      title: 'What to see in Bermeo in 2 days',
      intro: 'Bermeo brings together history, a fishing port, Basque gastronomy and Cantabrian landscapes. This route covers the essentials with Soul House as your base.',
      sections: [
        { heading: 'Day 1: old town and harbour', text: 'Start at the fishing harbour and walk through the old town to Santa Eufemia church and the San Juan Gate, reminders of Bermeo’s maritime history in Biscay.' },
        { heading: 'Day 1: local flavours', text: 'Make time for Bermeo’s cuisine. Restaurants such as Almiketxu and Akelarre Taberna offer traditional dishes including marmitako and Cantabrian fish.' },
        { heading: 'Day 2: Izaro and the coast', text: 'Spend the second day taking in Izaro Island and the coastal scenery. The changing light over the sea makes the nearby viewpoints especially memorable.' },
      ],
    },
    gaztelugatxe: {
      title: 'How to visit San Juan de Gaztelugatxe from Bermeo',
      intro: 'Staying in Bermeo makes it easy to visit San Juan de Gaztelugatxe at your own pace and combine the trip with the harbour and Basque food.',
      sections: [
        { heading: 'Plan your visit', text: 'Always check official access information before travelling. The route includes slopes and steps, so comfortable shoes, water and enough time are essential.' },
        { heading: 'A day trip from Bermeo', text: 'From Soul House you can visit the islet and return to Bermeo for lunch or a harbour walk. It is a convenient base when looking for accommodation near San Juan de Gaztelugatxe.' },
        { heading: 'What to do afterwards', text: 'Finish the day with the old town, Basque cuisine or a coastal walk. Izaro Island and the Urdaibai Biosphere Reserve are also nearby highlights.' },
      ],
    },
    urdaibai: {
      title: 'Where to stay when visiting Urdaibai',
      intro: 'The Urdaibai Biosphere Reserve combines marshes, forests, beaches and fishing villages. Bermeo is a convenient base for exploring the area.',
      sections: [
        { heading: 'A base by the sea', text: 'Soul House is a holiday home in Bermeo harbour with three bedrooms and space for six guests. It works well for families and groups exploring the region.' },
        { heading: 'Nature and nearby villages', text: 'From Bermeo, visit Mundaka, Laga, Laida and other corners of Urdaibai. Combine beaches, trails, birdwatching and maritime villages.' },
        { heading: 'The food of Urdaibai', text: 'After exploring the reserve, enjoy Basque gastronomy in Bermeo. Fresh fish, marmitako and pintxos are part of the experience.' },
      ],
    },
    ...NEW_GUIDES.en,
    'que-ver-en-bermeo': BERMEO_LONG.en,
  },
  fr: {
    bermeo: {
      title: 'Que voir à Bermeo en 2 jours',
      intro: 'Bermeo réunit histoire, port de pêche, gastronomie basque et paysages cantabriques. Cet itinéraire permet d’en découvrir l’essentiel.',
      sections: [
        { heading: 'Jour 1 : vieille ville et port', text: 'Commencez par le port de pêche puis traversez la vieille ville jusqu’à l’église Santa Eufemia et la porte de San Juan, témoins de l’histoire maritime de Bermeo.' },
        { heading: 'Jour 1 : saveurs locales', text: 'Prenez le temps de goûter la cuisine de Bermeo. Almiketxu et Akelarre Taberna proposent des recettes traditionnelles comme le marmitako et les poissons de la mer Cantabrique.' },
        { heading: 'Jour 2 : Izaro et la côte', text: 'Consacrez le deuxième jour à l’île d’Izaro et aux paysages côtiers. La lumière sur la mer rend les points de vue proches particulièrement beaux.' },
      ],
    },
    gaztelugatxe: {
      title: 'Visiter San Juan de Gaztelugatxe depuis Bermeo',
      intro: 'Séjourner à Bermeo permet de visiter San Juan de Gaztelugatxe tranquillement et de profiter ensuite du port et de la gastronomie basque.',
      sections: [
        { heading: 'Préparer la visite', text: 'Consultez les informations officielles concernant l’accès avant de partir. Le parcours comporte des pentes et des marches : prévoyez des chaussures confortables et de l’eau.' },
        { heading: 'Une excursion depuis Bermeo', text: 'Depuis Soul House, rejoignez l’îlot puis revenez à Bermeo pour déjeuner ou vous promener dans le port. C’est une base pratique pour loger près de Gaztelugatxe.' },
        { heading: 'Après la visite', text: 'Complétez la journée par la vieille ville, une table de cuisine basque ou une promenade côtière. Izaro et Urdaibai sont aussi des étapes remarquables.' },
      ],
    },
    urdaibai: {
      title: 'Où séjourner pour visiter Urdaibai',
      intro: 'La réserve de biosphère d’Urdaibai associe marais, forêts, plages et villages marins. Bermeo est un point de départ idéal pour l’explorer.',
      sections: [
        { heading: 'Une base près de la mer', text: 'Soul House est une maison de vacances située dans le port de Bermeo, avec trois chambres et six couchages. Elle convient aux familles et aux groupes.' },
        { heading: 'Nature et villages voisins', text: 'Depuis Bermeo, découvrez Mundaka, Laga, Laida et les autres paysages d’Urdaibai, entre plages, sentiers et villages de tradition maritime.' },
        { heading: 'La gastronomie d’Urdaibai', text: 'Après la réserve, goûtez la gastronomie basque à Bermeo : poisson du jour, marmitako et pintxos font partie du voyage.' },
      ],
    },
    ...NEW_GUIDES.fr,
    'que-ver-en-bermeo': BERMEO_LONG.fr,
  },
  de: {
    bermeo: {
      title: 'Was man in 2 Tagen in Bermeo sehen kann',
      intro: 'Bermeo verbindet Geschichte, Fischerhafen, baskische Küche und Landschaften am Kantabrischen Meer. Diese Route zeigt die wichtigsten Orte.',
      sections: [
        { heading: 'Tag 1: Altstadt und Hafen', text: 'Beginnen Sie am Fischerhafen und gehen Sie durch die Altstadt zur Kirche Santa Eufemia und zur Puerta de San Juan. Beide Orte erzählen von Bermeos maritimer Geschichte.' },
        { heading: 'Tag 1: lokale Küche', text: 'Nehmen Sie sich Zeit für die Küche von Bermeo. Bei Almiketxu oder Akelarre Taberna können Sie Marmitako und frischen Fisch aus dem Kantabrischen Meer probieren.' },
        { heading: 'Tag 2: Izaro und die Küste', text: 'Am zweiten Tag empfehlen sich die Insel Izaro und die Küstenlandschaften. Das wechselnde Licht über dem Meer macht die Aussichtspunkte besonders eindrucksvoll.' },
      ],
    },
    gaztelugatxe: {
      title: 'San Juan de Gaztelugatxe von Bermeo aus besuchen',
      intro: 'Bermeo ist ein idealer Ausgangspunkt für einen entspannten Besuch von San Juan de Gaztelugatxe und für baskische Gastronomie am Hafen.',
      sections: [
        { heading: 'Den Besuch planen', text: 'Informieren Sie sich vor der Fahrt über die offiziellen Zugangsbedingungen. Der Weg umfasst Steigungen und Treppen; bequeme Schuhe und Wasser sind wichtig.' },
        { heading: 'Ein Ausflug ab Bermeo', text: 'Vom Soul House fahren Sie zum Felsen und kehren anschließend zum Essen oder für einen Spaziergang nach Bermeo zurück. So wohnen Sie nahe bei Gaztelugatxe.' },
        { heading: 'Danach', text: 'Verbinden Sie den Ausflug mit der Altstadt, baskischer Küche oder einem Spaziergang an der Küste. Auch Izaro und Urdaibai sind sehenswerte Ziele.' },
      ],
    },
    urdaibai: {
      title: 'Wo man für einen Besuch in Urdaibai übernachten kann',
      intro: 'Das Biosphärenreservat Urdaibai vereint Feuchtgebiete, Wälder, Strände und Fischerdörfer. Bermeo ist ein bequemer Ausgangspunkt für die Region.',
      sections: [
        { heading: 'Eine Unterkunft am Meer', text: 'Soul House liegt im Hafen von Bermeo und bietet drei Schlafzimmer für bis zu sechs Personen. Ideal für Familien und Gruppen, die die Umgebung erkunden möchten.' },
        { heading: 'Natur und nahe Orte', text: 'Von Bermeo aus erreichen Sie Mundaka, Laga, Laida und weitere Landschaften Urdaibais. Entdecken Sie Strände, Wege, Vögel und maritime Dörfer.' },
        { heading: 'Gastronomie in Urdaibai', text: 'Nach der Natur entdecken Sie die baskische Küche in Bermeo. Frischer Fisch, Marmitako und Pintxos gehören zu einem gelungenen Aufenthalt.' },
      ],
    },
    ...NEW_GUIDES.de,
    'que-ver-en-bermeo': BERMEO_LONG.de,
  },
};
