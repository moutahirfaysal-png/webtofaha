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
    'nav.booknow': 'Book Now',

    // Gallery Page (EN)
    'gallery.page_title': 'Photo Gallery | Riad Tofaha Marrakech',
    'gallery.hero_badge': 'PHOTO GALLERY',
    'gallery.hero_title': 'Immerse Yourself in Riad Tofaha',
    'gallery.hero_subtitle': 'Explore our refined spaces, from peaceful suites and traditional salons to the sunny rooftop terrace.',
    'gallery.cat_all': 'All',
    'gallery.cat_rooms': 'Rooms & Suites',
    'gallery.cat_terrace': 'Rooftop Terrace',
    'gallery.cat_bathroom': 'Bathrooms',
    'gallery.cat_exterior': 'Courtyard & Exterior',
    'gallery.cat_salon': 'Moroccan Salon',
    'gallery.cat_kitchen': 'Shared Kitchen',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.rooms': 'Nos Chambres',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.booknow': 'Réserver',

    // Gallery Page (FR)
    'gallery.page_title': 'Galerie Photos | Riad Tofaha Marrakech',
    'gallery.hero_badge': 'GALERIE PHOTOS',
    'gallery.hero_title': 'Plongez dans l’Univers du Riad Tofaha',
    'gallery.hero_subtitle': 'Découvrez nos espaces raffinés, de nos chambres élégantes au salon traditionnel et la terrasse ensoleillée.',
    'gallery.cat_all': 'Tout',
    'gallery.cat_rooms': 'Chambres & Suites',
    'gallery.cat_terrace': 'Terrasse',
    'gallery.cat_bathroom': 'Salles de Bain',
    'gallery.cat_exterior': 'Cour & Extérieur',
    'gallery.cat_salon': 'Salon Marocain',
    'gallery.cat_kitchen': 'Cuisine Équipée',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.rooms': 'غرفنا',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.booknow': 'احجز الآن',

    // Gallery Page (AR)
    'gallery.page_title': 'معرض الصور | رياض تفاحة مراكش',
    'gallery.hero_badge': 'معرض الصور',
    'gallery.hero_title': 'اكتشف تفاصيل وجمال رياض تفاحة',
    'gallery.hero_subtitle': 'استكشف أركان الرياض الفاخرة، من الغرف الأنيقة والسالون المغربي إلى التراس المشرق على السطح.',
    'gallery.cat_all': 'الكل',
    'gallery.cat_rooms': 'الغرف والأجنحة',
    'gallery.cat_terrace': 'التراس',
    'gallery.cat_bathroom': 'الحمامات',
    'gallery.cat_exterior': 'الفناء والخارج',
    'gallery.cat_salon': 'الصالون المغربي',
    'gallery.cat_kitchen': 'المطبخ المجهز',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.booknow': 'Reservar',

    // Gallery Page (ES)
    'gallery.page_title': 'Galería de Fotos | Riad Tofaha Marrakech',
    'gallery.hero_badge': 'GALERÍA DE FOTOS',
    'gallery.hero_title': 'Sumérjase en el Universo de Riad Tofaha',
    'gallery.hero_subtitle': 'Explore nuestros elegantes espacios, desde acogedoras habitaciones hasta nuestra terraza panorámica.',
    'gallery.cat_all': 'Todos',
    'gallery.cat_rooms': 'Habitaciones',
    'gallery.cat_terrace': 'Terraza',
    'gallery.cat_bathroom': 'Baños',
    'gallery.cat_exterior': 'Patio y Exterior',
    'gallery.cat_salon': 'Salón Marroquí',
    'gallery.cat_kitchen': 'Cocina Compartida',
  },
};

export function translate(key: string, lang: Language = 'en'): string {
  const normalizedKey = key.toLowerCase().trim();
  
  if (translations[lang] && translations[lang][normalizedKey]) {
    return translations[lang][normalizedKey];
  }
  
  if (translations['en'] && translations['en'][normalizedKey]) {
    return translations['en'][normalizedKey];
  }

  const cleanFallback = key.split('.').pop() || key;
  return cleanFallback.replace(/([A-Z])/g, ' $1').trim();
}

export function getLocalizedText(obj: any, lang: Language): string {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj['en'] || Object.values(obj)[0] || '';
}
