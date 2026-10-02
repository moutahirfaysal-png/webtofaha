import type { LocalizedText } from './types';

export type Language = 'en' | 'fr' | 'ar';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'fr', label: 'Français', flag: 'FR' },
  { code: 'ar', label: 'العربية', flag: 'AR' },
];

export const DEFAULT_LANGUAGE: Language = 'en';

type TranslationDict = Record<string, LocalizedText>;

const translations: TranslationDict = {
  // Navigation
  'nav.home': { en: 'Home', fr: 'Accueil', ar: 'الرئيسية' },
  'nav.about': { en: 'About', fr: 'À Propos', ar: 'من نحن' },
  'nav.rooms': { en: 'Our Rooms', fr: 'Nos Chambres', ar: 'غرفنا' },
  'nav.gallery': { en: 'Gallery', fr: 'Galerie', ar: 'المعرض' },
  'nav.experiences': { en: 'Experiences', fr: 'Expériences', ar: 'تجارب' },
  'nav.blog': { en: 'Blog', fr: 'Blog', ar: 'المدونة' },
  'nav.contact': { en: 'Contact', fr: 'Contact', ar: 'اتصل بنا' },
  'nav.book': { en: 'Book Now', fr: 'Réserver', ar: 'احجز الآن' },
  'nav.bookStay': { en: 'Book Your Stay', fr: 'Réservez Votre Séjour', ar: 'احجز إقامتك' },

  // Hero
  'hero.tagline': { en: 'Your Authentic Moroccan Escape in the Heart of Marrakech', fr: 'Votre Évasion Marocaine Authentique au Cœur de Marrakech', ar: 'هروبك المغربي الأصيل في قلب مراكش' },
  'hero.exploreRooms': { en: 'Explore Our Rooms', fr: 'Découvrir Nos Chambres', ar: 'اكتشف غرفنا' },
  'hero.bookStay': { en: 'Book Your Stay', fr: 'Réserver Votre Séjour', ar: 'احجز إقامتك' },

  // Welcome
  'welcome.title': { en: 'Welcome to Riad Tofaha', fr: 'Bienvenue au Riad Tofaha', ar: 'أهلاً بكم في رياض تفاحة' },
  'welcome.intro': { en: 'Discover the charm of Marrakech at Riad Tofaha, where traditional Moroccan elegance meets modern comfort. Experience unforgettable moments in a peaceful and authentic setting.', fr: 'Découvrez le charme de Marrakech au Riad Tofaha, où l\'élégance marocaine traditionnelle rencontre le confort moderne. Vivez des moments inoubliables dans un cadre paisible et authentique.', ar: 'اكتشف سحر مراكش في رياض تفاحة، حيث يلتقي الأناقة المغربية التقليدية بالراحة العصرية. عش لحظات لا تُنسى في أجواء هادئة وأصيلة.' },
  'welcome.authenticity': { en: 'Moroccan Authenticity', fr: 'Authenticité Marocaine', ar: 'أصالة مغربية' },
  'welcome.authenticityDesc': { en: 'Immerse yourself in the genuine spirit of Morocco through our traditional architecture, decor, and warm hospitality.', fr: 'Plongez dans l\'esprit authentique du Maroc à travers notre architecture traditionnelle, notre décoration et notre chaleureuse hospitalité.', ar: 'انغمس في الروح الحقيقية للمغرب من خلال عمارتنا التقليدية وديكورنا وكرم ضيافتنا.' },
  'welcome.architecture': { en: 'Traditional Architecture', fr: 'Architecture Traditionnelle', ar: 'عمارة تقليدية' },
  'welcome.architectureDesc': { en: 'Our riad features authentic Moroccan design with intricate zellige tilework, carved cedar, and a stunning central courtyard.', fr: 'Notre riad présente un design marocain authentique avec des zelliges intricats, du cèdre sculpté et une magnifique cour centrale.', ar: 'يتميز رياضنا بتصميم مغربي أصيل ببلاط الزليج المعقد وخشب الأرز المنحوت وفناء مركزي مذهل.' },
  'welcome.intimate': { en: 'Intimate Boutique Accommodation', fr: 'Hébergement Boutique Intime', ar: 'إقامة بوتيك حميمة' },
  'welcome.intimateDesc': { en: 'With only four private rooms, we offer a personal and peaceful experience far from the crowds.', fr: 'Avec seulement quatre chambres privées, nous offrons une expérience personnelle et paisible, loin des foules.', ar: 'بأربع غرف خاصة فقط، نقدم تجربة شخصية وهادئة بعيدًا عن الزحام.' },
  'welcome.comfort': { en: 'Comfort & Relaxation', fr: 'Confort & Détente', ar: 'راحة و استرخاء' },
  'welcome.comfortDesc': { en: 'Unwind in our beautifully appointed rooms designed for your ultimate comfort and tranquility.', fr: 'Détendez-vous dans nos chambres magnifiquement appointées, conçues pour votre confort et tranquillité ultimes.', ar: 'استرخِ في غرفنا الجميلة التجهيز المصممة لراحتك وطمأنينتك القصوى.' },
  'welcome.culture': { en: 'Marrakech\'s Rich Culture', fr: 'La Riche Culture de Marrakech', ar: 'ثقافة مراكش الغنية' },
  'welcome.cultureDesc': { en: 'Explore the vibrant souks, historic palaces, and enchanting gardens of the Red City, all within easy reach.', fr: 'Explorez les souks vibrants, les palais historiques et les jardins enchanteurs de la Ville Rouge, tous facilement accessibles.', ar: 'استكشف الأسواق النابضة والقصور التاريخية والحدائق الساحرة في المدينة الحمراء، كلها في متناول اليد.' },
  'welcome.hospitality': { en: 'Personalized Hospitality', fr: 'Hospitalité Personnalisée', ar: 'ضيافة شخصية' },
  'welcome.hospitalityDesc': { en: 'Our dedicated team ensures every aspect of your stay is tailored to create lasting memories.', fr: 'Notre équipe dévouée s\'assure que chaque aspect de votre séjour est adapté pour créer des souvenirs durables.', ar: 'فريقنا المتفاني يضمن أن كل جانب من إقامتك مصمم لخلق ذكريات دائمة.' },

  // Rooms preview
  'roomsPreview.title': { en: 'Our Rooms', fr: 'Nos Chambres', ar: 'غرفنا' },
  'roomsPreview.subtitle': { en: 'Four Unique Accommodations', fr: 'Quatre Hébergements Uniques', ar: 'أربع إقامات فريدة' },
  'roomsPreview.viewDetails': { en: 'View Room Details', fr: 'Voir les Détails', ar: 'عرض التفاصيل' },
  'roomsPreview.bookRoom': { en: 'Book This Room', fr: 'Réserver Cette Chambre', ar: 'احجز هذه الغرفة' },
  'roomsPreview.viewAll': { en: 'View All Rooms', fr: 'Voir Toutes les Chambres', ar: 'عرض كل الغرف' },
  'roomsPreview.perNight': { en: 'per night', fr: 'par nuit', ar: 'لليلة' },
  'roomsPreview.guests': { en: 'guests', fr: 'invités', ar: 'ضيوف' },
  'roomsPreview.beds': { en: 'Beds', fr: 'Lits', ar: 'أسرّة' },

  // Experiences
  'experiences.title': { en: 'Experience Marrakech', fr: 'Expériences à Marrakech', ar: 'تجارب مراكش' },
  'experiences.subtitle': { en: 'Discover the Magic of the Red City', fr: 'Découvrez la Magie de la Ville Rouge', ar: 'اكتشف سحر المدينة الحمراء' },
  'experiences.exploreAll': { en: 'Explore All Experiences', fr: 'Explorer Toutes les Expériences', ar: 'استكشف كل التجارب' },
  'experiences.jemaa': { en: 'Jemaa el-Fnaa', fr: 'Jemaa el-Fnaa', ar: 'ساحة جامع الفنا' },
  'experiences.jemaaDesc': { en: 'The beating heart of Marrakech, a UNESCO World Heritage square that comes alive every evening.', fr: 'Le cœur battant de Marrakech, une place classée au patrimoine mondial de l\'UNESCO qui s\'anime chaque soir.', ar: 'قلب مراكش النابض، ساحة مدرجة في قائمة اليونسكو للتراث العالمي تنبض بالحياة كل مساء.' },
  'experiences.bahia': { en: 'Bahia Palace', fr: 'Palais Bahia', ar: 'قصر الباهية' },
  'experiences.bahiaDesc': { en: 'A stunning 19th-century palace showcasing the finest Moroccan craftsmanship and architecture.', fr: 'Un palais du 19ème siècle magnifique présentant le meilleur de l\'artisanat et de l\'architecture marocaine.', ar: 'قصر مذهل من القرن التاسع عشر يعرض أرقى الحرفية والعمارة المغربية.' },
  'experiences.majorelle': { en: 'Majorelle Garden', fr: 'Jardin Majorelle', ar: 'حديقة ماجوريل' },
  'experiences.majorelleDesc': { en: 'An enchanting cobalt-blue garden oasis, once owned by Yves Saint Laurent.', fr: 'Un jardin enchanteur bleu cobalt, autrefois propriété d\'Yves Saint Laurent.', ar: 'حديقة ساحرة باللون الأزرق الكوبالتي، كانت مملوكة لإيف سان لوران.' },
  'experiences.souks': { en: 'Traditional Souks', fr: 'Souks Traditionnels', ar: 'الأسواق التقليدية' },
  'experiences.souksDesc': { en: 'Lose yourself in the labyrinthine markets filled with spices, textiles, leather, and treasures.', fr: 'Perdez-vous dans les marchés labyrinthiques remplis d\'épices, de textiles, de cuir et de trésors.', ar: 'اضيع في الأسواق المتاهة المليئة بالتوابل والمنسوجات والجلود والكنوز.' },
  'experiences.cuisine': { en: 'Moroccan Cuisine', fr: 'Cuisine Marocaine', ar: 'المطبخ المغربي' },
  'experiences.cuisineDesc': { en: 'Savor the flavors of tagine, couscous, and mint tea in the city\'s best eateries.', fr: 'Savourez les saveurs du tajine, du couscous et du thé à la menthe dans les meilleurs restaurants de la ville.', ar: 'تذوق نكهات الطاجين والكسكس وشاي النعناع في أفضل مطاعم المدينة.' },
  'experiences.hammam': { en: 'Hammams & Wellness', fr: 'Hammams & Bien-être', ar: 'الحمامات والعافية' },
  'experiences.hammamDesc': { en: 'Rejuvenate with traditional hammam treatments and wellness experiences.', fr: 'Rajeunissez avec des soins de hammam traditionnels et des expériences de bien-être.', ar: 'تجدد نشاطك مع علاجات الحمام التقليدية وتجارب العافية.' },
  'experiences.excursions': { en: 'Desert Excursions', fr: 'Excursions Désert', ar: 'رحلات الصحراء' },
  'experiences.excursionsDesc': { en: 'Venture beyond the city for unforgettable desert and mountain adventures.', fr: 'Aventurez-vous au-delà de la ville pour des aventures inoubliables dans le désert et la montagne.', ar: 'انطلق خارج المدينة لمغامرات لا تُنسى في الصحراء والجبال.' },

  // Guest experience
  'guest.title': { en: 'Guest Experiences', fr: 'Expériences des Invités', ar: 'تجارب الضيوف' },
  'guest.subtitle': { en: 'Stories from Our Visitors', fr: 'Récits de Nos Visiteurs', ar: 'قصص من زوارنا' },
  'guest.comingSoon': { en: 'Guest reviews will appear here once verified from trusted sources.', fr: 'Les avis des invités apparaîtront ici une fois vérifiés auprès de sources fiables.', ar: 'ستظهر تقييمات الضيوف هنا بمجرد التحقق منها من مصادر موثوقة.' },

  // Room detail
  'roomDetail.facilities': { en: 'Room Facilities', fr: 'Équipements de la Chambre', ar: 'مرافق الغرفة' },
  'roomDetail.bedConfig': { en: 'Bed Configuration', fr: 'Configuration des Lits', ar: 'تكوين السرير' },
  'roomDetail.maxOccupancy': { en: 'Maximum Occupancy', fr: 'Occupation Maximale', ar: 'الإشغال الأقصى' },
  'roomDetail.roomSize': { en: 'Room Size', fr: 'Taille de la Chambre', ar: 'حجم الغرفة' },
  'roomDetail.bathroom': { en: 'Bathroom', fr: 'Salle de Bain', ar: 'الحمام' },
  'roomDetail.bathroomPrivate': { en: 'Private', fr: 'Privée', ar: 'خاص' },
  'roomDetail.bathroomShared': { en: 'Shared', fr: 'Partagée', ar: 'مشترك' },
  'roomDetail.checkIn': { en: 'Check-in', fr: 'Arrivée', ar: 'تسجيل الوصول' },
  'roomDetail.checkOut': { en: 'Check-out', fr: 'Départ', ar: 'تسجيل المغادرة' },
  'roomDetail.availability': { en: 'Request Availability', fr: 'Demander la Disponibilité', ar: 'طلب التوفر' },
  'roomDetail.bookNow': { en: 'Book This Room', fr: 'Réserver Cette Chambre', ar: 'احجز هذه الغرفة' },
  'roomDetail.whatsapp': { en: 'WhatsApp Reservation', fr: 'Réservation WhatsApp', ar: 'حجز عبر واتساب' },
  'roomDetail.from': { en: 'From', fr: 'À partir de', ar: 'من' },
  'roomDetail.perNight': { en: 'per night', fr: 'par nuit', ar: 'لليلة' },
  'roomDetail.gallery': { en: 'Photo Gallery', fr: 'Galerie Photos', ar: 'معرض الصور' },
  'roomDetail.otherRooms': { en: 'Explore Our Other Rooms', fr: 'Explorez Nos Autres Chambres', ar: 'استكشف غرفنا الأخرى' },
  'roomDetail.guests': { en: 'Guests', fr: 'Invités', ar: 'ضيوف' },
  'roomDetail.adults': { en: 'Adults', fr: 'Adultes', ar: 'بالغون' },
  'roomDetail.children': { en: 'Children', fr: 'Enfants', ar: 'أطفال' },
  'roomDetail.checkInDate': { en: 'Check-in Date', fr: 'Date d\'Arrivée', ar: 'تاريخ الوصول' },
  'roomDetail.checkOutDate': { en: 'Check-out Date', fr: 'Date de Départ', ar: 'تاريخ المغادرة' },
  'roomDetail.nights': { en: 'Nights', fr: 'Nuits', ar: 'ليالٍ' },
  'roomDetail.estimatedTotal': { en: 'Estimated Total', fr: 'Total Estimé', ar: 'الإجمالي المقدر' },
  'roomDetail.sendRequest': { en: 'Send Request via WhatsApp', fr: 'Envoyer la Demande via WhatsApp', ar: 'أرسل الطلب عبر واتساب' },

  // Booking page
  'booking.title': { en: 'Book Your Stay', fr: 'Réservez Votre Séjour', ar: 'احجز إقامتك' },
  'booking.subtitle': { en: 'Begin Your Moroccan Adventure', fr: 'Commencez Votre Aventure Marocaine', ar: 'ابدأ مغامرتك المغربية' },
  'booking.guestName': { en: 'Full Name', fr: 'Nom Complet', ar: 'الاسم الكامل' },
  'booking.email': { en: 'Email Address', fr: 'Adresse Email', ar: 'البريد الإلكتروني' },
  'booking.phone': { en: 'WhatsApp / Phone Number', fr: 'Numéro WhatsApp / Téléphone', ar: 'رقم واتساب / الهاتف' },
  'booking.selectRoom': { en: 'Select Room', fr: 'Choisir la Chambre', ar: 'اختر الغرفة' },
  'booking.checkIn': { en: 'Check-in Date', fr: 'Date d\'Arrivée', ar: 'تاريخ الوصول' },
  'booking.checkOut': { en: 'Check-out Date', fr: 'Date de Départ', ar: 'تاريخ المغادرة' },
  'booking.adults': { en: 'Number of Adults', fr: 'Nombre d\'Adultes', ar: 'عدد البالغين' },
  'booking.children': { en: 'Number of Children', fr: 'Nombre d\'Enfants', ar: 'عدد الأطفال' },
  'booking.specialRequests': { en: 'Special Requests', fr: 'Demandes Spéciales', ar: 'طلبات خاصة' },
  'booking.estimatedTotal': { en: 'Estimated Total', fr: 'Total Estimé', ar: 'الإجمالي المقدر' },
  'booking.sendWhatsApp': { en: 'Send via WhatsApp', fr: 'Envoyer via WhatsApp', ar: 'أرسل عبر واتساب' },
  'booking.payRevolut': { en: 'Pay with Revolut', fr: 'Payer avec Revolut', ar: 'ادفع مع Revolut' },
  'booking.summary': { en: 'Reservation Summary', fr: 'Récapitulatif de Réservation', ar: 'ملخص الحجز' },
  'booking.nights': { en: 'Nights', fr: 'Nuits', ar: 'ليالٍ' },
  'booking.room': { en: 'Room', fr: 'Chambre', ar: 'الغرفة' },
  'booking.checkInTime': { en: 'Check-in time', fr: 'Heure d\'arrivée', ar: 'وقت الوصول' },
  'booking.checkOutTime': { en: 'Check-out time', fr: 'Heure de départ', ar: 'وقت المغادرة' },
  'booking.selectRoomFirst': { en: 'Please select a room', fr: 'Veuillez choisir une chambre', ar: 'يرجى اختيار غرفة' },
  'booking.success': { en: 'Your booking request has been sent via WhatsApp. We will get back to you shortly to confirm availability.', fr: 'Votre demande de réservation a été envoyée via WhatsApp. Nous reviendrons vers vous prochainement pour confirmer la disponibilité.', ar: 'تم إرسال طلب الحجز عبر واتساب. سنعود إليك قريبًا لتأكيد التوفر.' },
  'booking.selectRoomPlaceholder': { en: 'Choose a room...', fr: 'Choisir une chambre...', ar: 'اختر غرفة...' },
  'booking.revolutNote': { en: 'Online payment via Revolut is coming soon. For now, please complete your booking request via WhatsApp.', fr: 'Le paiement en ligne via Revolut arrive bientôt. Pour l\'instant, veuillez compléter votre demande de réservation via WhatsApp.', ar: 'الدفع عبر الإنترنت من خلال Revolut قريبًا. في الوقت الحالي، يرجى إكمال طلب الحجز عبر واتساب.' },
  'booking.requestSent': { en: 'Request Sent', fr: 'Demande Envoyée', ar: 'تم إرسال الطلب' },
  'booking.sendAnother': { en: 'Send Another Request', fr: 'Envoyer Une Autre Demande', ar: 'أرسل طلبًا آخر' },

  // Footer
  'footer.about': { en: 'A traditional Moroccan boutique riad in the heart of Marrakech, offering authentic accommodation and warm hospitality.', fr: 'Un riad boutique marocain traditionnel au cœur de Marrakech, offrant un hébergement authentique et une chaleureuse hospitalité.', ar: 'رياض مغربي تقليدي بوتيك في قلب مراكش، يقدم إقامة أصيلة وضيافة دافئة.' },
  'footer.quickLinks': { en: 'Quick Links', fr: 'Liens Rapides', ar: 'روابط سريعة' },
  'footer.contact': { en: 'Contact', fr: 'Contact', ar: 'اتصل بنا' },
  'footer.newsletter': { en: 'Newsletter', fr: 'Newsletter', ar: 'النشرة الإخبارية' },
  'footer.newsletterDesc': { en: 'Subscribe to receive updates and special offers.', fr: 'Abonnez-vous pour recevoir des mises à jour et des offres spéciales.', ar: 'اشترك لتصلك التحديثات والعروض الخاصة.' },
  'footer.subscribe': { en: 'Subscribe', fr: 'S\'abonner', ar: 'اشترك' },
  'footer.emailPlaceholder': { en: 'Your email address', fr: 'Votre adresse email', ar: 'بريدك الإلكتروني' },
  'footer.whatsapp': { en: 'Book via WhatsApp', fr: 'Réserver via WhatsApp', ar: 'احجز عبر واتساب' },
  'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.' },
  'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية' },
  'footer.terms': { en: 'Terms & Conditions', fr: 'Conditions Générales', ar: 'الشروط والأحكام' },

  // About page
  'about.title': { en: 'About Riad Tofaha', fr: 'À Propos du Riad Tofaha', ar: 'عن رياض تفاحة' },
  'about.story': { en: 'Our Story', fr: 'Notre Histoire', ar: 'قصتنا' },
  'about.whyRiad': { en: 'Why Stay With Us', fr: 'Pourquoi Séjourner Chez Nous', ar: 'لماذا تقيم معنا' },

  // Gallery
  'gallery.title': { en: 'Gallery', fr: 'Galerie', ar: 'المعرض' },
  'gallery.subtitle': { en: 'A Visual Journey Through Riad Tofaha', fr: 'Un Voyage Visuel à Travers le Riad Tofaha', ar: 'رحلة بصرية عبر رياض تفاحة' },
  'gallery.all': { en: 'All', fr: 'Tout', ar: 'الكل' },
  'gallery.architecture': { en: 'Architecture', fr: 'Architecture', ar: 'العمارة' },
  'gallery.courtyard': { en: 'Courtyard', fr: 'Cour', ar: 'الفناء' },
  'gallery.rooms': { en: 'Rooms', fr: 'Chambres', ar: 'الغرف' },
  'gallery.interior': { en: 'Interior', fr: 'Intérieur', ar: 'الديكور الداخلي' },
  'gallery.details': { en: 'Details', fr: 'Détails', ar: 'التفاصيل' },
  'gallery.commonAreas': { en: 'Common Areas', fr: 'Espaces Communs', ar: 'المناطق المشتركة' },

  // Contact
  'contact.title': { en: 'Contact Us', fr: 'Contactez-Nous', ar: 'اتصل بنا' },
  'contact.subtitle': { en: 'We\'re Here to Help', fr: 'Nous Sommes Là pour Vous Aider', ar: 'نحن هنا لمساعدتك' },
  'contact.name': { en: 'Your Name', fr: 'Votre Nom', ar: 'اسمك' },
  'contact.email': { en: 'Your Email', fr: 'Votre Email', ar: 'بريدك الإلكتروني' },
  'contact.subject': { en: 'Subject', fr: 'Sujet', ar: 'الموضوع' },
  'contact.message': { en: 'Your Message', fr: 'Votre Message', ar: 'رسالتك' },
  'contact.send': { en: 'Send Message', fr: 'Envoyer le Message', ar: 'أرسل الرسالة' },
  'contact.sent': { en: 'Your message has been sent successfully. We will get back to you soon.', fr: 'Votre message a été envoyé avec succès. Nous reviendrons vers vous bientôt.', ar: 'تم إرسال رسالتك بنجاح. سنعود إليك قريبًا.' },
  'contact.whatsapp': { en: 'Chat on WhatsApp', fr: 'Discuter sur WhatsApp', ar: 'تحدث عبر واتساب' },
  'contact.faq': { en: 'Frequently Asked Questions', fr: 'Questions Fréquentes', ar: 'الأسئلة الشائعة' },
  'contact.addressLabel': { en: 'Address', fr: 'Adresse', ar: 'العنوان' },
  'contact.emailLabel': { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phoneLabel': { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف' },

  // Blog
  'blog.title': { en: 'Blog', fr: 'Blog', ar: 'المدونة' },
  'blog.subtitle': { en: 'Marrakech Travel, Culture & Inspiration', fr: 'Voyage, Culture & Inspiration à Marrakech', ar: 'سفر وثقافة وإلهام في مراكش' },
  'blog.featured': { en: 'Featured Article', fr: 'Article en Vedette', ar: 'مقال مميز' },
  'blog.allArticles': { en: 'All Articles', fr: 'Tous les Articles', ar: 'كل المقالات' },
  'blog.searchPlaceholder': { en: 'Search articles...', fr: 'Rechercher des articles...', ar: 'ابحث عن المقالات...' },
  'blog.allCategories': { en: 'All Categories', fr: 'Toutes les Catégories', ar: 'كل الفئات' },
  'blog.readMore': { en: 'Read More', fr: 'Lire Plus', ar: 'اقرأ المزيد' },
  'blog.readingTime': { en: 'min read', fr: 'min de lecture', ar: 'دقيقة قراءة' },
  'blog.related': { en: 'Related Articles', fr: 'Articles Connexes', ar: 'مقالات ذات صلة' },
  'blog.share': { en: 'Share', fr: 'Partager', ar: 'مشاركة' },
  'blog.noResults': { en: 'No articles found. Try a different search.', fr: 'Aucun article trouvé. Essayez une autre recherche.', ar: 'لم يتم العثور على مقالات. جرب بحثًا آخر.' },
  'blog.by': { en: 'by', fr: 'par', ar: 'بواسطة' },
  'blog.backToBlog': { en: 'Back to Blog', fr: 'Retour au Blog', ar: 'العودة إلى المدونة' },
  'blog.publishedOn': { en: 'Published on', fr: 'Publié le', ar: 'نُشر في' },

  // FAQ
  'faq.checkIn': { en: 'What time is check-in and check-out?', fr: 'Quelles sont les heures d\'arrivée et de départ ?', ar: 'ما هو وقت تسجيل الوصول والمغادرة؟' },
  'faq.checkInAns': { en: 'Check-in is from 14:00 and check-out is by 11:00. Early check-in or late check-out can be arranged subject to availability.', fr: 'L\'arrivée est à partir de 14h00 et le départ est avant 11h00. Une arrivée anticipée ou un départ tardif peut être arrangé selon la disponibilité.', ar: 'تسجيل الوصول من الساعة 14:00 وتسجيل المغادرة بحلول الساعة 11:00. يمكن ترتيب تسجيل وصول مبكر أو مغادرة متأخرة حسب التوفر.' },
  'faq.booking': { en: 'How do I make a reservation?', fr: 'Comment faire une réservation ?', ar: 'كيف أحجز؟' },
  'faq.bookingAns': { en: 'You can request a reservation through our website\'s booking form or via WhatsApp. We will confirm availability and guide you through the next steps.', fr: 'Vous pouvez demander une réservation via le formulaire de réservation de notre site web ou via WhatsApp. Nous confirmerons la disponibilité et vous guiderons à travers les prochaines étapes.', ar: 'يمكنك طلب حجز عبر نموذج الحجز على موقعنا أو عبر واتساب. سنؤكد التوفر ونرشدك خلال الخطوات التالية.' },
  'faq.payment': { en: 'What payment methods are available?', fr: 'Quels sont les moyens de paiement disponibles ?', ar: 'ما هي طرق الدفع المتاحة؟' },
  'faq.paymentAns': { en: 'Currently, reservations are confirmed via WhatsApp. Online payment options are being integrated and will be available soon.', fr: 'Actuellement, les réservations sont confirmées via WhatsApp. Les options de paiement en ligne sont en cours d\'intégration et seront bientôt disponibles.', ar: 'حاليًا، يتم تأكيد الحجوزات عبر واتساب. خيارات الدفع عبر الإنترنت قيد التكامل وستكون متاحة قريبًا.' },
  'faq.location': { en: 'Where is Riad Tofaha located?', fr: 'Où se trouve le Riad Tofaha ?', ar: 'أين يقع رياض تفاحة؟' },
  'faq.locationAns': { en: 'Riad Tofaha is located in Marrakech, Morocco. Exact location details will be provided upon booking confirmation.', fr: 'Le Riad Tofaha est situé à Marrakech, Maroc. Les détails exacts de l\'emplacement seront fournis lors de la confirmation de la réservation.', ar: 'يقع رياض تفاحة في مراكش، المغرب. سيتم تقديم تفاصيل الموقع الدقيقة عند تأكيد الحجز.' },
  'faq.airport': { en: 'How far is the airport?', fr: 'À quelle distance se trouve l\'aéroport ?', ar: 'ما بعد المطار؟' },
  'faq.airportAns': { en: 'Marrakech Menara Airport is approximately 15-20 minutes by taxi from the Medina. We can help arrange airport transfers upon request.', fr: 'L\'aéroport de Marrakech Menara est à environ 15-20 minutes en taxi de la Médina. Nous pouvons aider à organiser des transferts depuis l\'aéroport sur demande.', ar: 'مطار مراكش المنارة يبعد حوالي 15-20 دقيقة بالسيارة من المدينة القديمة. يمكننا المساعدة في ترتيب transfers من المطار عند الطلب.' },

  // Experiences page
  'experiencesPage.title': { en: 'Experiences in Marrakech', fr: 'Expériences à Marrakech', ar: 'تجارب في مراكش' },
  'experiencesPage.subtitle': { en: 'Discover the endless wonders of the Red City', fr: 'Découvrez les merveilles infinies de la Ville Rouge', ar: 'اكتشف عجائب المدينة الحمراء التي لا تنتهي' },
  'experiencesPage.readMore': { en: 'Read More', fr: 'Lire Plus', ar: 'اقرأ المزيد' },

  // Common
  'common.loading': { en: 'Loading...', fr: 'Chargement...', ar: 'جاري التحميل...' },
  'common.error': { en: 'Something went wrong. Please try again.', fr: 'Une erreur s\'est produite. Veuillez réessayer.', ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.' },
  'common.close': { en: 'Close', fr: 'Fermer', ar: 'إغلاق' },
  'common.previous': { en: 'Previous', fr: 'Précédent', ar: 'السابق' },
  'common.next': { en: 'Next', fr: 'Suivant', ar: 'التالي' },
  'common.guests': { en: 'Guests', fr: 'Invités', ar: 'ضيوف' },

  // Admin
  'admin.title': { en: 'Admin Dashboard', fr: 'Tableau de Bord Admin', ar: 'لوحة التحكم' },
  'admin.login': { en: 'Login', fr: 'Connexion', ar: 'تسجيل الدخول' },
  'admin.email': { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني' },
  'admin.password': { en: 'Password', fr: 'Mot de Passe', ar: 'كلمة المرور' },
  'admin.signIn': { en: 'Sign In', fr: 'Se Connecter', ar: 'تسجيل الدخول' },
  'admin.signOut': { en: 'Sign Out', fr: 'Se Déconnecter', ar: 'تسجيل الخروج' },
  'admin.overview': { en: 'Overview', fr: 'Aperçu', ar: 'نظرة عامة' },
  'admin.rooms': { en: 'Rooms', fr: 'Chambres', ar: 'الغرف' },
  'admin.reservations': { en: 'Reservations', fr: 'Réservations', ar: 'الحجوزات' },
  'admin.blog': { en: 'Blog', fr: 'Blog', ar: 'المدونة' },
  'admin.settings': { en: 'Settings', fr: 'Paramètres', ar: 'الإعدادات' },
  'admin.messages': { en: 'Messages', fr: 'Messages', ar: 'الرسائل' },
};

export function translate(key: string, lang: Language): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.en || key;
}

export function getLocalizedText(text: LocalizedText | null | undefined, lang: Language): string {
  if (!text) return '';
  return text[lang] || text.en || '';
}

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}
