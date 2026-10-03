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

    // About Us Page (EN)
    'about.heroTagline': 'ABOUT RIAD TOFAHA',
    'about.heroTitle': 'A Newly Renovated Haven in the Heart of the Medina',
    'about.heroSubtitle': 'Blending centuries-old Moroccan craftsmanship with contemporary luxury, Riad Tofaha offers a tranquil oasis just steps away from Marrakech’s historic treasures.',
    
    'about.storyTag': 'THE TOFAHA CONCEPT',
    'about.storyTitle': 'Where Traditional Elegance Meets Modern Comfort',
    'about.storyP1': 'Riad Tofaha is a newly restored boutique Riad, thoughtfully designed to offer guests an authentic Moroccan stay with high-end modern amenities. Located in the historical Medina of Marrakech, our Riad showcases hand-crafted Zellige tilework, intricate carved plaster, and warm wooden architecture.',
    'about.storyP2': 'Designed as a peaceful sanctuary, thick traditional walls insulate the interior from the lively energy of the surrounding alleys, creating a calm and intimate atmosphere for relaxation after a day of exploring.',

    'about.locationTag': 'LOCATION & ACCESSIBILITY',
    'about.locationTitle': 'Prime Medina Location & Rare Vehicle Access',
    
    'about.feature1Title': '15 Mins to Jemaa el-Fnaa',
    'about.feature1Desc': 'Situated in a peaceful neighborhood, just a pleasant 15-minute walk through historic alleys to Marrakech’s world-famous central square and lively souks.',

    'about.feature2Title': 'Direct Car & Luggage Access',
    'about.feature2Desc': 'A rare and prized privilege in the Medina: taxis and cars can pull up directly in front of Riad Tofaha for effortless luggage drop-off.',

    'about.feature3Title': 'Guarded Parking Nearby',
    'about.feature3Desc': 'Located just moments away from a secure, guarded public parking lot, making road trips and rental cars completely stress-free.',

    'about.feature4Title': 'Peaceful & Quiet Refuge',
    'about.feature4Desc': 'Enjoy absolute tranquility inside the Riad. Step out into the vibrant culture of Marrakech, then return to undisturbed peace and quiet.',

    'about.facilitiesTag': 'RIAD HIGHLIGHTS',
    'about.facilitiesTitle': 'Designed for Your Ultimate Comfort',
    'about.facility1Title': '4 Independent Boutique Rooms',
    'about.facility1Desc': 'Intimate, climate-controlled rooms featuring comfortable bedding, private bathrooms, and refined decor.',
    'about.facility2Title': 'Rooftop Sun Terrace',
    'about.facility2Desc': 'A panoramic roof terrace ideal for enjoying breakfast under the sun or relaxing during warm Marrakech evenings.',
    'about.facility3Title': 'Fully Equipped Shared Kitchen',
    'about.facility3Desc': 'Feel at home with access to a modern shared kitchen for preparing teas, snacks, and personal meals.',
    'about.facility4Title': 'Warm Personalized Hospitality',
    'about.facility4Desc': 'Hosted with genuine care and local knowledge by Khalid, ensuring every guest feels welcomed like family.',

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

    // About Us Page (FR)
    'about.heroTagline': 'À PROPOS DU RIAD TOFAHA',
    'about.heroTitle': 'Un Havre de Paix Récemment Rénové au Cœur de la Médina',
    'about.heroSubtitle': 'Alliant l’artisanat marocain traditionnel au confort contemporain, le Riad Tofaha offre une oasis de tranquillité à deux pas des trésors historiques de Marrakech.',
    
    'about.storyTag': 'LE CONCEPT TOFAHA',
    'about.storyTitle': 'Où l’Élégance Traditionnelle Rencontre le Confort Moderne',
    'about.storyP1': 'Le Riad Tofaha est un riad récemment rénové, pensé pour offrir à ses hôtes une expérience marocaine authentique dotée de tout le confort moderne. Situé dans la médina historique, il met à l’honneur le zellige fait main, le plâtre sculpté et l’architecture en bois noble.',
    'about.storyP2': 'Conçu comme un véritable havre de paix, ses murs épais vous isolent parfaitement de l’animation des ruelles extérieures, créant une atmosphère calme et intimiste pour vous détendre après une journée d’exploration.',

    'about.locationTag': 'LOCALISATION ET ACCÈS',
    'about.locationTitle': 'Emplacement Idéal & Accès Rare en Voiture',
    
    'about.feature1Title': 'À 15 Min de Jemaa el-Fnaa',
    'about.feature1Desc': 'Niché dans un quartier calme, le riad se trouve à seulement 15 minutes à pied de la célèbre place Jemaa el-Fnaa et des souks animés.',

    'about.feature2Title': 'Dépose-Bagages Devant la Porte',
    'about.feature2Desc': 'Un privilège rare en Médina : les taxis et voitures peuvent s’arrêter directement devant le Riad Tofaha pour décharger vos bagages sans effort.',

    'about.feature3Title': 'Parking Sécurisé à Proximité',
    'about.feature3Desc': 'Situé à deux pas d’un parking public gardé et sécurisé, idéal pour vos déplacements en voiture ou vos véhicules de location.',

    'about.feature4Title': 'Havre de Paix et de Sérénité',
    'about.feature4Desc': 'Profitez d’un calme absolu à l’intérieur du Riad. Explorez la médina vibrante la journée et retrouvez la sérénité totale le soir.',

    'about.facilitiesTag': 'LES POINTS FORTS DU RIAD',
    'about.facilitiesTitle': 'Pensé Pour Votre Plus Grand Confort',
    'about.facility1Title': '4 Chambres Belles & Indépendantes',
    'about.facility1Desc': 'Chambres climatisées, literie confortable, salle de bain privative et décoration soignée.',
    'about.facility2Title': 'Terrasse Panoramique sur le Toit',
    'about.facility2Desc': 'Une belle terrasse sur le toit idéale pour savourer le petit-déjeuner au soleil ou se détendre le soir.',
    'about.facility3Title': 'Cuisine Commune Équipée',
    'about.facility3Desc': 'Profitez d’une cuisine commune moderne et équipée pour préparer vos thés, collations et repas légers.',
    'about.facility4Title': 'Hospitalité Chaleureuse & Attentionnée',
    'about.facility4Desc': 'Un accueil personnalisé et bienveillant assuré par Khalid, pour vous faire sentir comme chez vous dès votre arrivée.',

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

    // About Us Page (AR)
    'about.heroTagline': 'عن رياض تفاحة',
    'about.heroTitle': 'واحة هادئة ومجددة حديثاً في قلب المدينة القديمة',
    'about.heroSubtitle': 'يجمع رياض تفاحة بين أصالة المعمار المغربي العريق والراحة العصريّة الرفيعة، ليوفر لك ملاذاً هادئاً على بُعد خطوات من أبرز معالم مراكش التاريخية.',
    
    'about.storyTag': 'مفهوم رياض تفاحة',
    'about.storyTitle': 'حيث تلتقي الأصالة المغربية بالراحة الحديثة',
    'about.storyP1': 'رياض تفاحة هو رياض بوتيك مُجدد بالكامل ومصمم بعناية ليمنح زواره إقامة مغربية أصيلة مع أحدث وسائل الراحة. يقع الرياض في قلب المدينة العتيقة لمراكش، وتتزين أركانه بالزليج التقليدي المصنوع يدوياً، والجبس المنقوش بدقة، مع اللمسات الخشبية الدافئة.',
    'about.storyP2': 'تم تصميم الرياض ليكون ملاذاً هادئاً بامتياز؛ إذ تعزلك جدرانه التقليدية السميكة تماماً عن صخب الأزقة الخارجية، مما يخلق أجواءً ساحرة من السكينة والهدوء والراحة المطلقة بعد يوم حافل باستكشاف مراكش.',

    'about.locationTag': 'الموقع وسهولة الوصول',
    'about.locationTitle': 'موقع استراتيجي بالمدينة العتيقة وسهولة وصول السيارات',
    
    'about.feature1Title': '15 دقيقة عن ساحة جامع الفناء',
    'about.feature1Desc': 'يقع الرياض في حي هادئ وأصيل، يبعد 15 دقيقة فقط سيراً على الأقدام عبر أزقة المدينة القديمة للوصول لساحة جامع الفناء الشهيرة والأسواق التقليدية.',

    'about.feature2Title': 'توقف السيارة أمام باب الرياض',
    'about.feature2Desc': 'ميزة نادرة واستثنائية بالمدينة القديمة: يمكن للسيارات وسيارات الأجرة التوقف أمام باب الرياض مباشرة لتنزيل وتحميل الأمتعة بكل أريحية.',

    'about.feature3Title': 'موقف سيارات آمن قريب جداً',
    'about.feature3Desc': 'يقع الرياض على بُعد خطوات قصيرة من موقف سيارات آمن ومحروس، مما يجعل استخدام سيارات الكراء والتنقلات أمراً ميسراً.',

    'about.feature4Title': 'سكينة وهدوء مطلق',
    'about.feature4Desc': 'استمتع بالهدوء التام والراحة داخل الرياض، حيث يمكنك استكشاف حيوية مراكش نهاراً والعودة للاسترخاء في سكينة تامة ليلاً.',

    'about.facilitiesTag': 'مميزات الرياض',
    'about.facilitiesTitle': 'مصمم خصيصاً لراحتك التامة',
    'about.facility1Title': '4 غرف نوم مستقلة وأنيقة',
    'about.facility1Desc': 'غرف مجهزة بتكييف هواء، أسرة مريحة، حمامات خاصة، وتصميم داخلي راقٍ يعكس سحر الضيافة.',
    'about.facility2Title': 'تراس مشمس على السطح',
    'about.facility2Desc': 'تراس بانورامي ساحر على السطح للاستمتاع بوجبة الإفطار تحت أشعة الشمس أو الاسترخاء في أمسيات مراكش الدافئة.',
    'about.facility3Title': 'مطبخ مشترك مجهز بالكامل',
    'about.facility3Desc': 'مطبخ حديث ومجهز بالكامل متاح لجميع الضيوف لإعداد الشاي، المشروبات، والوجبات الخفيفة بحرية.',
    'about.facility4Title': 'ضيافة واستقبال حار',
    'about.facility4Desc': 'استقبال شخصي وحار يقدمه المضيف خالد، مع الحرص على تلبية كافة احتياجاتك لتشعر وكأنك في بيتك.',

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

    // About Us Page (ES)
    'about.heroTagline': 'SOBRE RIAD TOFAHA',
    'about.heroTitle': 'Un Refugio Recientemente Renovado en el Corazón de la Medina',
    'about.heroSubtitle': 'Combinando la artesanía marroquí tradicional con el confort contemporáneo, Riad Tofaha ofrece un oasis de tranquilidad a pocos pasos de los tesoros históricos de Marrakech.',
    
    'about.storyTag': 'EL CONCEPTO TOFAHA',
    'about.storyTitle': 'Donde la Elegancia Tradicional se Une al Confort Moderno',
    'about.storyP1': 'Riad Tofaha es un Riad boutique recientemente restaurado, diseñado para ofrecer una estancia marroquí auténtica con comodidades modernas. Ubicado en la Medina histórica, destaca por sus azulejos Zellige hechos a mano, yeso esculpido y madera noble.',
    'about.storyP2': 'Diseñado como un santuario tranquilo, sus gruesos muros aislan el interior del bullicio de los callejones, creando una atmósfera serena para relajarse tras un día explorando Marrakech.',

    'about.locationTag': 'UBICACIÓN Y ACCESO',
    'about.locationTitle': 'Ubicación Privilegiada y Acceso Exclusivo en Vehículo',
    
    'about.feature1Title': 'A 15 Min de Jemaa el-Fnaa',
    'about.feature1Desc': 'Ubicado en un barrio tranquilo, a solo 15 minutos a pie por históricas callejuelas hasta la famosa plaza central y los vibrantes zocos.',

    'about.feature2Title': 'Descarga de Equipaje en la Puerta',
    'about.feature2Desc': 'Un privilegio exclusivo en la Medina: taxis y coches pueden parar directamente frente a Riad Tofaha para descargar equipaje fácilmente.',

    'about.feature3Title': 'Aparcamiento Vigilado Cercano',
    'about.feature3Desc': 'Situado a pocos pasos de un aparcamiento público vigilado y seguro, ideal para coches de alquiler o viajes en carretera.',

    'about.feature4Title': 'Un Oasis de Paz y Silencio',
    'about.feature4Desc': 'Disfrute de tranquilidad absoluta dentro del Riad. Explore la animada Medina de día y regrese a la calma total de noche.',

    'about.facilitiesTag': 'LO DESTACADO DEL RIAD',
    'about.facilitiesTitle': 'Diseñado para su Máxima Comodidad',
    'about.facility1Title': '4 Habitaciones Independientes',
    'about.facility1Desc': 'Habitaciones climatizadas con ropa de cama de primera calidad, baño privado y decoración cuidada.',
    'about.facility2Title': 'Terraza en la Azotea',
    'about.facility2Desc': 'Una hermosa terraza panorámica ideal para disfrutar del desayuno al sol o relajarse al atardecer.',
    'about.facility3Title': 'Cocina Compartida Equipada',
    'about.facility3Desc': 'Siéntase como en casa con acceso a una cocina compartida equipada para preparar tés, aperitivos o comidas ligeras.',
    'about.facility4Title': 'Hospitalidad Cálida y Personalizada',
    'about.facility4Desc': 'Atención atenta y cálida brindada por Khalid, asegurando que cada huésped se sienta bienvenido desde su llegada.',

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
