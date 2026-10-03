import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, ArrowRight, Wifi, Coffee, Sparkles, MapPin, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

export default function Home() {
  const { lang } = useLanguage();
  const [rooms, setRooms] = useState<Room[]>([]);

  useSEO({
    title: `Riad Tofaha | ${translate('hero.tagline', lang)}`,
    description: translate('hero.subtitle', lang),
    canonicalPath: '/',
  });

  useEffect(() => {
    fetchRooms().then((data) => setRooms(data.slice(0, 3))); // عرض أول 3 غرف فقط
  }, []);

  return (
    <div className="bg-ivory-100 min-h-screen text-brown-900">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-all duration-700"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/31356131/pexels-photo-31356131.png')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pt-20 space-y-6 text-ivory-50 animate-fade-in">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium">
            {translate('hero.tagline', lang)}
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide">
            {translate('hero.title', lang)}
          </h1>

          <p className="text-sm md:text-lg text-ivory-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            {translate('hero.subtitle', lang)}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/rooms"
              className="w-full sm:w-auto bg-[#a86548] hover:bg-[#8e5238] text-white px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition duration-300 shadow-lg"
            >
              {translate('hero.exploreRooms', lang)}
            </Link>
            <Link
              to="/book"
              className="w-full sm:w-auto border border-ivory-50/40 hover:bg-ivory-50/10 text-ivory-50 px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition duration-300"
            >
              {translate('hero.bookStay', lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Welcome & About Section */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-bold">
              {translate('nav.about', lang)}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brown-900 leading-tight">
              An Oasís of Peace & Authentic Architecture
            </h2>
            <p className="text-brown-700 leading-relaxed font-light">
              Nestled in the historical Medina of Marrakech, Riad Tofaha blends traditional Zellige tilework, handcrafted plastering, and tranquil courtyards with modern hospitality.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="text-gold-500 fill-gold-500" size={18} />
                <span className="font-bold text-brown-900">4.9 / 5</span>
                <span className="text-xs text-brown-500">(Guest Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-terracotta-600" size={18} />
                <span className="text-sm text-brown-800">Marrakech Medina</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-brown-900 transition"
              >
                Discover Our Story <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/31356131/pexels-photo-31356131.png"
              alt="Riad Courtyard"
              className="rounded-2xl shadow-md h-72 w-full object-cover"
            />
            <img
              src="https://images.pexels.com/photos/31356131/pexels-photo-31356131.png"
              alt="Riad Details"
              className="rounded-2xl shadow-md h-72 w-full object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* 3. Featured Rooms Section */}
      <section className="py-20 bg-ivory-200/60 border-y border-sand-300/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-bold">
                {translate('rooms.subtitle', lang)}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-brown-900 mt-2">
                {translate('rooms.title', lang)}
              </h2>
            </div>
            <Link
              to="/rooms"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brown-800 hover:text-terracotta-600 transition"
            >
              View All Accommodations <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-ivory-50 rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.images?.[0] || 'https://images.pexels.com/photos/31356131/pexels-photo-31356131.png'}
                      alt={getLocalizedText(room.name, lang)}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    {room.base_price && (
                      <div className="absolute top-4 right-4 bg-brown-950/80 backdrop-blur-md text-ivory-50 px-3 py-1.5 rounded-lg text-xs font-semibold">
                        {formatPrice(room.base_price, room.currency)} / {translate('rooms.night', lang)}
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-medium text-brown-900">
                      {getLocalizedText(room.name, lang)}
                    </h3>
                    <p className="text-xs text-brown-600 line-clamp-2 font-light">
                      {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-brown-500 pt-2">
                      <span className="flex items-center gap-1"><Bed size={13} /> {room.bed_config}</span>
                      <span className="flex items-center gap-1"><Users size={13} /> {room.max_occupancy} Guests</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#a86548] hover:bg-[#8e5238] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition"
                  >
                    {translate('rooms.viewDetails', lang)}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience & Amenities */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta-600 font-bold">Services</span>
          <h2 className="font-serif text-3xl md:text-5xl text-brown-900 mt-2">The Riad Experience</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-ivory-50 p-8 rounded-2xl border border-sand-200 text-center space-y-3">
            <div className="w-12 h-12 bg-terracotta-50 rounded-xl flex items-center justify-center mx-auto text-terracotta-600">
              <Coffee size={24} />
            </div>
            <h4 className="font-serif text-lg font-bold">Traditional Breakfast</h4>
            <p className="text-xs text-brown-600 leading-relaxed font-light">Freshly prepared daily Moroccan breakfast served on the rooftop terrace.</p>
          </div>

          <div className="bg-ivory-50 p-8 rounded-2xl border border-sand-200 text-center space-y-3">
            <div className="w-12 h-12 bg-terracotta-50 rounded-xl flex items-center justify-center mx-auto text-terracotta-600">
              <Sparkles size={24} />
            </div>
            <h4 className="font-serif text-lg font-bold">Courtyard Pool</h4>
            <p className="text-xs text-brown-600 leading-relaxed font-light">Cool off in our refreshing plunge pool located in the central courtyard.</p>
          </div>

          <div className="bg-ivory-50 p-8 rounded-2xl border border-sand-200 text-center space-y-3">
            <div className="w-12 h-12 bg-terracotta-50 rounded-xl flex items-center justify-center mx-auto text-terracotta-600">
              <Wifi size={24} />
            </div>
            <h4 className="font-serif text-lg font-bold">High-Speed Fiber</h4>
            <p className="text-xs text-brown-600 leading-relaxed font-light">Seamless internet connectivity throughout all rooms and shared spaces.</p>
          </div>

          <div className="bg-ivory-50 p-8 rounded-2xl border border-sand-200 text-center space-y-3">
            <div className="w-12 h-12 bg-terracotta-50 rounded-xl flex items-center justify-center mx-auto text-terracotta-600">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-serif text-lg font-bold">24/7 Concierge</h4>
            <p className="text-xs text-brown-600 leading-relaxed font-light">Personalized excursions, airport transfers, and local guidance.</p>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="bg-brown-950 text-ivory-50 py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-medium">Ready to Experience Riad Tofaha?</h2>
          <p className="text-ivory-100/80 text-sm md:text-base font-light">
            Book directly with us to guarantee the best available rates and exclusive welcome perks.
          </p>
          <div>
            <Link
              to="/book"
              className="inline-block bg-[#a86548] hover:bg-[#8e5238] text-white px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition shadow-xl"
            >
              {translate('nav.bookNow', lang)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
