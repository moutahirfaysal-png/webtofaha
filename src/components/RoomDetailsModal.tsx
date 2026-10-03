import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import { roomsData, RoomData } from '@/lib/roomsData';
import { Users, Bed, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function RoomDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  const [room, setRoom] = useState<RoomData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundRoom = roomsData.find(r => r.slug === slug || r.id === slug);
    if (foundRoom) {
      setRoom(foundRoom);
    }
  }, [slug]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-100">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-brown-900 mb-4">
            {lang === 'ar' ? 'الغرفة غير موجودة' : lang === 'fr' ? 'Chambre non trouvée' : 'Room not found'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-[#a86548] text-ivory-50 rounded-xl transition"
          >
            {lang === 'ar' ? 'العودة للرئيسية' : lang === 'fr' ? 'Retour à l’accueil' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  // دالة مساعدة لضمان جلب النص باللغة الصحيحة بغض النظر عن طريقة حفظه في البيانات
  const getText = (field: any) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.en || field.fr || '';
  };

  return (
    <div className="min-h-screen bg-ivory-100 py-24 md:py-32" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container-luxury max-w-7xl mx-auto px-4">
        
        {/* زر العودة */}
        <div className="mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-xs md:text-sm text-[#a86548] hover:underline font-medium flex items-center gap-1"
          >
            {lang === 'ar' ? '← العودة لكل الغرف' : lang === 'fr' ? '← Retour aux chambres' : '← Back to all rooms'}
          </button>
        </div>

        {/* رأس الصفحة */}
        <div className="mb-8">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#a86548] font-bold mb-2">
            {lang === 'ar' ? 'الإقامة والأجنحة' : lang === 'fr' ? 'HÉBERGEMENT & SUITES' : 'ACCOMMODATION & SUITES'}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brown-900">
            {getText(room.name)}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* قسم الصور */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[350px] md:h-[480px] rounded-2xl overflow-hidden bg-sand-200 shadow-md">
              <img
                src={room.images[currentImageIndex]}
                alt="Room view"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-brown-900/60 hover:bg-brown-900 text-ivory-50 p-2.5 rounded-full backdrop-blur-sm transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-brown-900/60 hover:bg-brown-900 text-ivory-50 p-2.5 rounded-full backdrop-blur-sm transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* الصور المصغرة */}
            <div className="grid grid-cols-5 gap-3">
              {room.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-20 rounded-xl overflow-hidden border-2 transition ${
                    currentImageIndex === index ? 'border-[#a86548] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* تفاصيل وحجز الغرفة */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sand-200 space-y-6">
            
            {/* السعر */}
            <div className="flex items-baseline justify-between border-b border-sand-200 pb-4">
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl font-bold text-brown-900">€{room.price}</span>
                <span className="text-xs text-brown-600">
                  / {lang === 'ar' ? 'ليلة واحدة' : lang === 'fr' ? 'par nuit' : 'per night'}
                </span>
              </div>
            </div>

            {/* الوصف */}
            <p className="text-brown-700 text-sm md:text-base font-light leading-relaxed">
              {getText(room.description)}
            </p>

            {/* مميزات السرير والسعة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-sand-50 p-3 rounded-xl border border-sand-200">
                <Bed size={20} className="text-[#a86548]" />
                <span className="text-xs md:text-sm font-medium text-brown-800">
                  {getText(room.bedType)}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-sand-50 p-3 rounded-xl border border-sand-200">
                <Users size={20} className="text-[#a86548]" />
                <span className="text-xs md:text-sm font-medium text-brown-800">
                  {getText(room.capacity)}
                </span>
              </div>
            </div>

            {/* المرافق الأساسية */}
            <div className="pt-2">
              <h3 className="text-xs md:text-sm uppercase tracking-wider text-brown-900 font-bold mb-3">
                {lang === 'ar' ? 'المعدات والمميزات الأساسية' : lang === 'fr' ? 'Équipements & Services' : 'Amenities & Services'}
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {room.amenities && room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 bg-sand-50/50 p-2.5 rounded-lg border border-sand-100">
                    <Check size={16} className="text-[#a86548]" />
                    <span className="text-xs text-brown-800">
                      {getText(amenity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* زر الحجز */}
            <div className="pt-4">
              <button
                onClick={() => alert(lang === 'ar' ? 'تم الحجز بنجاح' : lang === 'fr' ? 'Réservation effectuée' : 'Booking initiated')}
                className="w-full py-3.5 bg-[#a86548] hover:bg-[#93553d] text-ivory-50 rounded-xl font-medium tracking-wide transition shadow-md text-center block"
              >
                {lang === 'ar' ? 'احجز هذه الغرفة الآن' : lang === 'fr' ? 'Réserver cette chambre' : 'Book This Room Now'}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
