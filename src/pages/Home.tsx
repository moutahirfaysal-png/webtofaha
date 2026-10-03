import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight, Bed, Users, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText, Language } from '@/lib/i18n';
import { useSEO, buildLodgingBusinessSchema, buildOrganizationSchema, buildWebSiteSchema } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { useSettings } from '@/lib/SettingsContext';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

// مكون بطاقة الغرفة المزود بأسهم التنقل بين الصور
function RoomCard({ room, lang }: { room: Room; lang: Language }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = room.images && room.images.length > 0 
    ? room.images 
    : ['/terasssse.jpeg'];

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="card-luxury group">
      <div className="relative h-72 overflow-hidden rounded-t-3xl">
        <Link to={`/rooms/${room.slug}`} className="block h-full w-full">
          <img
            src={images[currentImageIndex]}
            alt={getLocalizedText(room.name, lang)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
        </Link>

        {/* أسهم التصفح بين صور الغرفة */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Previous Image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-brown-900/60 hover:bg-brown-900 text-ivory-50 p-2 rounded-full backdrop-blur-md transition shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next Image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-brown-900/60 hover:bg-brown-900 text-ivory-50 p-2 rounded-full backdrop-blur-md transition shadow-md"
            >
              <ChevronRight size={18} />
            </button>

            {/* مؤشر النقاط لعدد الصور */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 bg-brown-900/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'w-4 bg-gold-300' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* سعر الغرفة */}
        {room.base_price && (
          <div className="absolute top-4 right-4 bg-ivory-50/95 px-4 py-2 rounded-xl shadow-sm z-10 pointer-events-none">
            <span className="text-sm font-medium text-brown-800">
              {translate('roomsPreview.from', lang)} {formatPrice(room.base_price, room.currency)}
            </span>
            <span className="text-xs text-brown-500"> / {translate('roomsPreview.perNight', lang)}</span>
          </div>
        )}

        {/* مواصفات الغرفة */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3 text-ivory-50 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 text-xs bg-brown-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <Bed size={14} /> {room.bed_config}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs bg-brown-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <Users size={14} /> {room.max_occupancy} {translate('roomsPreview.guests', lang)}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-serif text-2xl font-medium text-brown-800 mb-2">
          {getLocalizedText(room.name, lang)}
        </h3>
        <p className="text-sm text-brown-600 leading-7 mb-6 font-light">
          {getLocalizedText(room.short_description, lang) || getLocalizedText(room.description, lang)}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={`/rooms/${room.slug}`} className="flex-1 inline-flex items-center justify-center gap-2 border border-brown-300 px-6 py-3 text-sm font-medium uppercase tracking-widest text-brown-700 transition-all hover:bg-brown-700 hover:text-ivory-50 rounded-xl">
            {translate('roomsPreview.viewDetails', lang)}
          </Link>
          <Link to={`/book?room=${room.slug}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-[#a86548] hover:bg-[#8e5238] px-6 py-3 text-sm font-medium uppercase tracking-widest text-ivory-50 transition-all rounded-xl shadow-sm">
            {translate('roomsPreview.bookRoom', lang)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { lang } = useLanguage();
  const { settings } = useSettings();
  const [rooms, setRooms] = useState<Room[]>([]);

  useSEO({
    title: undefined,
    description: 'Riad Tofaha is a traditional Moroccan riad in the heart of Marrakech offering authentic accommodation, warm hospitality, and an unforgettable cultural experience.',
    canonicalPath: '/',
    jsonLd: [buildLodgingBusinessSchema(), buildOrganizationSchema(), buildWebSiteSchema()],
  });

  useEffect(() => {
    fetchRooms().then(setRooms);
  }, []);

  const heroImage = '/terasssse.jpeg';

  // نصوص بديلة ذكية تتجنب ظهور كلمات عامة مثل tagline أو subtitle
  const customTagline = 
    getLocalizedText(settings?.brand_tagline, lang) && 
    getLocalizedText(settings?.brand_tagline, lang) !== 'TAGLINE' 
      ? getLocalizedText(settings?.brand_tagline, lang) 
      : (lang === 'fr' ? 'Un havre de paix au cœur de la médina' : lang === 'ar' ? 'واحة من الهدوء في قلب المدينة العتيقة' : 'A traditional sanctuary in the heart of Marrakech');

  const customDescription = 
    getLocalizedText(settings?.brand_description, lang) && 
    getLocalizedText(settings?.brand_description, lang) !== 'subtitle' 
      ? getLocalizedText(settings?.brand_description, lang) 
      : (lang === 'fr' 
          ? 'Découvrez l’authentique hospitalité marocaine dans notre riad rénové, alliant charme traditionnel et confort moderne.' 
          : lang === 'ar' 
          ? 'اكتشف أصالة الضيافة المغربية في رياضنا التقليدي الذي يجمع بين روعة التراث ووسائل الراحة الحديثة.' 
          : 'Experience authentic Moroccan hospitality in a beautifully restored traditional riad combining timeless heritage and modern comfort.');

  const experiences = [
    { key: 'jemaa', image: 'https://images.pexels.com/photos/35513343/pexels-photo-35513343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'best-places-to-visit-in-marrakech-tourist-guide' },
    { key: 'bahia', image: 'https://images.pexels.com/photos/10306569/pexels-photo-10306569.png?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'best-places-to-visit-in-marrakech-tourist-guide' },
    { key: 'majorelle', image: 'https://images.pexels.com/photos/5435195/pexels-photo-5435195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: '10-best-things-to-do-in-marrakech' },
    { key: 'souks', image: 'https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'marrakech-travel-tips-before-visiting' },
    { key: 'cuisine', image: 'https://images.pexels.com/photos/2291596/pexels-photo-2291596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'what-to-eat-in-marrakech-moroccan-cuisine-guide' },
    { key: 'hammam', image: 'https://images.pexels.com/photos/7391720/pexels-photo-7391720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', blogSlug: 'perfect-romantic-getaway-in-marrakech' },
  ];

  const realBookingReviews = [
    {
      id: '1',
      name: 'Mbarek',
      country: 'France',
      flag: '🇫🇷',
      date: '28 mars 2026',
      room: 'Chambre Double Deluxe',
      score: '10',
      title: 'Exceptionnel',
      comment: "J'ai passé un séjour exceptionnel dans ce riad Tofaha récemment rénové, à seulement 15 minutes à pied du centre. Le déjeuner est parfait rien à dire. Khalid, l'hôte, a été incroyablement gentil, accueillant et serviable durant mon séjour. Les quatre chambres indépendantes, la cuisine commune équipée et la terrasse sur le toit rendent le séjour particulièrement confortable. L'endroit est à la fois authentique et moderne !",
      ownerResponse: "Me Mbarek merci beaucoup pour votre message"
    },
    {
      id: '2',
      name: 'Marcel',
      country: 'Hongrie',
      flag: '🇭🇺',
      date: '6 août 2026',
      room: 'Chambre Double Deluxe',
      score: '10',
      title: 'Exceptionnel',
      comment: "Everything was just perfect. Highly recommend. And owner it's always available. I felt like being in a 5***** hotel.",
      ownerResponse: "Thanks a lot bro 🤓 you are welcome anytime"
    },
    {
      id: '3',
      name: 'Daniel',
      country: 'Allemagne',
      flag: '🇩🇪',
      date: '10 mai 2026',
      room: 'Chambre Double Deluxe',
      score: '10',
      title: 'Exceptionnel',
      comment: "Stayed at Khalils Riad for two nights at a weekend. Really enjoyed this time. He's a very kind guy and takes care about his guests. Rooms are clean and beds are comfortable. Definitely recommend this place and looking forward to go there again!!",
      ownerResponse: "Thanks a lot Daniel and you are welcome any time"
    }
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
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gold-300 mb-6 font-medium">
              {customTagline}
            </p>
            <h1 className="text-hero font-serif font-medium text-ivory-50 mb-8 text-balance">
              Riad Tofaha
            </h1>
            <p className="text-lg md:text-xl text-ivory-50/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              {customDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/rooms" className="btn-primary">
                {translate('hero.exploreRooms', lang)}
              </Link>
              <Link to="/book" className="btn-outline">
                {translate('hero.bookStay', lang)}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown size={28} className="text-ivory-50/70 animate-bounce" />
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a86548] font-bold">
              {translate('home.rooms_subtitle', lang)}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-brown-900">
              {translate('home.rooms_title', lang)}
            </h2>
            <p className="text-brown-600 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto pt-1">
              {translate('home.rooms_desc', lang)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} lang={lang} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#a86548] hover:text-[#8e5238] transition-colors">
              {translate('roomsPreview.viewAll', lang)} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 md:py-32 bg-[#2A1810]">
        <div className="container-luxury">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gold-300">
              {translate('experiences.subtitle', lang)}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-ivory-50">
              {translate('experiences.title', lang)}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.key}
                to={`/blog/${exp.blogSlug}`}
                className="group relative h-80 overflow-hidden rounded-2xl border border-gold-500/10 shadow-lg"
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
                  <p className="text-sm text-ivory-50/70 leading-6 line-clamp-2 font-light">
                    {translate(`experiences.${exp.key}Desc`, lang)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking.com Reviews Section */}
      <section className="py-24 md:py-32 bg-ivory-100">
        <div className="container-luxury">
          <div className="text-center mb-16 space-y-4">
            <p className="section-subtitle">GUEST REVIEWS & EXPERIENCES</p>
            <h2 className="section-title">What Our Guests Say on Booking.com</h2>

            <div className="inline-flex items-center gap-3 bg-ivory-50 px-6 py-3 rounded-2xl shadow-sm border border-sand-200 mt-4">
              <div className="bg-[#003580] text-white font-bold text-lg px-3 py-1 rounded-lg">
                10 / 10
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-sm font-bold text-brown-800 flex items-center gap-1.5">
                  <span>Exceptionnel</span>
                  <span className="text-xs text-brown-400">• Verified by Booking.com</span>
                </div>
                <div className="text-xs text-brown-600">Authentic reviews from verified guests</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realBookingReviews.map((item) => (
              <div 
                key={item.id} 
                className="bg-ivory-50 p-8 rounded-2xl shadow-sm border border-sand-200 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-sand-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{item.flag}</span>
                      <div>
                        <h4 className="font-bold text-brown-800 text-sm">{item.name}</h4>
                        <p className="text-[11px] text-brown-500">{item.country} • {item.date}</p>
                      </div>
                    </div>
                    <div className="bg-[#003580] text-white font-bold text-xs px-2.5 py-1 rounded-md">
                      {item.score} / 10
                    </div>
                  </div>

                  <p className="text-[11px] font-semibold text-[#a86548] uppercase tracking-wider">
                    {item.room}
                  </p>

                  <div>
                    <h3 className="font-serif font-bold text-brown-800 text-base mb-1.5">
                      "{item.title}"
                    </h3>
                    <p className="text-brown-600 text-xs leading-relaxed font-light">
                      {item.comment}
                    </p>
                  </div>
                </div>

                {item.ownerResponse && (
                  <div className="mt-6 pt-4 border-t border-sand-200 bg-sand-100/60 p-3 rounded-xl">
                    <p className="text-[11px] font-bold text-brown-800 mb-0.5 flex items-center gap-1">
                      <MessageSquareQuote size={13} className="text-[#a86548]" /> Réponse de l'établissement:
                    </p>
                    <p className="text-[11px] text-brown-600 italic">
                      "{item.ownerResponse}"
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="/terasse.jpeg"
            alt="Riad Tofaha terrace"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2A1810]/80" />
        </div>
        <div className="relative container-luxury text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-ivory-50 mb-6 text-balance">
            {translate('hero.bookStay', lang)}
          </h2>
          <p className="text-lg text-ivory-50/80 max-w-2xl mx-auto mb-10 font-light">
            {customDescription}
          </p>
          <Link to="/book" className="bg-[#a86548] hover:bg-[#8e5238] text-white px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition duration-300 shadow-xl inline-block">
            {translate('nav.booknow', lang)}
          </Link>
        </div>
      </section>
    </div>
  );
}
