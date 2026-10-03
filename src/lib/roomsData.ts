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
    slug: "atlas-deluxe-double-room", // أو الـ slug الخاص بغرفتك
    name: {
      fr: "Chambre Double Deluxe Atlas",
      ar: "غرفة أطلس المزدوجة الفاخرة",
      en: "Atlas Deluxe Double Room"
    },
    price: 90,
    capacity: {
      fr: "2 invités",
      ar: "حتى 2 ضيوف",
      en: "2 guests"
    },
    bedType: {
      fr: "1 grand lit double",
      ar: "سرير مزدوج كبير",
      en: "1 Large Double Bed"
    },
    description: {
      fr: "Named after the majestic Atlas Mountains, this deluxe room combines authentic Moroccan plasterwork, warm lighting, and a luxurious double bed.",
      ar: "سميت على اسم جبال الأطلس الشامخة، تجمع هذه الغرفة الفاخرة بين الجبس المغربي الأصيل والإضاءة الدافئة.",
      en: "Named after the majestic Atlas Mountains, this deluxe room combines authentic Moroccan plasterwork, warm lighting, and a luxurious double bed for an unforgettable tranquil stay."
    },
    amenities: standardAmenities,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"
    ]
  },
  // أضف باقي الغرف بنفس الهيكل إذا وجدَت
];
