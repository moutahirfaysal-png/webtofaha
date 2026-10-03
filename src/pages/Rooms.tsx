import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, Wifi, Wind, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

export default function Rooms() {
  const { lang } = useLanguage();
  const [rooms, setRooms] = useState<Room[]>([]);

  useSEO({
    title: `${translate('rooms.title', lang)} | Riad Tofaha Marrakech`,
    description: translate('rooms.desc', lang),
    canonicalPath: '/rooms',
  });

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen">
      {/* Banner Header */}
      <section className="bg-brown-900 text-ivory-50 py-16 md:py-24 px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium">
            {translate('rooms.subtitle', lang)}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-wide">
            {translate('rooms.title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {translate('rooms.desc', lang)}
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-ivory-50 rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Room Image Banner */}
                <Link to={`/rooms/${room.slug}`} className="block relative h-72 overflow-hidden">
                  <img
                    src={room.images?.[0] || 'https://images.pexels.com/photos/31356131/pexels-photo-31356131.png'}
                    alt={getLocalizedText(room.name, lang)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
                  
                  {room.base_price && (
                    <div className="absolute top-4 right-4 bg-ivory-50/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm">
                      <span className="text-sm font-bold text-brown-800">
                        {translate('rooms.from', lang)} {formatPrice(room.base_price, room.currency)}
                      </span>
                      <span className="text-xs text-brown-500"> / {translate('rooms.night', lang)}</span>
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-ivory-50 text-xs">
                    <span className="bg-brown-900/70 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Bed size={14} /> {room.bed_config}
                    </span>
                    <span className="bg-brown-900/70 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <Users size={14} /> {room.max_occupancy} {translate('rooms.guests', lang)}
                    </span>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-8 space-y-4">
                  <h2 className="font-serif text-2xl font-medium text-brown-800 group-hover:text-terracotta-600 transition-colors">
                    <Link to={`/rooms/${room.slug}`}>{getLocalizedText(room.name, lang)}</Link>
                  </h2>

                  <p className="text-brown-600 text-sm leading-relaxed line-clamp-3 font-light">
                    {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4 text-xs text-brown-500">
                    <span className="flex items-center gap-1"><Wifi size={14} className="text-terracotta-600" /> {translate('rooms.freeWifi', lang)}</span>
                    <span className="flex items-center gap-1"><Wind size={14} className="text-terracotta-600" /> {translate('rooms.ac', lang)}</span>
                    <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-terracotta-600" /> {translate('rooms.bathroom', lang)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/rooms/${room.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-brown-300 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brown-800 hover:bg-brown-800 hover:text-ivory-50 transition-all duration-200"
                >
                  {translate('rooms.viewDetails', lang)}
                </Link>
                <Link
                  to={`/book?room=${room.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#a86548] hover:bg-[#8e5238] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                >
                  {translate('rooms.bookRoom', lang)} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
