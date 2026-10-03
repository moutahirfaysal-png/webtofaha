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

    // Rooms Page (EN)
    'rooms.page_title': 'Our Rooms & Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'ACCOMMODATION & SUITES',
    'rooms.title': 'Our Rooms & Suites',
    'rooms.desc': 'Discover our authentic Moroccan rooms and suites, designed for ultimate comfort, charm, and tranquility in the heart of Marrakech Medina.',

    // Contact Page (EN)
    'contact.herotagline': 'GET IN TOUCH',
    'contact.herotitle': 'We Are Here to Assist You',
    'contact.herosubtitle': 'Have questions or need assistance with your reservation? Reach out to us directly or visit our official booking channels.',
    'contact.phone': 'Phone / WhatsApp',
    'contact.phone.subtext': 'Available on WhatsApp for direct inquiry and assistance.',
    'contact.email': 'Email Address',
    'contact.email.subtext': 'For official inquiries and exclusive stay reservations.',
    'contact.address': 'Location Address',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Morocco',
    'contact.address.subtext': '15 mins from Jemaa el-Fnaa • Car drop-off available in front of the door.',
    'contact.otastitle': 'Book Via Your Favorite Platform',
    'contact.otassubtitle': 'You can also find us and check verified guest reviews on Booking.com and Airbnb.',
    'contact.bookingbadge': '10 / 10 Exceptional on Booking.com',
    'contact.airbnbbadge': 'Superhost Listed on Airbnb',
    'contact.formtitle': 'Send Us a Direct Message',
    'contact.form.subtext': 'Your message will be sent directly to Riad Tofaha official WhatsApp.',
    'contact.fullname': 'Full Name',
    'contact.emailaddress': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.sendbtn': 'Send Message via WhatsApp',
    'contact.send.subtext': 'Fast & direct response via WhatsApp.',
    'contact.maptitle': 'Find Riad Tofaha in Marrakech',
    'contact.openinmaps': 'Open in Google Maps',
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

    // Rooms Page (FR)
    'rooms.page_title': 'Nos Chambres & Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'HÉBERGEMENT & SUITES',
    'rooms.title': 'Nos Chambres & Suites',
    'rooms.desc': 'Découvrez nos chambres et suites marocaines authentiques, conçues pour un confort ultime, du charme et de la tranquillité au cœur de la médina de Marrakech.',

    // Contact Page (FR)
    'contact.herotagline': 'CONTACTEZ-NOUS',
    'contact.herotitle': 'Nous Sommes à Votre Écoute',
    'contact.herosubtitle': 'Une question ou besoin d’assistance pour votre réservation ? Contactez-nous directement ou consultez nos plateformes officielles.',
    'contact.phone': 'Téléphone / WhatsApp',
    'contact.phone.subtext': 'Disponible sur WhatsApp pour toute demande directe et assistance.',
    'contact.email': 'Adresse E-mail',
    'contact.email.subtext': 'Pour les demandes officielles et réservations d’expériences exclusives.',
    'contact.address': 'Adresse du Riad',
    'contact.addressval': 'Derb Sidi Massoud, Médina, Marrakech, Maroc',
    'contact.address.subtext': 'À 15 min de la place Jemaa el-Fna • Dépose-minute possible devant la porte.',
    'contact.otastitle': 'Réservez via Votre Plateforme Préférée',
    'contact.otassubtitle': 'Retrouvez-nous également et consultez les avis vérifiés sur Booking.com et Airbnb.',
    'contact.bookingbadge': '10 / 10 Exceptionnel sur Booking.com',
    'contact.airbnbbadge': 'Annonce Superhost sur Airbnb',
    'contact.formtitle': 'Envoyez-nous un Message Direct',
    'contact.form.subtext': 'Votre message sera envoyé directement au WhatsApp officiel du Riad.',
    'contact.fullname': 'Nom Complet',
    'contact.emailaddress': 'Adresse E-mail',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.sendbtn': 'Envoyer le Message via WhatsApp',
    'contact.send.subtext': 'Réponse rapide et directe via WhatsApp.',
    'contact.maptitle': 'Trouver le Riad Tofaha à Marrakech',
    'contact.openinmaps': 'Ouvrir dans Google Maps',
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

    // Rooms Page (AR)
    'rooms.page_title': 'غرفنا وأجنحتنا | رياض تفاحة مراكش',
    'rooms.subtitle': 'الإقامة والأجنحة',
    'rooms.title': 'غرفنا وأجنحتنا',
    'rooms.desc': 'اكتشف غرفنا وأجنحتنا المغربية الأصيلة، المصممة لتوفير أقصى درجات الراحة والهدوء في قلب مدينة مراكش العتيقة.',

    // Contact Page (AR)
    'contact.herotagline': 'تواصل معنا',
    'contact.herotitle': 'نحن هنا لخدمتك وإجابة استفساراتك',
    'contact.herosubtitle': 'هل لديك سؤال أو تحتاج مساعدة في حجز إقامتك؟ تواصل معنا مباشرة أو تصفح صفحاتنا الرسمية.',
    'contact.phone': 'الهاتف / الواتساب',
    'contact.phone.subtext': 'متاح عبر WhatsApp للتواصل والمساعدة المباشرة.',
    'contact.email': 'البريد الإلكتروني',
    'contact.email.subtext': 'للاستفسارات الرسمية وطلبات الإقامة الحصرية.',
    'contact.address': 'عنوان الرياض',
    'contact.addressval': 'درب سيدي مسعود، المدينة العتيقة، مراكش، المغرب',
    'contact.address.subtext': '15 دقيقة من جامع الفناء • إمكانية توقف السيارة أمام الباب.',
    'contact.otastitle': 'احجز عبر منصتك المفضلة',
    'contact.otassubtitle': 'يمكنك أيضاً العثور علينا والاطلاع على تقييمات ضيوفنا الموثقة على بوكينج وأير بي إن بي.',
    'contact.bookingbadge': 'تقييم 10 / 10 استثنائي على Booking.com',
    'contact.airbnbbadge': 'مُضيف متميز Superhost على Airbnb',
    'contact.formtitle': 'أرسل لنا رسالة مباشرة',
    'contact.form.subtext': 'سيتم إرسال الاستفسار فوراً إلى رقم الواتساب الرسمي للرياض.',
    'contact.fullname': 'الاسم الكامل',
    'contact.emailaddress': 'البريد الإلكتروني',
    'contact.subject': 'موضوع الرسالة',
    'contact.message': 'نص الرسالة',
    'contact.sendbtn': 'إرسال الرسالة عبر الواتساب',
    'contact.send.subtext': 'رد سريع ومباشر عبر واتساب.',
    'contact.maptitle': 'موقع رياض تفاحة في مراكش',
    'contact.openinmaps': 'افتح في خرائط جوجل',
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

    // Rooms Page (ES)
    'rooms.page_title': 'Nuestras Habitaciones y Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'ALOJAMIENTO Y SUITES',
    'rooms.title': 'Nuestras Habitaciones y Suites',
    'rooms.desc': 'Descubra nuestras auténticas habitaciones y suites marroquíes, diseñadas para el máximo confort, encanto y tranquilidad en el corazón de la Medina de Marrakech.',

    // Contact Page (ES)
    'contact.herotagline': 'CONTÁCTENOS',
    'contact.herotitle': 'Estamos Aquí para Ayudarle',
    'contact.herosubtitle': '¿Tiene alguna pregunta o necesita ayuda con su reserva? Contáctenos directamente o visite nuestras páginas oficiales.',
    'contact.phone': 'Teléfono / WhatsApp',
    'contact.phone.subtext': 'Disponible en WhatsApp para consultas directas y asistencia.',
    'contact.email': 'Correo Electrónico',
    'contact.email.subtext': 'Para consultas oficiales y reservas exclusivas.',
    'contact.address': 'Dirección',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Marruecos',
    'contact.address.subtext': 'A 15 min de Jemaa el-Fnaa • Posibilidad de parada de coche frente a la puerta.',
    'contact.otastitle': 'Reserve en su Plataforma Favorita',
    'contact.otassubtitle': 'También puede encontrarnos y ver opiniones verificadas en Booking.com y Airbnb.',
    'contact.bookingbadge': '10 / 10 Excepcional en Booking.com',
    'contact.airbnbbadge': 'Superanfitrión en Airbnb',
    'contact.formtitle': 'Envíenos un Mensaje Directo',
    'contact.form.subtext': 'Su consulta se enviará directamente al WhatsApp oficial del Riad.',
    'contact.fullname': 'Nombre Completo',
    'contact.emailaddress': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Su Mensaje',
    'contact.sendbtn': 'Enviar Mensaje por WhatsApp',
    'contact.send.subtext': 'Respuesta rápida y directa por WhatsApp.',
    'contact.maptitle': 'Encontrar Riad Tofaha en Marrakech',
    'contact.openinmaps': 'Abrir en Google Maps',
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
