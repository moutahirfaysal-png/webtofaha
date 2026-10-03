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

    'about.herotagline': 'ABOUT RIAD TOFAHA',
    'about.herotitle': 'A Modern & Traditional Haven in Marrakech Medina',
    'about.herosubtitle': 'Newly renovated with a perfect blend of authentic Moroccan architecture and modern luxury. Situated in the historic Medina with rare direct car access.',
    
    'about.storytag': 'THE TOFAHA EXPERIENCE',
    'about.storytitle': 'Authentic Charm Meets Modern Elegance',
    'about.storyp1': 'Riad Tofaha is a newly restored boutique Riad located in the heart of the historic Medina of Marrakech. It uniquely combines traditional Moroccan craftsmanship—such as handcrafted Zellige tiles, carved plaster, and warm wooden accents—with sleek, contemporary comfort.',
    'about.storyp2': 'Despite being in the vibrant center of the Medina, the Riad is designed as an intimate and quiet sanctuary. Its thick traditional walls create an oasis of peace and serenity, allowing you to relax undisturbed after a day of sightseeing.',

    'about.locationtag': 'LOCATION & EASY ACCESS',
    'about.locationtitle': 'Prime Location & Unmatched Convenience',
    
    'about.feature1title': '15 Minutes to Jemaa el-Fnaa',
    'about.feature1desc': 'Located in an authentic and safe neighborhood, just a pleasant 15-minute walk through historic Medina alleys to the famous Jemaa el-Fnaa square.',

    'about.feature2title': 'Car & Luggage Drop-off at the Door',
    'about.feature2desc': 'A rare advantage in the Medina: taxis and cars can stop directly in front of the Riad door to unload your luggage smoothly and effortlessly.',

    'about.feature3title': 'Guarded Parking Nearby',
    'about.feature3desc': 'Situated just a few steps away from a secure, guarded public parking area, making rental cars and road trips completely hassle-free.',

    'about.feature4title': 'Peaceful & Quiet Oasis',
    'about.feature4desc': 'Enjoy total peace and quiet inside the Riad, offering a restful escape from the lively energy of the surrounding markets.',

    'about.facilitiestag': 'RIAD HIGHLIGHTS',
    'about.facilitiestitle': 'Everything Designed for Your Comfort',
    'about.facility1title': '4 Independent Deluxe Rooms',
    'about.facility1desc': 'Intimate, climate-controlled rooms featuring comfortable bedding, private bathrooms, and refined traditional decor.',
    'about.facility2title': 'Panoramic Rooftop Terrace',
    'about.facility2desc': 'A beautiful sun-drenched roof terrace perfect for enjoying morning breakfast or relaxing during warm Marrakech evenings.',
    'about.facility3title': 'Fully Equipped Shared Kitchen',
    'about.facility3desc': 'Enjoy the convenience of a modern shared kitchen to prepare tea, snacks, or personal meals whenever you wish.',
    'about.facility4title': 'Warm Personalized Hospitality',
    'about.facility4desc': 'Hosted with genuine care and local recommendations by Khalid, ensuring every guest feels welcomed like family.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.rooms': 'Nos Chambres',
    'nav.gallery': 'Galerie',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.booknow': 'Réserver',

    'about.herotagline': 'À PROPOS DU RIAD TOFAHA',
    'about.herotitle': 'Un Havre Moderne et Traditionnel au Cœur de la Médina',
    'about.herosubtitle': 'Récemment rénové, alliant avec élégance l’architecture marocaine authentique au confort contemporain. Idéalement situé avec un accès voiture rare.',
    
    'about.storytag': 'L’EXPÉRIENCE TOFAHA',
    'about.storytitle': 'Quand le Charme Traditionnel Rencontre l’Élégance Moderne',
    'about.storyp1': 'Le Riad Tofaha est un riad récemment rénové situé au cœur de la médina historique de Marrakech. Il associe subtilement l’artisanat traditionnel marocain (zelliges faits main, plâtres sculptés, bois noble) à des équipements modernes et raffinés.',
    'about.storyp2': 'Bien que situé au cœur de la Médina, le riad est un véritable havre de paix. Ses murs traditionnels vous préservent totalement de l’agitation extérieure, offrant une atmosphère calme, intime et reposante.',

    'about.locationtag': 'LOCALISATION & ACCÈS',
    'about.locationtitle': 'Emplacement Idéal & Accès Voiture Unique',
    
    'about.feature1title': 'À 15 Min de Jemaa el-Fnaa',
    'about.feature1desc': 'Niché dans un quartier authentique, à seulement 15 minutes à pied de la célèbre place Jemaa el-Fnaa et des souks animés.',

    'about.feature2title': 'Dépose-Bagages Devant la Porte',
    'about.feature2desc': 'Un privilège rare en Médina : les taxis et voitures peuvent s’arrêter directement devant la porte du Riad pour décharger vos bagages sans effort.',

    'about.feature3title': 'Parking Gardé à Proximité',
    'about.feature3desc': 'Situé à seulement quelques pas d’un parking public sécurisé et gardé, idéal si vous venez en voiture.',

    'about.feature4title': 'Calme et Sérénité Absolue',
    'about.feature4desc': 'Profitez d’un silence apaisant à l’intérieur du Riad pour vous ressourcer après vos journées de visite.',

    'about.facilitiestag': 'LES POINTS FORTS',
    'about.facilitiestitle': 'Pensé Pour Votre Plus Grand Confort',
    'about.facility1title': '4 Chambres Indépendantes',
    'about.facility1desc': 'Chambres climatisées, literie haut de gamme, salle de bain privative et décoration traditionnelle soignée.',
    'about.facility2title': 'Terrasse Panoramique sur le Toit',
    'about.facility2desc': 'Une magnifique terrasse sur le toit pour prendre le petit-déjeuner au soleil ou se détendre le soir.',
    'about.facility3title': 'Cuisine Commune Équipée',
    'about.facility3desc': 'Accès libre à une cuisine commune moderne pour préparer votre thé, des boissons fraîches ou des repas légers.',
    'about.facility4title': 'Accueil Chaleureux & Personnalisé',
    'about.facility4desc': 'Un accueil attentionné assuré par Khalid, toujours disponible pour rendre votre séjour inoubliable.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.rooms': 'غرفنا',
    'nav.gallery': 'المعرض',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.booknow': 'احجز الآن',

    'about.herotagline': 'عن رياض تفاحة',
    'about.herotitle': 'رياض جديد يجمع بين الأصالة والعصرنة في قلب المدينة العتيقة',
    'about.herosubtitle': 'رياض مُجدد حديثاً يمزج بسحر بين المعمار المغربي التقليدي والراحة العصريّة. موقع استراتيجي وتسهيلات وصول ممتازة بالسيارة.',
    
    'about.storytag': 'تجربة رياض تفاحة',
    'about.storytitle': 'حيث تلتقي الأصالة المغربية بالراحة الحديثة',
    'about.storyp1': 'رياض تفاحة هو رياض بوتيك مُجدد بالكامل يقع في قلب المدينة القديمة لمراكش. يتميز بتصميمه المتقن الذي يجمع بين الصناعة التقليدية المغربية (الزليج اليدوي، الجبس المنقوش، والتفاصيل الخشبية الدافئة) مع لمسات هندسية حديثة وأسرة فاخرة.',
    'about.storyp2': 'رغم موقعه الحيوّي بالمدينة القديمة، فإن الرياض يُعد ملاذاً هادئاً بامتياز؛ حيث تعزلك جدرانه السميكة عن صخب الأزقة الخارجية، مما يوفر لك سكينة تامة وراحة مطلقة بعد يوم ممتع في استكشاف مراكش.',

    'about.locationtag': 'الموقع وسهولة الوصول',
    'about.locationtitle': 'موقع استراتيجي وسهولة وصول السيارات للأمتعة',
    
    'about.feature1title': '15 دقيقة عن ساحة جامع الفناء',
    'about.feature1desc': 'يقع الرياض في حي أصيل وهادئ، ويبعد 15 دقيقة فقط سيراً على الأقدام عبر أزقة المدينة للوصول لساحة جامع الفناء الشهيرة والأسواق.',

    'about.feature2title': 'توقف السيارة أمام باب الرياض',
    'about.feature2desc': 'مزية نادرة واستثنائية بالمدينة القديمة: يمكن للسيارات وسيارات الأجرة التوقف أمام باب الرياض مباشرة لتنزيل وتحميل الأمتعة بكل سهولة.',

    'about.feature3title': 'موقف سيارات آمن قريب جداً',
    'about.feature3desc': 'على بُعد خطوات قصيرة جداً من موقف سيارات آمن ومحروس، مما يجعل التنقل بالسيارة أمراً ميسراً وبدون أي عناء.',

    'about.feature4title': 'سكينة وهدوء مطلق',
    'about.feature4desc': 'استمتع بالهدوء التام والراحة داخل الرياض، حيث تعود للاسترخاء في أجواء مريحة بعيداً عن صخب المدينة.',

    'about.facilitiestag': 'مميزات الرياض',
    'about.facilitiestitle': 'كل ما تحتاجه لإقامة مريحة',
    'about.facility1title': '4 غرف نوم مستقلة وأنيقة',
    'about.facility1desc': 'غرف مجهزة بتكييف هواء، أسرة مريحة، حمامات خاصة، وتصميم فريد يجمع بين التقليدي والحديث.',
    'about.facility2title': 'تراس مشمس ساحر على السطح',
    'about.facility2desc': 'تراس رائع على السطح للاستمتاع بوجبة الإفطار تحت أشعة الشمس أو الاسترخاء في أمسيات مراكش الدافئة.',
    'about.facility3title': 'مطبخ مشترك مجهز بالكامل',
    'about.facility3desc': 'مطبخ حديث ومجهز متاح لجميع الضيوف لإعداد الشاي والوجبات الخفيفة بحرية تامة وكأنك في بيتك.',
    'about.facility4title': 'استقبال وضيافة حارة',
    'about.facility4desc': 'ترحيب شخصي وحار يضمنه المضيف خالد، مع تقديم كافة النصائح والتسهيلات لتستمتع بإقامتك.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.rooms': 'Habitaciones',
    'nav.gallery': 'Galería',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.booknow': 'Reservar',

    'about.herotagline': 'SOBRE RIAD TOFAHA',
    'about.herotitle': 'Un Refugio Moderno y Tradicional en la Medina',
    'about.herosubtitle': 'Recientemente renovado, combinando la arquitectura marroquí auténtica con el confort contemporáneo. Excelente ubicación con acceso directo para coches.',
    
    'about.storytag': 'LA EXPERIENCIA TOFAHA',
    'about.storytitle': 'Encanto Tradicional y Elegancia Moderna',
    'about.storyp1': 'Riad Tofaha es un Riad boutique recientemente restaurado en el corazón de la Medina de Marrakech. Destaca por su artesanía tradicional (azulejos Zellige, yeso esculpido) combinada con comodidades modernas.',
    'about.storyp2': 'A pesar de estar en el centro de la Medina, el Riad es un santuario tranquilo. Sus muros tradicionales aislarán el bullicio exterior ofreciendo serenidad total.',

    'about.locationtag': 'UBICACIÓN Y ACCESO',
    'about.locationtitle': 'Ubicación Privilegiada y Acceso Fácil',
    
    'about.feature1title': 'A 15 Min de Jemaa el-Fnaa',
    'about.feature1desc': 'A solo 15 minutos a pie de la famosa plaza Jemaa el-Fnaa y los zocos tradicionales.',

    'about.feature2title': 'Acceso de Coche hasta la Puerta',
    'about.feature2desc': 'Una ventaja exclusiva: taxis y coches pueden parar directamente frente a la puerta del Riad para bajar el equipaje.',

    'about.feature3title': 'Aparcamiento Vigilado Cercano',
    'about.feature3desc': 'Ubicado a pocos pasos de un aparcamiento público vigilado y seguro.',

    'about.feature4title': 'Tranquilidad y Paz Total',
    'about.feature4desc': 'Disfrute de un ambiente silencioso y relajante dentro del Riad.',

    'about.facilitiestag': 'LO DESTACADO',
    'about.facilitiestitle': 'Diseñado para su Comodidad',
    'about.facility1title': '4 Habitaciones Independientes',
    'about.facility1desc': 'Habitaciones climatizadas con ropa de cama de calidad y baño privado.',
    'about.facility2title': 'Terraza en la Azotea',
    'about.facility2desc': 'Una hermosa terraza ideal para desayunar al sol o relajarse al atardecer.',
    'about.facility3title': 'Cocina Compartida Equipada',
    'about.facility3desc': 'Cocina moderna totalmente equipada a disposición de los huéspedes.',
    'about.facility4title': 'Hospitalidad Cálida',
    'about.facility4desc': 'Atención atenta brindada por Khalid para hacer su estancia inolvidable.',
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
