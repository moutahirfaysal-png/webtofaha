import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // التصنيفات المعتمدة للمعرض
  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tous' : lang === 'ar' ? 'الكل' : 'All' },
    { id: 'rooms', label: lang === 'fr' ? 'Chambres & Suites' : lang === 'ar' ? 'الغرف والأجنحة' : 'Rooms & Suites' },
    { id: 'salon', label: lang === 'fr' ? 'Salons' : lang === 'ar' ? 'الصالونات' : 'Salons' },
    { id: 'terrace', label: lang === 'fr' ? 'Terrasses' : lang === 'ar' ? 'التراسات' : 'Terraces' },
    { id: 'exterior', label: lang === 'fr' ? 'Extérieur' : lang === 'ar' ? 'الواجهات الخارجية' : 'Exterior' },
    { id: 'cuisine', label: lang === 'fr' ? 'Cuisine' : lang === 'ar' ? 'المطبخ' : 'Kitchen' },
    { id: 'facilities', label: lang === 'fr' ? 'Salles de bain' : lang === 'ar' ? 'دورات المياه' : 'Bathrooms' },
  ];

  // قاعدة بيانات الصور المحلية بدون تكرار وبدون روابط خارجية
  const galleryImages = [
    // --- غرف الأمازيغ (Amazigh) ---
    { id: 1, src: '/Amazigh1.avif', category: 'rooms', title: { fr: 'Chambre Amazigh 1', ar: 'غرفة الأمازيغ 1', en: 'Amazigh Room 1' } },
    { id: 2, src: '/Amazigh2.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 2', ar: 'غرفة الأمازيغ 2', en: 'Amazigh Room 2' } },
    { id: 3, src: '/Amazigh3.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 3', ar: 'غرفة الأمازيغ 3', en: 'Amazigh Room 3' } },
    { id: 4, src: '/Amazigh4.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 4', ar: 'غرفة الأمازيغ 4', en: 'Amazigh Room 4' } },
    { id: 5, src: '/Amazigh5.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 5', ar: 'غرفة الأمازيغ 5', en: 'Amazigh Room 5' } },
    { id: 6, src: '/Amazigh6.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 6', ar: 'غرفة الأمازيغ 6', en: 'Amazigh Room 6' } },
    { id: 7, src: '/Amazigh7.avif', category: 'rooms', title: { fr: 'Chambre Amazigh 7 (A)', ar: 'غرفة الأمازيغ 7 (أ)', en: 'Amazigh Room 7 (A)' } },
    { id: 8, src: '/Amazigh7.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 7 (B)', ar: 'غرفة الأمازيغ 7 (ب)', en: 'Amazigh Room 7 (B)' } },
    { id: 9, src: '/Amazigh8.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 8', ar: 'غرفة الأمازيغ 8', en: 'Amazigh Room 8' } },
    { id: 10, src: '/Amazigh9.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 9', ar: 'غرفة الأمازيغ 9', en: 'Amazigh Room 9' } },
    { id: 11, src: '/Amazigh10.jpeg', category: 'rooms', title: { fr: 'Chambre Amazigh 10', ar: 'غرفة الأمازيغ 10', en: 'Amazigh Room 10' } },

    // --- غرف الأطلس (Atlas) ---
    { id: 12, src: '/Atlas1.avif', category: 'rooms', title: { fr: 'Suite Atlas 1', ar: 'جناح الأطلس 1', en: 'Atlas Suite 1' } },
    { id: 13, src: '/Atlas2.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 2', ar: 'جناح الأطلس 2', en: 'Atlas Suite 2' } },
    { id: 14, src: '/Atlas3.avif', category: 'rooms', title: { fr: 'Suite Atlas 3', ar: 'جناح الأطلس 3', en: 'Atlas Suite 3' } },
    { id: 15, src: '/Atlas4.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 4', ar: 'جناح الأطلس 4', en: 'Atlas Suite 4' } },
    { id: 16, src: '/Atlas5.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 5', ar: 'جناح الأطلس 5', en: 'Atlas Suite 5' } },
    { id: 17, src: '/Atlas6.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 6', ar: 'جناح الأطلس 6', en: 'Atlas Suite 6' } },
    { id: 18, src: '/Atlas7.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 7', ar: 'جناح الأطلس 7', en: 'Atlas Suite 7' } },
    { id: 19, src: '/Atlas8.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 8', ar: 'جناح الأطلس 8', en: 'Atlas Suite 8' } },
    { id: 20, src: '/Atlas9.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 9', ar: 'جناح الأطلس 9', en: 'Atlas Suite 9' } },
    { id: 21, src: '/Atlas10.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 10', ar: 'جناح الأطلس 10', en: 'Atlas Suite 10' } },
    { id: 22, src: '/Atlas11.jpeg', category: 'rooms', title: { fr: 'Suite Atlas 11', ar: 'جناح الأطلس 11', en: 'Atlas Suite 11' } },

    // --- غرف البربر (Berbère) ---
    { id: 23, src: '/Berbère2.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 2', ar: 'غرفة البربر 2', en: 'Berber Room 2' } },
    { id: 24, src: '/Berbère3.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 3', ar: 'غرفة البربر 3', en: 'Berber Room 3' } },
    { id: 25, src: '/Berbère4.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 4', ar: 'غرفة البربر 4', en: 'Berber Room 4' } },
    { id: 26, src: '/Berbère5.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 5', ar: 'غرفة البربر 5', en: 'Berber Room 5' } },
    { id: 27, src: '/Berbère6.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 6', ar: 'غرفة البربر 6', en: 'Berber Room 6' } },
    { id: 28, src: '/Berbère7.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 7', ar: 'غرفة البربر 7', en: 'Berber Room 7' } },
    { id: 29, src: '/Berbère8.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 8', ar: 'غرفة البربر 8', en: 'Berber Room 8' } },
    { id: 30, src: '/Berbère9.jpeg', category: 'rooms', title: { fr: 'Chambre Berbère 9', ar: 'غرفة البربر 9', en: 'Berber Room 9' } },
    { id: 31, src: '/berber6.avif', category: 'rooms', title: { fr: 'Détails Chambre Berbère', ar: 'تفاصيل غرفة البربر', en: 'Berber Room Details' } },

    // --- الغرف الإضافية وميدلت (Rooms & Midelt) ---
    { id: 32, src: '/chambre.jpeg', category: 'rooms', title: { fr: 'Chambre Riad Tofaha', ar: 'غرفة رياض تفاحة', en: 'Riad Tofaha Room' } },
    { id: 33, src: '/chambre1.avif', category: 'rooms', title: { fr: 'Chambre Lumineuse', ar: 'غرفة مضيئة', en: 'Bright Room' } },
    { id: 34, src: '/chambrel.jpeg', category: 'rooms', title: { fr: 'Espace Nuit', ar: 'ركن النوم', en: 'Sleeping Space' } },
    { id: 35, src: '/Midelt1.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 1', ar: 'أجواء ميدلت 1', en: 'Midelt Vibe 1' } },
    { id: 36, src: '/Midelt2.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 2', ar: 'أجواء ميدلت 2', en: 'Midelt Vibe 2' } },
    { id: 37, src: '/Midelt3.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 3', ar: 'أجواء ميدلت 3', en: 'Midelt Vibe 3' } },
    { id: 38, src: '/Midelt4.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 4', ar: 'أجواء ميدلت 4', en: 'Midelt Vibe 4' } },
    { id: 39, src: '/Midelt5.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 5', ar: 'أجواء ميدلت 5', en: 'Midelt Vibe 5' } },
    { id: 40, src: '/Midelt6.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 6', ar: 'أجواء ميدلت 6', en: 'Midelt Vibe 6' } },
    { id: 41, src: '/Midelt7.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 7', ar: 'أجواء ميدلت 7', en: 'Midelt Vibe 7' } },
    { id: 42, src: '/Midelt8.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 8', ar: 'أجواء ميدلت 8', en: 'Midelt Vibe 8' } },
    { id: 43, src: '/Midelt9.jpeg', category: 'rooms', title: { fr: 'Ambiance Midelt 9', ar: 'أجواء ميدلت 9', en: 'Midelt Vibe 9' } },

    // --- الواجهات الخارجية (Exterior) ---
    { id: 44, src: '/Extérieur1.avif', category: 'exterior', title: { fr: 'Façade extérieure 1', ar: 'الواجهة الخارجية 1', en: 'Exterior Façade 1' } },
    { id: 45, src: '/Extérieur2.avif', category: 'exterior', title: { fr: 'Façade extérieure 2', ar: 'الواجهة الخارجية 2', en: 'Exterior Façade 2' } },

    // --- الصالونات (Salons) ---
    { id: 46, src: '/salon.avif', category: 'salon', title: { fr: 'Salon traditionnel marocain', ar: 'الصالون المغربي التقليدي', en: 'Traditional Moroccan Salon' } },
    { id: 47, src: '/salon2.jpeg', category: 'salon', title: { fr: 'Espace salon élégant', ar: 'جلسة صالون أنيقة', en: 'Elegant Living Space' } },
    { id: 48, src: '/salon3.jpeg', category: 'salon', title: { fr: 'Décoration du salon', ar: 'ديكور الصالون', en: 'Salon Decoration' } },
    { id: 49, src: '/salon4.avif', category: 'salon', title: { fr: 'Ambiance chaleureuse du salon', ar: 'أجواء صالون دافئة', en: 'Cozy Salon Atmosphere' } },

    // --- التراسات (Terraces) ---
    { id: 50, src: '/ter.jpeg', category: 'terrace', title: { fr: 'Vue panoramique de la terrasse', ar: 'إطلالة بانورامية من السطح', en: 'Panoramic Terrace View' } },
    { id: 51, src: '/terasse.jpeg', category: 'terrace', title: { fr: 'Terrasse du Riad', ar: 'سطح الرياض', en: 'Riad Terrace' } },
    { id: 52, src: '/terassee.jpeg', category: 'terrace', title: { fr: 'Espace détente sur la terrasse', ar: 'منطقة الاسترخاء في السطح', en: 'Terrace Lounge' } },
    { id: 53, src: '/terasssse.jpeg', category: 'terrace', title: { fr: 'Patio et terrasse supérieure', ar: 'الفناء والسطح العلوي', en: 'Patio & Upper Terrace' } },
    { id: 54, src: '/terassem.jpeg', category: 'terrace', title: { fr: 'Aménagement de la terrasse', ar: 'تنسيق السطح', en: 'Terrace Setup' } },
    { id: 55, src: '/terasses.jpeg', category: 'terrace', title: { fr: 'Coin soleil', ar: 'ركن الاستجمام تحت الشمس', en: 'Sun Corner' } },
    { id: 56, src: '/terrasse 01.avif', category: 'terrace', title: { fr: 'Vue extérieure de la terrasse', ar: 'منظر خارجي للسطح', en: 'Terrace Outdoor View' } },
    { id: 57, src: '/terasse1.avif', category: 'terrace', title: { fr: 'Détails de la terrasse', ar: 'تفاصيل ديكور السطح', en: 'Terrace Details' } },
    { id: 58, src: '/terasse2.avif', category: 'terrace', title: { fr: 'Espace repas en plein air', ar: 'مكان لتناول الطعام في الهواء الطلق', en: 'Open Air Dining' } },
    { id: 59, src: '/terasse3.avif', category: 'terrace', title: { fr: 'Coin lounge terrasse', ar: 'جلسة استرخاء بالسطح', en: 'Terrace Lounge Corner' } },
    { id: 60, src: '/terasse4.avif', category: 'terrace', title: { fr: 'Panorama sur la ville', ar: 'إطلالة على معالم المدينة', en: 'City Panorama' } },
    { id: 61, src: '/terasse5.avif', category: 'terrace', title: { fr: 'Ambiance nocturne terrasse', ar: 'أجواء السطح ليلاً', en: 'Terrace Night Vibe' } },

    // --- المطبخ (Kitchen) ---
    { id: 62, src: '/cuisine1.jpeg', category: 'cuisine', title: { fr: 'Cuisine commune équipée', ar: 'المطبخ المشترك المجهز', en: 'Equipped Shared Kitchen' } },
    { id: 63, src: '/cuisine2.jpeg', category: 'cuisine', title: { fr: 'Espace culinaire du Riad', ar: 'مرافق الطبخ في الرياض', en: 'Riad Culinary Space' } },

    // --- دورات المياه والمرافق (Bathrooms) ---
    { id: 64, src: '/toil.jpeg', category: 'facilities', title: { fr: 'Salle de bain moderne', ar: 'حمام عصري', en: 'Modern Bathroom' } },
    { id: 65, src: '/toilette.jpeg', category: 'facilities', title: { fr: 'Installation sanitaire', ar: 'تجهيزات الحمام', en: 'Bathroom Facility' } },
    { id: 66, src: '/toilettess.jpeg', category: 'facilities', title: { fr: 'Confort et design des sanitaires', ar: 'تصميم وراحة المرافق الصحية', en: 'Sanitary Design' } },
    { id: 67, src: '/toiletessss.jpeg', category: 'facilities', title: { fr: 'Détails de la salle d’eau', ar: 'تفاصيل غرفة الاستحمام', en: 'Washroom Details' } },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory-100 py-24 md:py-32">
      <div className="container-luxury">
        {/* رأس الصفحة */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a86548] font-bold">
            {lang === 'fr' ? 'DÉCOUVREZ NOTRE UNIVERS' : lang === 'ar' ? 'اكتشف عالمنا' : 'VISUAL JOURNEY'}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium text-brown-900">
            {lang === 'fr' ? 'Galerie Photo' : lang === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
          </h1>
          <p className="text-brown-600 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto pt-1">
            {lang === 'fr' 
              ? 'Explorez l’authenticité de Riad Tofaha à travers nos chambres (Amazigh, Atlas, Berbère), salons et terrasses.' 
              : lang === 'ar' 
              ? 'استكشف أصالة رياض تفاحة عبر غرفنا (الأمازيغ، الأطلس، البربر)، الصالونات، والتراسات.' 
              : 'Explore the authenticity of Riad Tofaha through our rooms, salons, and terraces.'}
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

      {/* نافذة التكبير (Lightbox Modal) */}
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
