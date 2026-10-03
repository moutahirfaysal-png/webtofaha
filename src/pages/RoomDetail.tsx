import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Users, Wifi, Wind, ChevronLeft, ChevronRight, Send, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { getLocalizedText, translate } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRoomBySlug } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const [room, setRoom] = useState<Room | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchRoomBySlug(slug).then(setRoom);
    }
  }, [slug]);

  useSEO({
    title: room ? `${getLocalizedText(room.name, lang)} | Riad Tofaha` : translate('roomDetail.loading', lang),
    description: room ? getLocalizedText(room.short_description, lang) : '',
    canonicalPath: `/rooms/${slug}`,
  });

  if (!room) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-ivory-100 flex flex-col items-center justify-center">
        <p className="text-lg text-brown-800">{translate('roomDetail.loading', lang)}</p>
      </div>
    );
  }

  const roomName = getLocalizedText(room.name, lang);
  const images = room.images && room.images.length > 0 ? room.images : ['/terasssse.jpeg'];

  const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a86548] hover:text-brown-900 transition"
        >
          <ArrowLeft size={16} className={lang === 'ar' ? 'rotate-180' : ''} /> 
          {translate('roomDetail.backToRooms', lang)}
        </Link>

        {/* Room Header & Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Gallery Slider */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-sand-300">
              <img
                src={images[currentImgIndex]}
                alt={roomName}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Bar */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`h-20 w-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === currentImgIndex ? 'border-[#a86548] scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Summary & Booking Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-sand-300 shadow-lg space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#a86548]">
                {translate('rooms.subtitle', lang)}
              </span>
              <h1 className="font-serif text-3xl font-bold text-brown-900 mt-1">
                {roomName}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-2xl font-black text-brown-900">
                  {formatPrice(room.base_price, room.currency)}
                </span>
                <span className="text-xs text-brown-500"> {translate('roomDetail.perNight', lang)}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-brown-600 font-light leading-relaxed border-t border-b border-sand-200 py-4">
              {getLocalizedText(room.description, lang) || getLocalizedText(room.short_description, lang)}
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-brown-800">
              <div className="flex items-center gap-2 bg-ivory-100 p-3 rounded-xl border border-sand-200">
                <Bed size={16} className="text-[#a86548]" /> {room.bed_config}
              </div>
              <div className="flex items-center gap-2 bg-ivory-100 p-3 rounded-xl border border-sand-200">
                <Users size={16} className="text-[#a86548]" /> {translate('roomDetail.maxGuests', lang).replace('{count}', String(room.max_occupancy))}
              </div>
              <div className="flex items-center gap-2 bg-ivory-100 p-3 rounded-xl border border-sand-200">
                <Wind size={16} className="text-[#a86548]" /> {translate('roomDetail.ac', lang)}
              </div>
              <div className="flex items-center gap-2 bg-ivory-100 p-3 rounded-xl border border-sand-200">
                <Wifi size={16} className="text-[#a86548]" /> {translate('roomDetail.wifi', lang)}
              </div>
            </div>

            <Link
              to={`/book?room=${room.slug}`}
              className="w-full bg-[#a86548] hover:bg-[#8e5238] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition duration-300"
            >
              <Send size={16} /> {translate('roomDetail.bookNow', lang)}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
