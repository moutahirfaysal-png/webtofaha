import { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';

interface GalleryItem {
  id: string;
  category: 'rooms' | 'terrace' | 'bathroom' | 'exterior' | 'salon' | 'kitchen';
  title: Record<string, string>;
  image: string;
}

export default function Gallery() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSEO({
    title: translate('gallery.page_title', lang),
    description: translate('gallery.hero_subtitle', lang),
    canonicalPath: '/gallery',
  });

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      category: 'terrace',
      title: { en: 'Rooftop Lounge & Terrace', fr: 'Terrasse sur le toit', ar: 'تراس السطح المشمس', es: 'Terraza en la Azotea' },
      image: '/terasssse.jpeg',
    },
    {
      id: '2',
      category: 'exterior',
      title: { en: 'Traditional Courtyard & Zellige', fr: 'Patio traditionnel et Zellige', ar: 'الفناء المغربي بالزليج', es: 'Patio Tradicional con Zellige' },
      image: '/terasse.jpeg',
    },
    {
      id: '3',
      category: 'rooms',
      title: { en: 'Deluxe Double Room Interior', fr: 'Chambre Double Deluxe', ar: 'الغرفة المزدوجة الفاخرة', es: 'Habitación Doble Deluxe' },
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '4',
      category: 'salon',
      title: { en: 'Authentic Moroccan Salon', fr: 'Salon Marocain Authentique', ar: 'الصالون المغربي الأصيل', es: 'Salón Marroquí Auténtico' },
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '5',
      category: 'bathroom',
      title: { en: 'Private En-suite Bathroom', fr: 'Salle de Bain Privative', ar: 'الحمام الخاص المجهز', es: 'Baño Privado' },
      image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '6',
      category: 'kitchen',
      title: { en: 'Fully Equipped Shared Kitchen', fr: 'Cuisine Commune Équipée', ar: 'المطبخ المشترك المجهز', es: 'Cocina Compartida Equipada' },
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '7',
      category: 'rooms',
      title: { en: 'Traditional Suite Bed Details', fr: 'Détails de la Chambre Suite', ar: 'تفاصيل سرير الجناح', es: 'Detalles de la Habitación Suite' },
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '8',
      category: 'terrace',
      title: { en: 'Rooftop Sunset View', fr: 'Vue du Coucher de Soleil sur le Toit', ar: 'غروب الشمس من التراس', es: 'Vista del Atardecer desde la Azotea' },
      image: 'https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: '9',
      category: 'exterior',
      title: { en: 'Riad Entryway & Car Access', fr: 'Entrée du Riad & Accès Voiture', ar: 'مدخل الرياض وتوقف السيارات', es: 'Entrada del Riad y Acceso' },
      image: 'https://images.pexels.com/photos/5435195/pexels-photo-5435195.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const categories = [
    { key: 'all', labelKey: 'gallery.cat_all' },
    { key: 'rooms', labelKey: 'gallery.cat_rooms' },
    { key: 'terrace', labelKey: 'gallery.cat_terrace' },
    { key: 'salon', labelKey: 'gallery.cat_salon' },
    { key: 'kitchen', labelKey: 'gallery.cat_kitchen' },
    { key: 'bathroom', labelKey: 'gallery.cat_bathroom' },
    { key: 'exterior', labelKey: 'gallery.cat_exterior' },
  ];

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* Hero Header Section */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-24 px-4 mb-12 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> {translate('gallery.hero_badge', lang)}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide leading-tight">
            {translate('gallery.hero_title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-light">
            {translate('gallery.hero_subtitle', lang)}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Categories Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#a86548] text-white shadow-md scale-105'
                    : 'bg-white text-brown-800 border border-sand-300 hover:border-[#a86548] hover:text-[#a86548]'
                }`}
              >
                {translate(cat.labelKey, lang)}
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 md:h-80 rounded-3xl overflow-hidden border border-sand-300/80 shadow-sm cursor-pointer hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title[lang] || item.title['en']}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/90 via-[#2A1810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-300 mb-1">
                  {translate(`gallery.cat_${item.category}`, lang)}
                </span>
                <h3 className="font-serif text-lg font-bold text-white flex items-center justify-between">
                  <span>{item.title[lang] || item.title['en']}</span>
                  <Maximize2 size={18} className="text-gold-300 shrink-0 ml-2" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-5xl max-h-[85vh] text-center space-y-4">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title[lang] || filteredItems[lightboxIndex].title['en']}
              className="max-h-[75vh] max-w-full mx-auto rounded-2xl shadow-2xl object-contain border border-white/10"
            />
            <div className="text-white">
              <p className="text-xs uppercase tracking-widest text-gold-300">
                {translate(`gallery.cat_${filteredItems[lightboxIndex].category}`, lang)}
              </p>
              <h3 className="font-serif text-xl font-bold mt-1">
                {filteredItems[lightboxIndex].title[lang] || filteredItems[lightboxIndex].title['en']}
              </h3>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <ChevronRight size={28} />
          </button>

        </div>
      )}

    </div>
  );
}
