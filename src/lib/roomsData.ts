export interface LocalizedText {
  fr: string;
  ar: string;
  en: string;
}

export interface RoomData {
  id: string;
  slug: string;
  name: LocalizedText;
  price: number;
  capacity: LocalizedText;
  bedType: LocalizedText;
  description: LocalizedText;
  amenities: LocalizedText[];
  images: string[];
}

// قائمة المعدات الأساسية المشتركة لجميع الغرف
const standardAmenities: LocalizedText[] = [
  { fr: 'Climatisation', ar: 'تكييف هواء', en: 'Air conditioning' },
  { fr: 'Wi-Fi gratuit', ar: 'واي فاي مجاني', en: 'Free Wi-Fi' },
  { fr: 'Salle de bain privée', ar: 'حمام خاص', en: 'Private bathroom' },
  { fr: 'Produits de toilette', ar: 'مستلزمات الاستحمام', en: 'Toiletries' },
  { fr: 'Séchoir à cheveux', ar: 'مجفف شعر', en: 'Hairdryer' }
];

export const roomsData: RoomData[] = [
  {
    id: "1",
    slug: "double-room-01",
    name: {
      fr: "Chambre Double 01",
      ar: "غرفة مزدوجة 01",
      en: "Double Room 01"
    },
    price: 85,
    capacity: {
      fr: "2 invités",
      ar: "حتى ضيفين",
      en: "2 guests"
    },
    bedType: {
      fr: "1 grand lit double",
      ar: "سرير مزدوج كبير",
      en: "1 large double bed"
    },
    description: {
      fr: "Décor traditionnel marocain avec un lit double confortable, des détails artisanaux et une atmosphère de patio paisible.",
      ar: "ديكور مغربي تقليدي مع سرير مزدوج مريح، تفاصيل مصنوعة يتاً، وأجواء فناء هادئة.",
      en: "Traditional Moroccan decor with a comfortable double bed, handcrafted details, and peaceful patio atmosphere."
    },
    amenities: standardAmenities,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200"
    ]
  },
  {
    id: "2",
    slug: "junior-suite",
    name: {
      fr: "Suite Junior",
      ar: "جناح جونيور",
      en: "Junior Suite"
    },
    price: 105,
    capacity: {
      fr: "2-3 invités",
      ar: "2-3 ضيوف",
      en: "2-3 guests"
    },
    bedType: {
      fr: "1 lit King + 1 canapé-lit",
      ar: "سرير كينغ + سرير أريكة",
      en: "1 King bed + 1 Sofa bed"
    },
    description: {
      fr: "Spacieuse suite mêlant l'artisanat marocain authentique au luxe moderne.",
      ar: "جناح واسع يمزج بين الحرفية المغربية الأصيلة والفخامة العصرية.",
      en: "Spacious suite blending authentic Moroccan craftsmanship with modern luxury."
    },
    amenities: standardAmenities,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ]
  },
  {
    id: "3",
    slug: "superior-family-suite",
    name: {
      fr: "Suite Familiale Supérieure",
      ar: "الجناح العائلي الممتاز",
      en: "Superior Family Suite"
    },
    price: 140,
    capacity: {
      fr: "4 invités",
      ar: "4 ضيوف",
      en: "4 guests"
    },
    bedType: {
      fr: "2 lits Queen",
      ar: "سريران بحجم كوين",
      en: "2 Queen beds"
    },
    description: {
      fr: "Élégante suite familiale dotée de plâtres sculptés traditionnels, de plafonds en bois et de tous les équipements.",
      ar: "جناح عائلي أنيق يتميز بالجبس المنقوش التقليدي، الأسقف الخشبية، والمعدات الكاملة.",
      en: "Elegant family suite featuring traditional carved plasterwork, wooden ceilings, and full amenities."
    },
    amenities: standardAmenities,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200"
    ]
  },
  {
    id: "4",
    slug: "deluxe-twin-room",
    name: {
      fr: "Chambre Lits Jumeaux Deluxe",
      ar: "غرفة توين فاخرة",
      en: "Deluxe Twin Room"
    },
    price: 95,
    capacity: {
      fr: "2 invités",
      ar: "ضفيفان",
      en: "2 guests"
    },
    bedType: {
      fr: "2 lits simples",
      ar: "سريران مفردان",
      en: "2 Single beds"
    },
    description: {
      fr: "Charmante chambre lits jumeaux décorée de zellige marocain fait main, offrant un confort moderne et une vue directe sur le patio.",
      ar: "غرفة توين ساحرة مزينة بالزليج المغربي المصنوع يدوياً، توفر راحة حديثة وإطلالة مباشرة على الفناء.",
      en: "Charming twin room decorated with handcrafted Moroccan zellige, offering modern comfort and direct view onto the courtyard."
    },
    amenities: standardAmenities,
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"
    ]
  }
];
