import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Bed, Users, ArrowRight, MapPin, Star, Palmtree } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSEO, buildLodgingBusinessSchema, buildOrganizationSchema, buildWebSiteSchema } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { useSettings } from '@/lib/SettingsContext';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

export default function Home() {
  const { lang } = useLanguage();
  const { settings } = useSettings();
  const [rooms, setRooms] = useState<Room[]>([]);

  useSEO({
    title: undefined,
    description: 'Riad Tofaha is a traditional Moroccan  riad  in the heart of Marrakech offering authentic accommodation, warm hospitality, and an unforgettable cultural experience.',
    canonicalPath: '/',
    jsonLd: [buildLodgingBusinessSchema(), buildOrganizationSchema(), buildWebSiteSchema()],
  });

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

  const heroImage = '/riad%20tofaha%20(6).jpeg';

  const experiences = [
    { key: 'jemaa', image: 'https://images.pexels.com/photos/35513343/pexels-photo-35513343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'best-places-to-visit-in-marrakech-tourist-guide' },
    { key: 'bahia', image: 'https://images.pexels.com/photos/10306569/pexels-photo-10306569.png?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'best-places-to-visit-in-marrakech-tourist-guide' },
    { key: 'majorelle', image: 'https://images.pexels.com/photos/5435195/pexels-photo-5435195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: '10-best-things-to-do-in-marrakech' },
    { key: 'souks', image: 'https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'marrakech-travel-tips-before-visiting' },
    { key: 'cuisine', image: 'https://images.pexels.com/photos/2291596/pexels-photo-2291596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'what-to-eat-in-marrakech-moroccan-cuisine-guide' },
    { key: 'hammam', image: 'https://images.pexels.com/photos/7391720/pexels-photo-7391720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'perfect-romantic-getaway-in-marrakech' },
    { key: 'excursions', image: 'https://images.pexels.com/photos/30205199/pexels-photo-30205199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'ultimate-travel-guide-to-marrakech-morocco' },
  ];

  const welcomeFeatures = [
    { key: 'authenticity', icon: Star },
    { key: 'architecture', icon: Palmtree },
    { key: 'intimate', icon: Users },
    { key: 'comfort', icon: Bed },
    { key: 'culture', icon: MapPin },
    { key: 'hospitality', icon: Star },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Riad Tofaha courtyard" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/60 via-brown-900/40 to-brown-900/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold-300 mb-6 animate-fade-in-down animation-delay-200">
              {getLocalizedText(settings?.brand_tagline, lang) || translate('hero.tagline', lang)}
            </p>
            <h1 className="text-hero font-serif font-medium text-ivory-50 mb-8 animate-fade-in-up animation-delay-300 text-balance">
              Riad Tofaha
            </h1>
            <p className="text-lg md:text-xl text-ivory-50/90 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-500">
              {getLocalizedText(settings?.brand_description, lang) || translate('welcome.intro', lang)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-700">
              <Link to="/rooms" className="btn-primary">
                {translate('hero.exploreRooms', lang)}
              </Link>
              <Link to="/book" className="btn-outline">
                {translate('hero.bookStay', lang)}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
          <ChevronDown size={28} className="text-ivory-50/70" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-20">
            <p className="section-subtitle mb-4">{translate('welcome.title', lang)}</p>
            <h2 className="section-title max-w-3xl mx-auto text-balance">
              {getLocalizedText(settings?.brand_description, lang) || translate('welcome.intro', lang)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {welcomeFeatures.map((feature, idx) => (
              <div
                key={feature.key}
                className="group bg-ivory-50 p-10 text-center transition-all duration-500 hover:shadow-xl border-t-2 border-transparent hover:border-terracotta-400"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-sand-100 rounded-full transition-colors duration-500 group-hover:bg-terracotta-100">
                  <feature.icon size={28} className="text-terracotta-600" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-brown-800 mb-3">
                  {translate(`welcome.${feature.key}`, lang)}
                </h3>
                <p className="text-sm text-brown-600 leading-7">
                  {translate(`welcome.${feature.key}Desc`, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-24 md:py-32 bg-ivory-50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">{translate('roomsPreview.subtitle', lang)}</p>
            <h2 className="section-title">{translate('roomsPreview.title', lang)}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, idx) => (
              <div
                key={room.id}
                className="card-luxury group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link to={`/rooms/${room.slug}`} className="block relative h-72 overflow-hidden">
                  <img
                    src={room.images[0]}
                    alt={getLocalizedText(room.name, lang)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent" />
                  {room.base_price && (
                    <div className="absolute top-4 right-4 bg-ivory-50/95 px-4 py-2">
                      <span className="text-sm font-medium text-brown-800">
                        {translate('roomsPreview.from', lang)} {formatPrice(room.base_price, room.currency)}
                      </span>
                      <span className="text-xs text-brown-500"> / {translate('roomsPreview.perNight', lang)}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-ivory-50">
                    <span className="inline-flex items-center gap-1.5 text-sm bg-brown-900/50 px-3 py-1.5">
                      <Bed size={14} /> {room.bed_config}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm bg-brown-900/50 px-3 py-1.5">
                      <Users size={14} /> {room.max_occupancy} {translate('roomsPreview.guests', lang)}
                    </span>
                  </div>
                </Link>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-medium text-brown-800 mb-2">
                    {getLocalizedText(room.name, lang)}
                  </h3>
                  <p className="text-sm text-brown-600 leading-7 mb-6">
                    {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/rooms/${room.slug}`} className="flex-1 inline-flex items-center justify-center gap-2 border border-brown-300 px-6 py-3 text-sm font-medium uppercase tracking-widest text-brown-700 transition-all hover:bg-brown-700 hover:text-ivory-50">
                      {translate('roomsPreview.viewDetails', lang)}
                    </Link>
                    <Link to={`/book?room=${room.slug}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta-600 px-6 py-3 text-sm font-medium uppercase tracking-widest text-ivory-50 transition-all hover:bg-terracotta-700">
                      {translate('roomsPreview.bookRoom', lang)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-terracotta-600 hover:text-terracotta-700 transition-colors">
              {translate('roomsPreview.viewAll', lang)} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 md:py-32 bg-brown-900">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-300 mb-4">
              {translate('experiences.subtitle', lang)}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-ivory-50">
              {translate('experiences.title', lang)}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.key}
                to={`/blog/${exp.blogSlug}`}
                className="group relative h-80 overflow-hidden"
              >
                <img
                  src={exp.image}
                  alt={translate(`experiences.${exp.key}`, lang)}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-medium text-ivory-50 mb-2">
                    {translate(`experiences.${exp.key}`, lang)}
                  </h3>
                  <p className="text-sm text-ivory-50/70 leading-6 line-clamp-2">
                    {translate(`experiences.${exp.key}Desc`, lang)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/experiences" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold-300 hover:text-gold-200 transition-colors">
              {translate('experiences.exploreAll', lang)} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Experience Section */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">{translate('guest.subtitle', lang)}</p>
            <h2 className="section-title">{translate('guest.title', lang)}</h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-ivory-50 p-12 border border-sand-200">
              <p className="text-brown-600 leading-8 italic font-serif text-lg">
                {translate('guest.comingSoon', lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/31356131/pexels-photo-31356131.png?auto=compress&cs=tinysrgb&w=1920"
            alt="Riad Tofaha pool"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/70" />
        </div>
        <div className="relative container-luxury text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-ivory-50 mb-6 text-balance">
            {translate('hero.bookStay', lang)}
          </h2>
          <p className="text-lg text-ivory-50/80 max-w-2xl mx-auto mb-10">
            {getLocalizedText(settings?.brand_description, lang) || translate('welcome.intro', lang)}
          </p>
          <Link to="/book" className="btn-gold">
            {translate('nav.book', lang)}
          </Link>
        </div>
      </section>
    </div>
  );
}
