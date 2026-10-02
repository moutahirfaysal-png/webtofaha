export type Language = 'en' | 'fr' | 'ar' | 'es';

export const DEFAULT_LANGUAGE: Language = 'en';

export const isRTL = (lang: Language): boolean => lang === 'ar';

export const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: { home: 'Home', about: 'About', rooms: 'Our Rooms', gallery: 'Gallery', experiences: 'Experiences', blog: 'Blog', contact: 'Contact', bookNow: 'Book Now' },
    rooms: {
      title: 'Our Rooms & Suites',
      viewDetails: 'VIEW ROOM DETAILS',
      bookThisRoom: 'BOOK THIS ROOM',
      from: 'from',
      perNight: 'per night',
    },
    details: {
      back: 'Back to Rooms',
      pricePerNight: 'Price per night',
      bestPrice: 'Best price guaranteed',
      descriptionTitle: 'Room Description',
      amenitiesTitle: 'Room Amenities & Services',
      bathroom: 'Private En-suite Bathroom',
      towels: 'Towels & Toiletries',
      ac: 'Air Conditioning & Heating',
      hairdryer: 'Hairdryer',
      wifi: 'Free High-Speed Wi-Fi',
      essentials: 'Essential Amenities (Safe, Linens)',
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', rooms: 'Nos Chambres', gallery: 'Galerie', experiences: 'Expériences', blog: 'Blog', contact: 'Contact', bookNow: 'Réserver' },
    rooms: {
      title: 'Nos Chambres & Suites',
      viewDetails: 'DÉTAILS DE LA CHAMBRE',
      bookThisRoom: 'RÉSERVER CETTE CHAMBRE',
      from: 'à partir de',
      perNight: 'par nuit',
    },
    details: {
      back: 'Retour aux chambres',
      pricePerNight: 'Prix par nuit',
      bestPrice: 'Meilleur prix garanti',
      descriptionTitle: 'Description de la chambre',
      amenitiesTitle: 'Équipements et Services',
      bathroom: 'Salle de bain privée attenante',
      towels: 'Serviettes et articles de toilette',
      ac: 'Climatisation et Chauffage',
      hairdryer: 'Sèche-cheveux',
      wifi: 'Wi-Fi haut débit gratuit',
      essentials: 'Équipements essentiels (Coffre, Linge)',
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', rooms: 'غرفنا', gallery: 'المعرض', experiences: 'التجارب', blog: 'المدونة', contact: 'اتصل بنا', bookNow: 'احجز الآن' },
    rooms: {
      title: 'غرفنا وأجنحتنا',
      viewDetails: 'عرض تفاصيل الغرفة',
      bookThisRoom: 'احجز هذه الغرفة',
      from: 'ابتداءً من',
      perNight: 'في الليلة',
    },
    details: {
      back: 'العودة للغرف',
      pricePerNight: 'السعر لليلة الواحدة',
      bestPrice: 'أفضل سعر مضمون',
      descriptionTitle: 'وصف الغرفة',
      amenitiesTitle: 'معدات وخدمات الغرفة',
      bathroom: 'دوش وطواليط داخلي خاص',
      towels: 'فوطات ومعدات الاستحمام',
      ac: 'كليماتيزور (تكييف وتدفئة)',
      hairdryer: 'مجفف شعر (Sèche-cheveux)',
      wifi: 'إنترنت واي فاي سريع ومجاني',
      essentials: 'المعدات الأساسية (خزنة، أغطية)',
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre Nosotros', rooms: 'Nuestras Habitaciones', gallery: 'Galería', experiences: 'Experiencias', blog: 'Blog', contact: 'Contacto', bookNow: 'Reservar' },
    rooms: {
      title: 'Nuestras Habitaciones y Suites',
      viewDetails: 'VER DETALLES DE LA HABITACIÓN',
      bookThisRoom: 'RESERVAR ESTA HABITACIÓN',
      from: 'desde',
      perNight: 'por noche',
    },
    details: {
      back: 'Volver a las habitaciones',
      pricePerNight: 'Precio por noche',
      bestPrice: 'Mejor precio garantizado',
      descriptionTitle: 'Descripción de la habitación',
      amenitiesTitle: 'Servicios y Equipamiento',
      bathroom: 'Baño privado en suite',
      towels: 'Toallas y artículos de aseo',
      ac: 'Aire acondicionado y calefacción',
      hairdryer: 'Secador de pelo',
      wifi: 'Wi-Fi de alta velocidad gratis',
      essentials: 'Servicios esenciales (Caja fuerte, Ropa de cama)',
    }
  }
};

// دالة الترجمة عبر المفاتيح (e.g. "nav.home")
export function translate(keyPath: string, lang: Language = DEFAULT_LANGUAGE): string {
  const keys = keyPath.split('.');
  let result: any = translations[lang] || translations[DEFAULT_LANGUAGE];
  for (const key of keys) {
    if (result && result[key]) {
      result = result[key];
    } else {
      return keyPath;
    }
  }
  return typeof result === 'string' ? result : keyPath;
}

// دالة جلب النص بناءً على اللغة المحددة
export function getLocalizedText(textObj: Record<string, string> | string | undefined, lang: Language): string {
  if (!textObj) return '';
  if (typeof textObj === 'string') return textObj;
  return textObj[lang] || textObj['en'] || textObj['fr'] || Object.values(textObj)[0] || '';
}
