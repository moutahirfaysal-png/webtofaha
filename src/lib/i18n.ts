export type Language = 'en' | 'fr' | 'ar' | 'es';

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
  },
};

// دالة الترجمة الذكية مع معالجة الأحرف الخاطئة والبدائل
export function translate(key: string, lang: Language = 'en'): string {
  const lowerKey = key.toLowerCase();
  
  if (translations[lang] && translations[lang][lowerKey]) {
    return translations[lang][lowerKey];
  }
  
  if (translations['en'] && translations['en'][lowerKey]) {
    return translations['en'][lowerKey];
  }

  // في حال عدم وجود المفتاح، يتم تنسيقه بشكل جميل بدلاً من إظهار الكود الخام
  const cleanFallback = key.split('.').pop() || key;
  return cleanFallback.replace(/([A-Z])/g, ' $1').trim();
}

export function getLocalizedText(obj: any, lang: Language): string {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj['en'] || Object.values(obj)[0] || '';
}
