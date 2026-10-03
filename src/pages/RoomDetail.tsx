import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText, Language } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

// مكون فرعي لبناء بطاقة الغرفة مع سلايدر الصور والأسهم
function RoomCardItem({ room, lang }: { room: Room; lang: Language }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = room.images && room.images.length > 0 ? room.images : ['/terasssse.jpeg'];

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
      
      {/* Slider Container */}
      <div className="relative h-72 md:h-80 overflow-hidden bg-brown-900/10">
        <img
          src={images[currentImgIndex]}
          alt={getLocalizedText(room.name, lang)}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-black/20" />

        {/* Navigation Arrows (Show if more than 1 image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentImgIndex ? 'w-5 bg-gold-300' : 'w-2 bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Price Tag Badge */}
        {room.base_price && (
          <div className="absolute top-4 right-4 bg-ivory-50/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl shadow-md border border-sand-300 z-10">
            <span className="text-xs md:text-sm font-bold text-brown-900">
              {translate('roomsPreview.from', lang)} {formatPrice(room.base_price, room.currency)}
            </span>
            <span className="text-[10px] text-brown-500 font-light"> / {translate('roomsPreview.perNight', lang)}</span>
          </div>
        )}

        {/* Room Attributes */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
          <span className="inline-flex items-center gap-1 text-xs bg-brown-900/75 backdrop-blur-sm text-ivory-50 px-2.5 py-1 rounded-lg">
            <Bed size={13} /> {room.bed_config}
          </span>
          <span className="inline-flex items-center gap-1 text-xs bg-brown-900/75 backdrop-blur-sm text-ivory-50 px-2.5 py-1 rounded-lg">
            <Users size={13} /> {room.max_occupancy} {translate('roomsPreview.guests', lang)}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-brown-900 mb-2">
            {getLocalizedText(room.name, lang)}
          </h3>
          <p className="text-xs md:text-sm text-brown-600 font-light leading-relaxed">
            {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
          </p>
        </div>

        {/* Action Buttons */}
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

  useSEO({
    title: translate('rooms.page_title', lang),
    description: translate('rooms.desc', lang),
    canonicalPath: '/rooms',
  });

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

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
            <RoomCardItem key={room.id} room={room} lang={lang} />
          ))}
        </div>
      </div>

    </div>
  );
}
