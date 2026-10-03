import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // التصنيفات المعتمدة
  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tous' : lang === 'ar' ? 'الكل' : 'All' },
    { id: 'salon', label: lang === 'fr' ? 'Salons & Séjours' : lang === 'ar' ? 'الصالونات' : 'Salons' },
    { id: 'terrace', label: lang === 'fr' ? 'Terrasses & Vues' : lang === 'ar' ? 'التراسات والسطح' : 'Terraces & Views' },
    { id: 'cuisine', label: lang === 'fr' ? 'Cuisine' : lang === 'ar' ? 'المطبخ' : 'Kitchen' },
    { id: 'rooms', label: lang === 'fr' ? 'Chambres & Suites' : lang === 'ar' ? 'الغرف والأجنحة' : 'Rooms & Suites' },
    { id: 'facilities', label: lang === 'fr' ? 'Salles de bain' : lang === 'ar' ? 'دورات المياه والمرافق' : 'Bathrooms & Facilities' },
  ];

  // قاعدة بيانات شاملة للصور (صور الغرف + صور مجلد public الجديدة)
  const galleryImages = [
    // --- الصالونات (Salons) ---
    {
      id: 1,
      src: '/salon.avif',
      category: 'salon',
      title: { fr: 'Salon traditionnel marocain', ar: 'الصالون المغربي التقليدي', en: 'Traditional Moroccan Salon' }
    },
    {
      id: 2,
      src: '/salon2.jpeg',
      category: 'salon',
      title: { fr: 'Espace salon élégant', ar: 'جلسة صالون أنيقة', en: 'Elegant Living Space' }
    },
    {
      id: 3,
      src: '/salon3.jpeg',
      category: 'salon',
      title: { fr: 'Décoration du salon', ar: 'ديكور الصالون', en: 'Salon Decoration' }
    },
    {
      id: 4,
      src: '/salon4.avif',
      category: 'salon',
      title: { fr: 'Ambiance chaleureuse du salon', ar: 'أجواء صالون دافئة', en: 'Cozy Salon Atmosphere' }
    },

    // --- التراسات والإطلالات (Terraces & Views) ---
    {
      id: 5,
      src: '/ter.jpeg',
      category: 'terrace',
      title: { fr: 'Vue panoramique de la terrasse', ar: 'إطلالة بانورامية من السطح', en: 'Panoramic Terrace View' }
    },
    {
      id: 6,
      src: '/terasse.jpeg',
      category: 'terrace',
      title: { fr: 'Terrasse du Riad', ar: 'سطح الرياض', en: 'Riad Terrace' }
    },
    {
      id: 7,
      src: '/terassee.jpeg',
      category: 'terrace',
      title: { fr: 'Espace détente sur la terrasse', ar: 'منطقة الاسترخاء في السطح', en: 'Terrace Lounge' }
    },
    {
      id: 8,
      src: '/terasssse.jpeg',
      category: 'terrace',
      title: { fr: 'Patio et terrasse supérieure', ar: 'الفناء والسطح العلوي', en: 'Patio & Upper Terrace' }
    },
    {
      id: 9,
      src: '/terassem.jpeg',
      category: 'terrace',
      title: { fr: 'Aménagement de la terrasse', ar: 'تنسيق السطح', en: 'Terrace Setup' }
    },
    {
      id: 10,
      src: '/terasses.jpeg',
      category: 'terrace',
      title: { fr: 'Coin soleil', ar: 'ركن الاستجمام تحت الشمس', en: 'Sun Corner' }
    },
    {
      id: 11,
      src: '/terrasse 01.avif',
      category: 'terrace',
      title: { fr: 'Vue extérieure de la terrasse', ar: 'منظر خارجي للسطح', en: 'Terrace Outdoor View' }
    },
    {
      id: 12,
      src: '/terasse1.avif',
      category: 'terrace',
      title: { fr: 'Détails de la terrasse', ar: 'تفاصيل ديكور السطح', en: 'Terrace Details' }
    },
    {
      id: 13,
      src: '/terasse2.avif',
      category: 'terrace',
      title: { fr: 'Espace repas en plein air', ar: 'مكان لتناول الطعام في الهواء الطلق', en: 'Open Air Dining' }
    },
    {
      id: 14,
      src: '/terasse3.avif',
      category: 'terrace',
      title: { fr: 'Coin lounge terrasse', ar: 'جلسة استرخاء بالسطح', en: 'Terrace Lounge Corner' }
    },
    {
      id: 15,
      src: '/terasse4.avif',
      category: 'terrace',
      title: { fr: 'Panorama sur la ville', ar: 'إطلالة على معالم المدينة', en: 'City Panorama' }
    },
    {
      id: 16,
      src: '/terasse5.avif',
      category: 'terrace',
      title: { fr: 'Ambiance nocturne terrasse', ar: 'أجواء السطح ليلاً', en: 'Terrace Night Vibe' }
    },

    // --- المطبخ (Kitchen) ---
    {
      id: 17,
      src: '/cuisine1.jpeg',
      category: 'cuisine',
      title: { fr: 'Cuisine commune équipée', ar: 'المطبخ المشترك المجهز', en: 'Equipped Shared Kitchen' }
    },
    {
      id: 18,
      src: '/cuisine2.jpeg',
      category: 'cuisine',
      title: { fr: 'Espace culinaire du Riad', ar: 'مرافق الطبخ في الرياض', en: 'Riad Culinary Space' }
    },

    // --- دورات المياه والمرافق (Bathrooms & Facilities) ---
    {
      id: 19,
      src: '/toil.jpeg',
      category: 'facilities',
      title: { fr: 'Salle de bain moderne', ar: 'حمام عصري', en: 'Modern Bathroom' }
    },
    {
      id: 20,
      src: '/toilette.jpeg',
      category: 'facilities',
      title: { fr: 'Installation sanitaire', ar: 'تجهيزات الحمام', en: 'Bathroom Facility' }
    },
    {
      id: 21,
      src: '/toilettess.jpeg',
      category: 'facilities',
      title: { fr: 'Confort et design des sanitaires', ar: 'تصميم وراحة المرافق الصحية', en: 'Sanitary Design' }
    },
    {
      id: 22,
      src: '/toiletessss.jpeg',
      category: 'facilities',
      title: { fr: 'Détails de la salle d’eau', ar: 'تفاصيل غرفة الاستحمام', en: 'Washroom Details' }
    },

    // --- الغرف والأجنحة (Rooms & Suites - مأخوذة من صور الغرف الأصلية) ---
    {
      id: 23,
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'rooms',
      title: { fr: 'Chambre Double Deluxe', ar: 'غرفة مزدوجة فاخرة', en: 'Deluxe Double Room' }
    },
    {
      id: 24,
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      category: 'rooms',
      title: { fr: 'Suite Supérieure', ar: 'جناح فائق الراحة', en: 'Superior Suite' }
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory-100 py-24 md:py-32">
      <div className="container-luxury">
        {/* عنوان الصفحة */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a86548] font-bold">
            {lang === 'fr' ? 'DÉCOUVREZ NOTRE UNIVERS' : lang === 'ar' ? 'اكتشف عالمنا' : 'VISUAL JOURNEY'}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium text-brown-900">
            {lang === 'fr' ? 'Galerie Photo' : lang === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
          </h1>
          <p className="text-brown-600 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto pt-1">
            {lang === 'fr' 
              ? 'Explorez les moindres recoins de Riad Tofaha : salons chaleureux, terrasses panoramiques et espaces de confort.' 
              : lang === 'ar' 
              ? 'استكشف كافة تفاصيل رياض تفاحة: الصالونات الدافئة، التراسات البانورامية، ومرافق الراحة.' 
              : 'Explore every corner of Riad Tofaha: cozy salons, panoramic terraces, and comfort spaces.'}
          </p>
        </div>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#a86548] text-ivory-50 shadow-md scale-105'
                  : 'bg-ivory-50 text-brown-700 border border-sand-200 hover:bg-brown-900/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* شبكة الصور */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className="group relative h-72 overflow-hidden rounded-2xl bg-sand-200 shadow-md cursor-pointer border border-gold-500/10"
            >
              <img
                src={image.src}
                alt={image.title[lang as keyof typeof image.title] || image.title.en}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-ivory-50">
                  <h3 className="font-serif text-lg font-medium">
                    {image.title[lang as keyof typeof image.title] || image.title.en}
                  </h3>
                  <span className="bg-brown-900/60 p-2 rounded-full backdrop-blur-sm">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* نافذة التكبير (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-brown-900/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-ivory-50 bg-brown-900/80 hover:bg-brown-900 p-3 rounded-full transition shadow-lg z-10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
