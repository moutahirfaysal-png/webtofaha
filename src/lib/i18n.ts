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
    
    'hero.tagline': 'YOUR AUTHENTIC MOROCCAN ESCAPE IN THE HEART OF MARRAKECH',
    'hero.title': 'Riad Tofaha',
    'hero.subtitle': 'Discover the charm of Marrakech at Riad Tofaha, where traditional Moroccan elegance meets modern comfort. Experience unforgettable moments in a peaceful and authentic setting.',
    'hero.exploreRooms': 'Explore Rooms',
    'hero.bookStay': 'Book Stay',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.rooms': 'Nos Chambres',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',

    'hero.tagline': 'VOTRE ÉCHAPPÉE MAROCAINE AUTHENTIQUE AU CŒUR DE MARRAKECH',
    'hero.title': 'Riad Tofaha',
    'hero.subtitle': 'Découvrez le charme de Marrakech au Riad Tofaha, où l’élégance marocaine traditionnelle rencontre le confort moderne. Vivez des moments inoubliables dans un cadre paisible et authentique.',
    'hero.exploreRooms': 'Découvrir les Chambres',
    'hero.bookStay': 'Réserver le Séjour',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.rooms': 'غرفنا',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.bookNow': 'احجز الآن',

    'hero.tagline': 'ملاذك المغربي الأصيل في قلب مراكش',
    'hero.title': 'رياض تفاحة',
    'hero.subtitle': 'اكتشف سحر مراكش في رياض تفاحة، حيث تلتقي الأناقة المغربية التقليدية بالراحة العصريّة. عش لحظات لا تُنسى في أجواء هادئة وأصيلة.',
    'hero.exploreRooms': 'استكشف الغرف',
    'hero.bookStay': 'احجز إقامتك',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar',

    'hero.tagline': 'SU ESCAPADA AUTÉNTICA MARROQUÍ EN EL CORAZÓN DE MARRAKECH',
    'hero.title': 'Riad Tofaha',
    'hero.subtitle': 'Descubra el encanto de Marrakech en Riad Tofaha, donde la elegancia tradicional se une al confort moderno. Viva momentos inolvidables en un entorno tranquilo y auténtico.',
    'hero.exploreRooms': 'Explorar Habitaciones',
    'hero.bookStay': 'Reservar Estancia',
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
