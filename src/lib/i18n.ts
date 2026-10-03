export type Language = 'en' | 'fr' | 'ar' | 'es';

export const DEFAULT_LANGUAGE: Language = 'en';

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.rooms': 'Our Rooms',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    'hero.title': 'Your Authentic Moroccan Escape in the Heart of Marrakech',
    'hero.subtitle': 'Discover the charm of Marrakech at Riad Tofaha, where traditional Moroccan elegance meets modern comfort.',
    'hero.exploreRooms': 'Explore Rooms',
    'hero.bookStay': 'Book Your Stay',

    'rooms.subtitle': 'ACCOMMODATION',
    'rooms.title': 'Our Rooms & Suites',
    'rooms.desc': 'Experience authentic Moroccan elegance, hand-crafted detail, and tranquility in the heart of Marrakech Medina.',
    'rooms.from': 'From',
    'rooms.night': 'night',
    'rooms.guests': 'Guests',
    'rooms.freeWifi': 'Free WiFi',
    'rooms.ac': 'Air Conditioning',
    'rooms.bathroom': 'En-suite Bathroom',
    'rooms.viewDetails': 'View Details',
    'rooms.bookRoom': 'Book Room',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.rooms': 'Nos Chambres',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',

    'hero.title': 'Votre Échappée Marocaine Authentique au Cœur de Marrakech',
    'hero.subtitle': 'Découvrez le charme de Marrakech au Riad Tofaha, où l’élégance marocaine traditionnelle rencontre le confort moderne.',
    'hero.exploreRooms': 'Découvrir les Chambres',
    'hero.bookStay': 'Réserver Votre Séjour',

    'rooms.subtitle': 'HÉBERGEMENT',
    'rooms.title': 'Nos Chambres & Suites',
    'rooms.desc': 'Découvrez l’élégance marocaine authentique, le soin du détail artisanal et la tranquillité au cœur de la médina de Marrakech.',
    'rooms.from': 'À partir de',
    'rooms.night': 'nuit',
    'rooms.guests': 'Personnes',
    'rooms.freeWifi': 'WiFi Gratuit',
    'rooms.ac': 'Climatisation',
    'rooms.bathroom': 'Salle de Bain Privative',
    'rooms.viewDetails': 'Voir Détails',
    'rooms.bookRoom': 'Réserver',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.rooms': 'غرفنا',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.bookNow': 'احجز الآن',

    'hero.title': 'ملاذك المغربي الأصيل في قلب مراكش',
    'hero.subtitle': 'اكتشف سحر مراكش في رياض تفاحة، حيث تلتقي الأناقة المغربية التقليدية بالراحة العصريّة.',
    'hero.exploreRooms': 'استكشف الغرف',
    'hero.bookStay': 'احجز إقامتك',

    'rooms.subtitle': 'الإقامة والضيافة',
    'rooms.title': 'غرفنا وأجنحتنا',
    'rooms.desc': 'استمتع بالأصالة والأناقة المغربية، والهدوء والسكينة في قلب مدينة مراكش العتيقة.',
    'rooms.from': 'ابتداءً من',
    'rooms.night': 'ليلة',
    'rooms.guests': 'ضيوف',
    'rooms.freeWifi': 'واي فاي مجاني',
    'rooms.ac': 'تكييف هواء',
    'rooms.bathroom': 'حمام خاص',
    'rooms.viewDetails': 'عرض التفاصيل',
    'rooms.bookRoom': 'احجز الغرفة',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar',

    'hero.title': 'Su Escapada Auténtica Marroquí en el Corazón de Marrakech',
    'hero.subtitle': 'Descubra el encanto de Marrakech en Riad Tofaha, donde la elegancia tradicional se une al confort moderno.',
    'hero.exploreRooms': 'Explorar Habitaciones',
    'hero.bookStay': 'Reservar Estancia',

    'rooms.subtitle': 'ALOJAMIENTO',
    'rooms.title': 'Nuestras Habitaciones y Suites',
    'rooms.desc': 'Experimente la auténtica elegancia marroquí, los detalles artesanales y la tranquilidad en el corazón de la Medina.',
    'rooms.from': 'Desde',
    'rooms.night': 'noche',
    'rooms.guests': 'Huéspedes',
    'rooms.freeWifi': 'WiFi Gratis',
    'rooms.ac': 'Aire Acondicionado',
    'rooms.bathroom': 'Baño Privado',
    'rooms.viewDetails': 'Ver Detalles',
    'rooms.bookRoom': 'Reservar',
  },
};

export function translate(key: string, lang: Language = 'en'): string {
  const lowerKey = key.toLowerCase();
  
  if (translations[lang] && translations[lang][lowerKey]) {
    return translations[lang][lowerKey];
  }
  
  if (translations['en'] && translations['en'][lowerKey]) {
    return translations['en'][lowerKey];
  }

  const cleanFallback = key.split('.').pop() || key;
  return cleanFallback.replace(/([A-Z])/g, ' $1').trim();
}

export function getLocalizedText(obj: any, lang: Language): string {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj['en'] || Object.values(obj)[0] || '';
}
