import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, ChevronLeft, ChevronRight, Sparkles, Maximize2, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText, Language } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

interface LightboxState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  roomTitle: string;
}

// مكون كارت الغرفة بدون روابط توجيه خفية
function RoomCardItem({
  room,
  lang,
  onOpenLightbox,
}: {
  room: Room;
  lang: Language;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = room.images && room.images.length > 0 ? room.images : ['/terasssse.jpeg'];
  const roomName = getLocalizedText(room.name, lang);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-sand-300/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Container الصورة وسلايدر الأسهم (مستقل وبدون أي رابط توجيه) */}
      <div className="relative h-72 md:h-80 overflow-hidden bg-brown-900/10 select-none">
        <img
          src={images[currentImgIndex]}
          alt={roomName}
          onClick={() => onOpenLightbox(images, currentImgIndex, roomName)}
          className="w-full h-full object-cover transition-all duration-500 cursor-pointer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-black/20 pointer-events-none" />

        {/* زر التكبير عند الوقوف على الصورة */}
        <button
          type="button"
          onClick={() => onOpenLightbox(images, currentImgIndex, roomName)}
          className="absolute top-4 left-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          title="تكبير الصورة"
        >
          <Maximize2 size={16} />
        </button>

        {/* أسهم التغيير المباشر في نفس الكارت */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-md z-20 shadow-lg cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition backdrop-blur-md z-20 shadow-lg cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* نقاط المؤشر السفلية */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-auto">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImgIndex ? 'w-5 bg-gold-300' : 'w-2 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* شارة الثمن */}
        {room.base_price && (
          <div className="absolute top-4 right-4 bg-ivory-50/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md border border-sand-300 z-10">
            <span className="text-xs md:text-sm font-bold text-brown-900">
              {translate('roomsPreview.from', lang)} {formatPrice(room.base_price, room.currency)}
            </span>
            <span className="text-[10px] text-brown-500 font-light"> / {translate('roomsPreview.perNight', lang)}</span>
          </div>
        )}

        {/* تفاصيل الغرفة */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
          <span className="inline-flex items-center gap-1 text-xs bg-brown-900/80 backdrop-blur-sm text-ivory-50 px-2.5 py-1 rounded-lg">
            <Bed size={13} /> {room.bed_config}
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-brown-900/80 backdrop-blur-sm text-ivory-50 px-2.5 py-1 rounded-lg">
            <Users size={13} /> {room.max_occupancy} {translate('roomsPreview.guests', lang)}
          </span>
        </div>
      </div>

      {/* محتوى وتفاصيل الغرفة */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-brown-900 mb-2">
            {roomName}
          </h3>
          <p className="text-xs md:text-sm text-brown-600 font-light leading-relaxed">
            {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
          </p>
        </div>

        {/* الأزرار العابرة */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to={`/rooms/${room.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 border border-brown-300 px-5 py-3 text-xs font-bold uppercase tracking-wider text-brown-800 hover:bg-brown-900 hover:text-white rounded-xl transition-all"
          >
            {translate('roomsPreview.viewDetails', lang)}
          </Link>
          <Link
            to={`/book?room=${room.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#a86548] hover:bg-[#8e5238] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white rounded-xl transition-all shadow-md"
          >
            {translate('roomsPreview.bookRoom', lang)}
          </Link>
        </div>
      </div>

    </div>
  );
}

export default function Rooms() {
  const { lang } = useLanguage();
  const [rooms, setRooms] = useState<Room[]>([]);

  // حالة النافذة المكبرة للصور (Lightbox)
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    roomTitle: '',
  });

  useSEO({
    title: translate('rooms.page_title', lang),
    description: translate('rooms.desc', lang),
    canonicalPath: '/rooms',
  });

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      roomTitle: title,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextLightboxImg = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevLightboxImg = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* Hero Header Section */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-24 px-4 mb-16 border-b border-gold-500/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> {translate('rooms.subtitle', lang)}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide leading-tight">
            {translate('rooms.title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-xs md:text-sm font-light leading-relaxed">
            {translate('rooms.desc', lang)}
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCardItem
              key={room.id}
              room={room}
              lang={lang}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* النافذة المكبرة للصور (Lightbox Fullscreen Modal) */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <X size={24} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              onClick={prevLightboxImg}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] text-center space-y-3">
            <img
              src={lightbox.images[lightbox.currentIndex]}
              alt={lightbox.roomTitle}
              className="max-h-[75vh] max-w-full mx-auto rounded-2xl shadow-2xl object-contain border border-white/10"
            />
            <div className="text-white space-y-1">
              <h3 className="font-serif text-xl font-bold">{lightbox.roomTitle}</h3>
              <p className="text-xs text-gold-300">
                صورة {lightbox.currentIndex + 1} من {lightbox.images.length}
              </p>
            </div>
          </div>

          {lightbox.images.length > 1 && (
            <button
              onClick={nextLightboxImg}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}

    </div>
  );
}
