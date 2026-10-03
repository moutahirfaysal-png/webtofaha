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

    // About Page (EN)
    'about.page_title': 'About Riad Tofaha | Authentic Luxury Riad in Marrakech',
    'about.hero_badge': 'ABOUT RIAD TOFAHA',
    'about.hero_title': 'A Modern & Authentic Moroccan Sanctuary',
    'about.hero_subtitle': 'Newly renovated boutique Riad in the historic Medina of Marrakech, offering modern comfort, peaceful luxury, and rare direct car access.',
    
    'about.story_badge': 'THE TOFAHA EXPERIENCE',
    'about.story_title': 'Traditional Moroccan Charm Meets Modern Comfort',
    'about.story_p1': 'Riad Tofaha is a newly restored boutique Riad located in the heart of Marrakech Medina. It seamlessly blends traditional Moroccan craftsmanship—handcrafted Zellige tiles, carved plasterwork, and noble wood—with high-end contemporary comfort.',
    'about.story_p2': 'Conceived as a tranquil refuge, thick traditional walls isolate you completely from the bustling Medina outside, providing a quiet and intimate retreat. Features 4 private deluxe rooms, a panoramic rooftop sun terrace, a fully equipped shared kitchen, and warm hospitality by Khalid.',

    'about.card1_title': '15 Mins to Jemaa el-Fnaa',
    'about.card1_desc': 'A pleasant 15-minute walk through historic Medina alleys to Marrakech’s main square and souks.',
    'about.card2_title': 'Direct Car & Luggage Access',
    'about.card2_desc': 'A rare privilege in the Medina: cars and taxis can stop directly in front of the Riad door for effortless luggage drop-off.',
    'about.card3_title': 'Guarded Parking Nearby',
    'about.card3_desc': 'Located just steps from a secure 24/7 guarded parking facility for complete peace of mind.',
    'about.card4_title': 'Tranquil & Quiet Refuge',
    'about.card4_desc': 'Enjoy undisturbed peace and quiet inside the Riad after a day exploring the vibrant red city.',

    // Home & Rooms
    'home.rooms_subtitle': 'ACCOMMODATION & SUITES',
    'home.rooms_title': 'Our Exclusive Rooms & Suites',
    'home.rooms_desc': 'Experience authentic Moroccan hospitality with modern comfort in our elegantly appointed rooms.',
    'rooms.page_title': 'Our Rooms & Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'ACCOMMODATION & SUITES',
    'rooms.title': 'Our Rooms & Suites',
    'rooms.desc': 'Discover our authentic Moroccan rooms and suites designed for ultimate comfort and tranquility.',

    // Contact
    'contact.herotagline': 'GET IN TOUCH',
    'contact.herotitle': 'We Are Here to Assist You',
    'contact.herosubtitle': 'Reach out to us directly or visit our official booking channels.',
    'contact.phone': 'Phone / WhatsApp',
    'contact.phone.subtext': 'Available on WhatsApp for direct inquiry and assistance.',
    'contact.email': 'Email Address',
    'contact.email.subtext': 'For official inquiries and exclusive stay reservations.',
    'contact.address': 'Location Address',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Morocco',
    'contact.address.subtext': '15 mins from Jemaa el-Fnaa • Car drop-off available in front of the door.',
    'contact.otastitle': 'Book Via Your Favorite Platform',
    'contact.otassubtitle': 'You can also find us on Booking.com and Airbnb.',
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

    // About Page (FR)
    'about.page_title': 'À Propos du Riad Tofaha | Riad de Luxe Authentique à Marrakech',
    'about.hero_badge': 'À PROPOS DU RIAD TOFAHA',
    'about.hero_title': 'Un Sanctuaire Marocain Moderne & Authentique',
    'about.hero_subtitle': 'Riad boutique fraîchement rénové au cœur de la Médina, alliant confort contemporain, calme absolu et accès voiture devant la porte.',
    
    'about.story_badge': 'L’EXPÉRIENCE TOFAHA',
    'about.story_title': 'Le Charme Traditionnel Allié au Confort Moderne',
    'about.story_p1': 'Le Riad Tofaha est un riad boutique récemment rénové situé au cœur de la Médina historique de Marrakech. Il associe l’artisanat marocain traditionnel (zelliges faits main, plâtres sculptés, bois noble) au confort haut de gamme.',
    'about.story_p2': 'Conçu comme un cocon de tranquillité, ses murs isolent parfaitement du bruit extérieur. Il dispose de 4 chambres indépendantes, d’une terrasse panoramique ensoleillée, d’une cuisine équipée et de l’accueil chaleureux de Khalid.',

    'about.card1_title': 'À 15 Min de Jemaa el-Fnaa',
    'about.card1_desc': 'Une agréable marche de 15 minutes à travers les ruelles historiques jusqu’à la célèbre place et les souks.',
    'about.card2_title': 'Dépose-Bagages Devant la Porte',
    'about.card2_desc': 'Un privilège rare en Médina : les taxis et voitures peuvent s’arrêter directement devant la porte du Riad pour décharger vos bagages.',
    'about.card3_title': 'Parking Gardé à Proximité',
    'about.card3_desc': 'Situé à seulement quelques pas d’un parking public sécurisé et gardé 24h/24.',
    'about.card4_title': 'Calme et Sérénité Absolue',
    'about.card4_desc': 'Profitez d’un silence apaisant à l’intérieur du Riad pour vous ressourcer après vos visites.',

    // Home & Rooms
    'home.rooms_subtitle': 'HÉBERGEMENT & SUITES',
    'home.rooms_title': 'Nos Chambres & Suites Exclusives',
    'home.rooms_desc': 'Découvrez l’hospitalité marocaine authentique dans des chambres élégantes alliant confort moderne et charme traditionnel.',
    'rooms.page_title': 'Nos Chambres & Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'HÉBERGEMENT & SUITES',
    'rooms.title': 'Nos Chambres & Suites',
    'rooms.desc': 'Découvrez nos chambres et suites marocaines authentiques, conçues pour un confort ultime.',

    // Contact
    'contact.herotagline': 'CONTACTEZ-NOUS',
    'contact.herotitle': 'Nous Sommes à Votre Écoute',
    'contact.herosubtitle': 'Une question ou besoin d’assistance pour votre réservation ? Contactez-nous directement.',
    'contact.phone': 'Téléphone / WhatsApp',
    'contact.phone.subtext': 'Disponible sur WhatsApp pour toute demande directe.',
    'contact.email': 'Adresse E-mail',
    'contact.email.subtext': 'Pour les demandes officielles et réservations d’expériences exclusives.',
    'contact.address': 'Adresse du Riad',
    'contact.addressval': 'Derb Sidi Massoud, Médina, Marrakech, Maroc',
    'contact.address.subtext': 'À 15 min de la place Jemaa el-Fna • Dépose-minute possible devant la porte.',
    'contact.otastitle': 'Réservez via Votre Plateforme Préférée',
    'contact.otassubtitle': 'Retrouvez-nous également sur Booking.com et Airbnb.',
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

    // About Page (AR)
    'about.page_title': 'عن رياض تفاحة | رياض فخم وأصيل في مراكش',
    'about.hero_badge': 'عن رياض تفاحة',
    'about.hero_title': 'ملاذ مغربي أصيل وعصري في قلب مراكش',
    'about.hero_subtitle': 'رياض بوتيك مُجدد حديثاً في المدينة العتيقة، يجمع بين الأناقة المعمارية المغربية والراحة الفاخرة وسهولة الوصول بالسيارة.',
    
    'about.story_badge': 'تجربة رياض تفاحة',
    'about.story_title': 'أصالة التراث المغربي ورفاهية الراحة الحديثة',
    'about.story_p1': 'رياض تفاحة هو رياض بوتيك مُجدد بالكامل يقع في قلب المدينة القديمة لمراكش. يمزج بإتقان بين إبداع الصناعة التقليدية المغربية (الزليج اليدوي، الجبس المنقوش، واللمسات الخشبية الدافئة) وأحدث وسائل الراحة الفندقية الفاخرة.',
    'about.story_p2': 'صُمم الرياض ليكون واحة هادئة؛ إذ تعزلك جدرانه السميكة عن صخب المدينة الخارجي. يضم 4 غرف نوم مستقلة، تراس بانورامي مشمس على السطح، مطبخ مشترك مجهز، وضيافة حارة يقدمها المضيف خالد.',

    'about.card1_title': '15 دقيقة عن جامع الفناء',
    'about.card1_desc': 'جولة مشي ممتعة لمدة 15 دقيقة عبر أزقة المدينة العتيقة للوصول للساحة الشهيرة والأسواق.',
    'about.card2_title': 'توقف السيارة أمام باب الرياض',
    'about.card2_desc': 'مزية نادرة بالمدينة القديمة: يمكن للسيارات والتاكسي التوقف أمام باب الرياض مباشرة لتنزيل الأمتعة بكل سهولة.',
    'about.card3_title': 'موقف سيارات آمن قريب جداً',
    'about.card3_desc': 'على بُعد خطوات قصيرة جداً من موقف سيارات آمن ومحروس 24/24 لتنقل مريح وبدون عناء.',
    'about.card4_title': 'سكينة وهدوء مطلق',
    'about.card4_desc': 'استمتع بالهدوء والراحة المطلقة داخل الرياض بعد يوم حافل باستكشاف معالم مراكش.',

    // Home & Rooms
    'home.rooms_subtitle': 'الإقامة والأجنحة',
    'home.rooms_title': 'غرفنا وأجنحتنا المتميزة',
    'home.rooms_desc': 'استمتع بالضيافة المغربية الأصيلة مع أقصى درجات الراحة والهدوء في غرفنا وأجنحتنا المصممة بأناقة.',
    'rooms.page_title': 'غرفنا وأجنحتنا | رياض تفاحة مراكش',
    'rooms.subtitle': 'الإقامة والأجنحة',
    'rooms.title': 'غرفنا وأجنحتنا',
    'rooms.desc': 'اكتشف غرفنا وأجنحتنا المغربية الأصيلة، المصممة لتوفير أقصى درجات الراحة والهدوء.',

    // Contact
    'contact.herotagline': 'تواصل معنا',
    'contact.herotitle': 'نحن هنا لخدمتك وإجابة استفساراتك',
    'contact.herosubtitle': 'هل لديك سؤال أو تحتاج مساعدة في حجز إقامتك؟ تواصل معنا مباشرة.',
    'contact.phone': 'الهاتف / الواتساب',
    'contact.phone.subtext': 'متاح عبر WhatsApp للتواصل والمساعدة المباشرة.',
    'contact.email': 'البريد الإلكتروني',
    'contact.email.subtext': 'للاستفسارات الرسمية وطلبات الإقامة الحصرية.',
    'contact.address': 'عنوان الرياض',
    'contact.addressval': 'درب سيدي مسعود، المدينة العتيقة، مراكش، المغرب',
    'contact.address.subtext': '15 دقيقة من جامع الفناء • إمكانية توقف السيارة أمام الباب.',
    'contact.otastitle': 'احجز عبر منصتك المفضلة',
    'contact.otassubtitle': 'يمكنك أيضاً العثور علينا والاطلاع على تقييمات ضيوفنا على بوكينج وأير بي إن بي.',
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

    // About Page (ES)
    'about.page_title': 'Sobre Riad Tofaha | Riad de Lujo Auténtico en Marrakech',
    'about.hero_badge': 'SOBRE RIAD TOFAHA',
    'about.hero_title': 'Un Santuario Marroquí Moderno y Auténtico',
    'about.hero_subtitle': 'Riad boutique recientemente renovado en la Medina, que combina confort contemporáneo, paz y acceso directo en coche.',
    
    'about.story_badge': 'LA EXPERIENCIA TOFAHA',
    'about.story_title': 'Encanto Tradicional y Confort Contemporáneo',
    'about.story_p1': 'Riad Tofaha es un Riad boutique recientemente restaurado en el corazón de la Medina histórica de Marrakech. Combina la artesanía marroquí tradicional (azulejos Zellige, yeso esculpido, madera noble) con lujos modernos.',
    'about.story_p2': 'Diseñado como un refugio de paz, cuenta con 4 habitaciones independientes, terraza en la azotea, cocina equipada y la cálida hospitalidad de Khalid.',

    'about.card1_title': 'A 15 Min de Jemaa el-Fnaa',
    'about.card1_desc': 'A solo 15 minutos a pie de la famosa plaza Jemaa el-Fnaa y los zocos tradicionales.',
    'about.card2_title': 'Acceso de Coche a la Puerta',
    'about.card2_desc': 'Una ventaja exclusiva: taxis y coches pueden parar directamente frente a la puerta del Riad para bajar el equipaje.',
    'about.card3_title': 'Aparcamiento Vigilado Cercano',
    'about.card3_desc': 'Ubicado a pocos pasos de un aparcamiento público vigilado 24/7.',
    'about.card4_title': 'Tranquilidad y Paz Total',
    'about.card4_desc': 'Disfrute de un ambiente silencioso y relajante dentro del Riad.',

    // Home & Rooms
    'home.rooms_subtitle': 'ALOJAMIENTO Y SUITES',
    'home.rooms_title': 'Nuestras Habitaciones y Suites Exclusivas',
    'home.rooms_desc': 'Disfrute de la auténtica hospitalidad marroquí con el máximo confort en nuestras elegantes habitaciones.',
    'rooms.page_title': 'Nuestras Habitaciones y Suites | Riad Tofaha Marrakech',
    'rooms.subtitle': 'ALOJAMIENTO Y SUITES',
    'rooms.title': 'Nuestras Habitaciones y Suites',
    'rooms.desc': 'Descubra nuestras auténticas habitaciones y suites marroquíes.',

    // Contact
    'contact.herotagline': 'CONTÁCTENOS',
    'contact.herotitle': 'Estamos Aquí para Ayudarle',
    'contact.herosubtitle': '¿Tiene alguna pregunta o necesita ayuda? Contáctenos directamente.',
    'contact.phone': 'Teléfono / WhatsApp',
    'contact.phone.subtext': 'Disponible en WhatsApp para consultas directas.',
    'contact.email': 'Correo Electrónico',
    'contact.email.subtext': 'Para consultas oficiales y reservas exclusivas.',
    'contact.address': 'Dirección',
    'contact.addressval': 'Derb Sidi Massoud, Medina, Marrakech, Marruecos',
    'contact.address.subtext': 'A 15 min de Jemaa el-Fnaa • Posibilidad de parada de coche frente a la puerta.',
    'contact.otastitle': 'Reserve en su Plataforma Favorita',
    'contact.otassubtitle': 'También puede encontrarnos en Booking.com y Airbnb.',
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
