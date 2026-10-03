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

    // Contact Page (EN)
    'contact.herotagline': 'GET IN TOUCH',
    'contact.herotitle': 'We Are Here to Assist You',
    'contact.herosubtitle': 'Have questions or need assistance with your reservation? Reach out to us directly or visit our official booking pages.',
    'contact.phone': 'Phone / WhatsApp',
    'contact.email': 'Email Address',
    'contact.address': 'Location Address',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Morocco',
    'contact.otasTitle': 'Book Via Your Favorite Platform',
    'contact.otasSubtitle': 'You can also find us and check verified guest reviews on Booking.com and Airbnb.',
    'contact.bookingBadge': '10 / 10 Exceptional on Booking.com',
    'contact.airbnbBadge': 'Superhost Listed on Airbnb',
    'contact.formTitle': 'Send Us a Direct Message',
    'contact.fullName': 'Full Name',
    'contact.emailAddress': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.sendBtn': 'Send Message via WhatsApp',
    'contact.mapTitle': 'Find Riad Tofaha in Marrakech',
    'contact.placeholder.name': 'e.g. John Doe',
    'contact.placeholder.email': 'example@gmail.com',
    'contact.placeholder.subject': 'Inquiry about availability or airport transfer...',
    'contact.placeholder.message': 'Write your message or question here...',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.rooms': 'Nos Chambres',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.booknow': 'Réserver',

    // Contact Page (FR)
    'contact.herotagline': 'CONTACTEZ-NOUS',
    'contact.herotitle': 'Nous Sommes à Votre Écoute',
    'contact.herosubtitle': 'Une question ou besoin d’assistance pour votre réservation ? Contactez-nous directement ou consultez nos pages officielles.',
    'contact.phone': 'Téléphone / WhatsApp',
    'contact.email': 'Adresse E-mail',
    'contact.address': 'Adresse du Riad',
    'contact.addressval': 'Derb Sidi Massoud, Médina, Marrakech, Maroc',
    'contact.otasTitle': 'Réservez via Votre Plateforme Préférée',
    'contact.otasSubtitle': 'Retrouvez-nous également et consultez les avis vérifiés sur Booking.com et Airbnb.',
    'contact.bookingBadge': '10 / 10 Exceptionnel sur Booking.com',
    'contact.airbnbBadge': 'Annonce Superhost sur Airbnb',
    'contact.formTitle': 'Envoyez-nous un Message Direct',
    'contact.fullName': 'Nom Complet',
    'contact.emailAddress': 'Adresse E-mail',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.sendBtn': 'Envoyer le Message via WhatsApp',
    'contact.mapTitle': 'Trouver le Riad Tofaha à Marrakech',
    'contact.placeholder.name': 'ex. Jean Dupont',
    'contact.placeholder.email': 'exemple@gmail.com',
    'contact.placeholder.subject': 'Demande de renseignement ou transfert aéroport...',
    'contact.placeholder.message': 'Écrivez votre message ou votre question ici...',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.rooms': 'غرفنا',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.booknow': 'احجز الآن',

    // Contact Page (AR)
    'contact.herotagline': 'تواصل معنا',
    'contact.herotitle': 'نحن هنا لخدمتك وإجابة استفساراتك',
    'contact.herosubtitle': 'هل لديك سؤال أو تحتاج مساعدة في حجز إقامتك؟ تواصل معنا مباشرة أو تصفح صفحاتنا الرسمية.',
    'contact.phone': 'الهاتف / الواتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'عنوان الرياض',
    'contact.addressval': 'درب سيدي مسعود، المدينة العتيقة، مراكش، المغرب',
    'contact.otasTitle': 'احجز عبر منصتك المفضلة',
    'contact.otasSubtitle': 'يمكنك أيضاً العثور علينا والاطلاع على تقييمات ضيوفنا الموثقة على بوكينج وأير بي إن بي.',
    'contact.bookingBadge': 'تقييم 10 / 10 استثنائي على Booking.com',
    'contact.airbnbBadge': 'مُضيف متميز Superhost على Airbnb',
    'contact.formTitle': 'أرسل لنا رسالة مباشرة',
    'contact.fullName': 'الاسم الكامل',
    'contact.emailAddress': 'البريد الإلكتروني',
    'contact.subject': 'موضوع الرسالة',
    'contact.message': 'نص الرسالة',
    'contact.sendBtn': 'إرسال الرسالة عبر الواتساب',
    'contact.mapTitle': 'موقع رياض تفاحة في مراكش',
    'contact.placeholder.name': 'مثال: فيصل المحمدي',
    'contact.placeholder.email': 'example@gmail.com',
    'contact.placeholder.subject': 'استفسار عن التوفر أو خدمة النقل من المطار...',
    'contact.placeholder.message': 'اكتب استفسارك أو رسالتك هنا...',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.booknow': 'Reservar',

    // Contact Page (ES)
    'contact.herotagline': 'CONTÁCTENOS',
    'contact.herotitle': 'Estamos Aquí para Ayudarle',
    'contact.herosubtitle': '¿Tiene alguna pregunta o necesita ayuda con su reserva? Contáctenos directamente o visite nuestras páginas oficiales.',
    'contact.phone': 'Teléfono / WhatsApp',
    'contact.email': 'Correo Electrónico',
    'contact.address': 'Dirección',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Marruecos',
    'contact.otasTitle': 'Reserve en su Plataforma Favorita',
    'contact.otasSubtitle': 'También puede encontrarnos y ver opiniones verificadas en Booking.com y Airbnb.',
    'contact.bookingBadge': '10 / 10 Excepcional en Booking.com',
    'contact.airbnbBadge': 'Superanfitrión en Airbnb',
    'contact.formTitle': 'Envíenos un Mensaje Directo',
    'contact.fullName': 'Nombre Completo',
    'contact.emailAddress': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Su Mensaje',
    'contact.sendBtn': 'Enviar Mensaje por WhatsApp',
    'contact.mapTitle': 'Encontrar Riad Tofaha en Marrakech',
    'contact.placeholder.name': 'ej. Juan Pérez',
    'contact.placeholder.email': 'ejemplo@gmail.com',
    'contact.placeholder.subject': 'Consulta sobre disponibilidad o traslado...',
    'contact.placeholder.message': 'Escriba su mensaje o consulta aquí...',
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
