import type { Room } from './types';

export const roomsData: Room[] = [
  {
    id: 'amazigh-suite',
    slug: 'amazigh-suite',
    name: {
      en: 'Amazigh Triple Suite',
      fr: 'Suite Triple Amazigh',
      ar: 'جناح أمازيغ العائلي',
      es: 'Suite Triple Amazigh',
    },
    short_description: {
      en: 'Spacious traditional room featuring one double bed and one single bed, perfect for up to 3 guests.',
      fr: 'Grande chambre traditionnelle avec un grand lit double et un lit simple, idéale pour 3 personnes.',
      ar: 'غرفة تقليدية واسعة تحتوي على سرير كبير مزدوج وسرير فردي، مثالية لـ 3 ضيوف.',
      es: 'Amplia habitación tradicional con una cama doble y una cama individual, ideal para hasta 3 personas.',
    },
    description: {
      en: 'The Amazigh Suite offers an authentic Moroccan ambience with hand-carved details, traditional zellige, one large double bed, and one cozy single bed. Designed for families or groups looking for ultimate comfort in the heart of Marrakech Medina.',
      fr: 'La Suite Amazigh offre une ambiance marocaine authentique avec du zellige traditionnel, un grand lit double et un lit simple. Conçue pour offrir un confort absolu au cœur de la Médina de Marrakech.',
      ar: 'يوفر جناح أمازيغ أجواءً مغربية أصيلة مع زليج تقليدي، ويضم سريراً كبيراً مزدوجاً وسريراً فردياً إضافياً. صُمم خصيصاً للعائلات أو المجموعات للتمتع بالراحة والسكينة في قلب مراكش.',
      es: 'La Suite Amazigh ofrece un ambiente marroquí auténtico con zellige tradicional, una cama doble grande y una cama individual. Diseñada para familias o grupos que buscan el máximo confort.',
    },
    base_price: 110,
    currency: 'EUR',
    max_occupancy: 3,
    bed_config: '1 Double Bed + 1 Single Bed',
    images: [
      '/Amazigh1.avif',
      '/Amazigh2.jpeg',
      '/Amazigh3.jpeg',
      '/Amazigh4.jpeg',
      '/Amazigh5.jpeg',
      '/Amazigh6.jpeg',
      '/Amazigh7.jpeg',
      '/Amazigh8.jpeg',
      '/Amazigh9.jpeg',
      '/Amazigh10.jpeg',
      '/Amazigh7.avif',
    ],
  },
  {
    id: 'atlas-room',
    slug: 'atlas-room',
    name: {
      en: 'Atlas Deluxe Double Room',
      fr: 'Chambre Double Atlas Deluxe',
      ar: 'غرفة أطلس المزدوجة الفاخرة',
      es: 'Habitación Doble Atlas Deluxe',
    },
    short_description: {
      en: 'Elegant Moroccan room with a comfortable large double bed and handcrafted artisan decor.',
      fr: 'Chambre marocaine élégante avec un grand lit double confortable et un décor artisanal.',
      ar: 'غرفة مغربية أنيقة تحتوي على سرير كبير مزدوج مريح مع ديكورات تقليدية فاخرة.',
      es: 'Elegante habitación marroquí con una cómoda cama doble grande y decoración artesanal.',
    },
    description: {
      en: 'Named after the majestic Atlas Mountains, this deluxe room combines authentic Moroccan plasterwork, warm lighting, and a luxurious double bed for an unforgettable tranquil stay.',
      fr: 'Nommée d’après les majestueuses montagnes de l’Atlas, cette chambre deluxe allie plâtre sculpté traditionnel, éclairage chaleureux et un grand lit confortable pour un séjour inoubliable.',
      ar: 'سُميت هذه الغرفة نسبة لجبال الأطلس الشامخة، وتجمع بين النقش على الجبس التقليدي، الإضاءة الدافئة، وسرير مزدوج فاخر لإقامة هادئة لا تُنسى.',
      es: 'Nombrada en honor a las majestuosas montañas del Atlas, esta habitación deluxe combina yeso esculpido tradicional y una lujosa cama doble.',
    },
    base_price: 90,
    currency: 'EUR',
    max_occupancy: 2,
    bed_config: '1 Large Double Bed',
    images: [
      '/Atlas1.avif',
      '/Atlas2.jpeg',
      '/Atlas3.avif',
      '/Atlas4.jpeg',
      '/Atlas5.jpeg',
      '/Atlas6.jpeg',
      '/Atlas7.jpeg',
      '/Atlas8.jpeg',
      '/Atlas9.jpeg',
      '/Atlas10.jpeg',
      '/Atlas11.jpeg',
    ],
  },
  {
    id: 'berber-room',
    slug: 'berber-room',
    name: {
      en: 'Berber Deluxe Double Room',
      fr: 'Chambre Double Berbère Deluxe',
      ar: 'غرفة بربر المزدوجة الفاخرة',
      es: 'Habitación Doble Berber Deluxe',
    },
    short_description: {
      en: 'Cozy traditional room with rich textiles, warm tones, and a comfortable large double bed.',
      fr: 'Chambre traditionnelle chaleureuse avec des textiles raffinés et un grand lit double.',
      ar: 'غرفة تقليدية دافئة بلمسات زليج مغربي وسرير كبير مزدوج يوفر أقصى درجات الراحة.',
      es: 'Acogedora habitación tradicional con ricos textiles y una cómoda cama doble grande.',
    },
    description: {
      en: 'Reflecting the rich heritage of Berber craftsmanship, this room offers a serene sanctuary with authentic tadelakt walls, premium bedding, and traditional charm.',
      fr: 'Rappelant la richesse de l’artisanat berbère, cette chambre offre un sanctuaire de sérénité avec des murs en tadelakt authentique et une literie haut de gamme.',
      ar: 'تعكس هذه الغرفة أصالة التراث البربري، وتوفر ملاذاً هادئاً وجدران تادلاكت مغربية تقليدية مع أسرة فاخرة لراحة مطلقة.',
      es: 'Reflejando la rica herencia de la artesanía bereber, esta habitación ofrece un santuario sereno con paredes de tadelakt auténtico.',
    },
    base_price: 85,
    currency: 'EUR',
    max_occupancy: 2,
    bed_config: '1 Large Double Bed',
    images: [
      '/Berbère2.jpeg',
      '/Berbère3.jpeg',
      '/Berbère4.jpeg',
      '/Berbère5.jpeg',
      '/Berbère6.jpeg',
      '/Berbère7.jpeg',
      '/Berbère8.jpeg',
      '/Berbère9.jpeg',
      '/berber6.avif',
    ],
  },
  {
    id: 'midelt-room',
    slug: 'midelt-room',
    name: {
      en: 'Midelt Deluxe Double Room',
      fr: 'Chambre Double Midelt Deluxe',
      ar: 'غرفة ميدلت المزدوجة الفاخرة',
      es: 'Habitación Doble Midelt Deluxe',
    },
    short_description: {
      en: 'Charming room with traditional Moroccan architectural elements and a comfortable double bed.',
      fr: 'Charmante chambre aux éléments architecturaux marocains traditionnels avec un grand lit double.',
      ar: 'غرفة ساحرة تتميز بلمسات معمارية مغربية أصيلة وسرير مزدوج مريح للغاية.',
      es: 'Encantadora habitación con elementos arquitectónicos tradicionales marroquíes y una cómoda cama doble.',
    },
    description: {
      en: 'The Midelt Room combines tranquil colors, traditional Moroccan seating elements, and a plush double bed to ensure a restful night after exploring the Medina.',
      fr: 'La Chambre Midelt associe des teintes apaisantes, des touches artisanales et un lit double moelleux pour garantir une nuit paisible après une journée d’exploration.',
      ar: 'تجمع غرفة ميدلت بين الألوان الدافئة الهادئة، واللمسات التقليدية مع سرير مزدوج مريح يضمن لك استرخاءً تاماً بعد يوم حافل في المدينة العتيقة.',
      es: 'La Habitación Midelt combina colores serenos y una cómoda cama doble para garantizar una noche de descanso reparador.',
    },
    base_price: 85,
    currency: 'EUR',
    max_occupancy: 2,
    bed_config: '1 Large Double Bed',
    images: [
      '/Midelt1.jpeg',
      '/Midelt2.jpeg',
      '/Midelt3.jpeg',
      '/Midelt4.jpeg',
      '/Midelt5.jpeg',
      '/Midelt6.jpeg',
      '/Midelt7.jpeg',
      '/Midelt8.jpeg',
      '/Midelt9.jpeg',
    ],
  },
];

export async function fetchRooms(): Promise<Room[]> {
  return roomsData;
}

export async function fetchRoomBySlug(slug: string): Promise<Room | null> {
  return roomsData.find((r) => r.slug === slug) || null;
}
