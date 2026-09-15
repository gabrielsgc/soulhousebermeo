import { Lang } from '../../services/i18n.service';

export type GuideKey = 'bermeo' | 'gaztelugatxe' | 'urdaibai';

export interface GuideContent {
  title: string;
  intro: string;
  sections: { heading: string; text: string }[];
}

export const GUIDES: Record<Lang, Record<GuideKey, GuideContent>> = {
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
  },
};
