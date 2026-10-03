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

    'book.title': 'Book Your Stay',
    'book.subtitle': 'Select your stay dates and enter your details. We will confirm your reservation instantly via WhatsApp.',
    'book.roomSelect': 'Select Room',
    'book.checkIn': 'Check-in Date',
    'book.checkOut': 'Check-out Date',
    'book.guests': 'Number of Guests',
    'book.maxGuestsNote': 'The maximum capacity for this room is',
    'book.fullName': 'Full Name',
    'book.nationality': 'Nationality',
    'book.phone': 'Phone / WhatsApp',
    'book.email': 'Email Address',
    'book.specialRequests': 'Special Requests / Notes',
    'book.placeholder.fullName': 'e.g. John Doe',
    'book.placeholder.nationality': 'e.g. French, Moroccan, American',
    'book.placeholder.phone': '+212 613 136351',
    'book.placeholder.email': 'example@gmail.com',
    'book.placeholder.notes': 'Estimated arrival time or special preferences...',
    'book.submitBtn': 'Send Reservation via WhatsApp',
    'book.redirectNote': 'You will be redirected directly to Riad Tofaha official WhatsApp with the formatted message.',
    'book.guestSingular': 'Guest',
    'book.guestPlural': 'Guests',
    'book.capacity': 'Capacity:',
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

    'book.title': 'Réserver Votre Séjour',
    'book.subtitle': 'Sélectionnez vos dates de séjour et entrez vos coordonnées. Nous confirmerons votre réservation instantanément via WhatsApp.',
    'book.roomSelect': 'Sélectionner la chambre',
    'book.checkIn': 'Date d\'arrivée',
    'book.checkOut': 'Date de départ',
    'book.guests': 'Nombre de personnes',
    'book.maxGuestsNote': 'La capacité maximale pour cette chambre est de',
    'book.fullName': 'Nom complet',
    'book.nationality': 'Nationalité',
    'book.phone': 'Téléphone / WhatsApp',
    'book.email': 'Adresse e-mail',
    'book.specialRequests': 'Demandes particulières / Notes',
    'book.placeholder.fullName': 'ex. Jean Dupont',
    'book.placeholder.nationality': 'ex. Française, Marocaine, Belge',
    'book.placeholder.phone': '+212 613 136351',
    'book.placeholder.email': 'exemple@gmail.com',
    'book.placeholder.notes': 'Heure d\'arrivée estimée ou préférences particulières...',
    'book.submitBtn': 'Envoyer la réservation via WhatsApp',
    'book.redirectNote': 'Vous serez redirigé directement vers le WhatsApp officiel du Riad Tofaha avec le message formaté.',
    'book.guestSingular': 'Personne',
    'book.guestPlural': 'Personnes',
    'book.capacity': 'Capacité :',
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

    'book.title': 'احجز إقامتك',
    'book.subtitle': 'اختر تواريخ إقامتك وأدخل بياناتك، وسنقوم بتأكيد حجزك فوراً عبر الواتساب.',
    'book.roomSelect': 'اختر الغرفة',
    'book.checkIn': 'تاريخ الوصول',
    'book.checkOut': 'تاريخ المغادرة',
    'book.guests': 'عدد الضيوف',
    'book.maxGuestsNote': 'الحد الأقصى لهذه الغرفة هو',
    'book.fullName': 'الاسم الكامل',
    'book.nationality': 'الجنسية',
    'book.phone': 'رقم الهاتف / الواتساب',
    'book.email': 'البريد الإلكتروني',
    'book.specialRequests': 'طلبات خاصة / ملاحظات',
    'book.placeholder.fullName': 'مثال: فيصل المحمدي',
    'book.placeholder.nationality': 'مثال: مغربية، فرنسية',
    'book.placeholder.phone': '+212 613 136351',
    'book.placeholder.email': 'example@gmail.com',
    'book.placeholder.notes': 'توقيت الوصول المتوقع، أو أي طلبات خاصة...',
    'book.submitBtn': 'إرسال الحجز عبر الواتساب',
    'book.redirectNote': 'سيتم توجيهك فوراً لرقم الرياض الرسمي على WhatsApp مع الرسالة المنسقة.',
    'book.guestSingular': 'ضيف',
    'book.guestPlural': 'ضيوف',
    'book.capacity': 'تتسع لـ:',
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

    'book.title': 'Reservar Su Estancia',
    'book.subtitle': 'Seleccione sus fechas de estancia e ingrese sus datos. Confirmaremos su reserva al instante por WhatsApp.',
    'book.roomSelect': 'Seleccionar habitación',
    'book.checkIn': 'Fecha de llegada',
    'book.checkOut': 'Fecha de salida',
    'book.guests': 'Número de huéspedes',
    'book.maxGuestsNote': 'La capacidad máxima para esta habitación es de',
    'book.fullName': 'Nombre completo',
    'book.nationality': 'Nacionalidad',
    'book.phone': 'Teléfono / WhatsApp',
    'book.email': 'Correo electrónico',
    'book.specialRequests': 'Peticiones especiales / Notas',
    'book.placeholder.fullName': 'ej. Juan Pérez',
    'book.placeholder.nationality': 'ej. Española, Marroquí',
    'book.placeholder.phone': '+212 613 136351',
    'book.placeholder.email': 'ejemplo@gmail.com',
    'book.placeholder.notes': 'Hora estimada de llegada o preferencias especiales...',
    'book.submitBtn': 'Enviar reserva por WhatsApp',
    'book.redirectNote': 'Será redirigido directamente al WhatsApp oficial del Riad Tofaha con el mensaje formateado.',
    'book.guestSingular': 'Huésped',
    'book.guestPlural': 'Huéspedes',
    'book.capacity': 'Capacidad:',
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
