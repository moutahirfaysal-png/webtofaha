export interface RoomData {
  id: string;
  slug: string;
  name: string;
  price: number;
  capacity: string;
  bedType: string;
  description: string;
  images: string[];
}

export const roomsData: RoomData[] = [
  {
    id: "1",
    slug: "double-room-01",
    name: "Double Room 01",
    price: 85,
    capacity: "2 guests",
    bedType: "1 large double bed",
    description: "Traditional Moroccan decor with a comfortable double bed, handcrafted details, and peaceful patio atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200"
    ]
  },
  {
    id: "2",
    slug: "junior-suite",
    name: "Junior Suite",
    price: 105,
    capacity: "2-3 guests",
    bedType: "1 King bed + 1 Sofa bed",
    description: "Spacious suite blending authentic Moroccan craftsmanship with modern luxury.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ]
  },
  {
    id: "3",
    slug: "superior-family-suite",
    name: "Superior Family Suite",
    price: 140,
    capacity: "4 guests",
    bedType: "2 Queen beds",
    description: "Elegant family suite featuring traditional carved plasterwork, wooden ceilings, and full amenities.",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200"
    ]
  }
];
export interface RoomData {
  id: string;
  slug: string;
  name: string;
  price: number;
  capacity: string;
  bedType: string;
  description: string;
  images: string[];
}

export const roomsData: RoomData[] = [
  {
    id: "1",
    slug: "double-room-01",
    name: "Double Room 01",
    price: 85,
    capacity: "2 guests",
    bedType: "1 large double bed",
    description: "Traditional Moroccan decor with a comfortable double bed, handcrafted details, and peaceful patio atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200"
    ]
  },
  {
    id: "2",
    slug: "junior-suite",
    name: "Junior Suite",
    price: 105,
    capacity: "2-3 guests",
    bedType: "1 King bed + 1 Sofa bed",
    description: "Spacious suite blending authentic Moroccan craftsmanship with modern luxury.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
    ]
  },
  {
    id: "3",
    slug: "superior-family-suite",
    name: "Superior Family Suite",
    price: 140,
    capacity: "4 guests",
    bedType: "2 Queen beds",
    description: "Elegant family suite featuring traditional carved plasterwork, wooden ceilings, and full amenities.",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200"
    ]
  },
  // 👈 الغرفة الرابعة الجديدة
  {
    id: "4",
    slug: "deluxe-twin-room",
    name: "Deluxe Twin Room",
    price: 95,
    capacity: "2 guests",
    bedType: "2 Single beds",
    description: "Charming twin room decorated with handcrafted Moroccan zellige, offering modern comfort and direct view onto the courtyard.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200"
    ]
  }
];
