import { Link } from 'react-router-dom';
import { Car, MapPin, Footprints, ShieldCheck, Sun, Utensils, Bed, HeartHandshake, Sparkles, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';

export default function About() {
  const { lang } = useLanguage();

  useSEO({
    title: translate('about.page_title', lang),
    description: translate('about.hero_subtitle', lang),
    canonicalPath: '/about',
  });

  const stats = [
    { icon: Bed, label: translate('about.stats.rooms', lang) },
    { icon: Footprints, label: translate('about.stats.walk', lang) },
    { icon: Car, label: translate('about.stats.access', lang) },
    { icon: Star, label: translate('about.stats.rating', lang) },
  ];

  const locationFeatures = [
    {
      icon: Footprints,
      title: translate('about.loc1_title', lang),
      desc: translate('about.loc1_desc', lang),
    },
    {
      icon: Car,
      title: translate('about.loc2_title', lang),
      desc: translate('about.loc2_desc', lang),
    },
    {
      icon: MapPin,
      title: translate('about.loc3_title', lang),
      desc: translate('about.loc3_desc', lang),
    },
    {
      icon: ShieldCheck,
      title: translate('about.loc4_title', lang),
      desc: translate('about.loc4_desc', lang),
    },
  ];

  const highlights = [
    {
      icon: Bed,
      title: translate('about.f1_title', lang),
      desc: translate('about.f1_desc', lang),
    },
    {
      icon: Sun,
      title: translate('about.f2_title', lang),
      desc: translate('about.f2_desc', lang),
    },
    {
      icon: Utensils,
      title: translate('about.f3_title', lang),
      desc: translate('about.f3_desc', lang),
    },
    {
      icon: HeartHandshake,
      title: translate('about.f4_title', lang),
      desc: translate('about.f4_desc', lang),
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* 1. Hero Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-24 px-4 mb-12 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> {translate('about.hero_badge', lang)}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide leading-tight text-balance">
            {translate('about.hero_title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-light">
            {translate('about.hero_subtitle', lang)}
          </p>
        </div>
      </section>

      {/* 2. Quick Highlights Counter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-sand-300/80 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((st, idx) => {
            const IconC = st.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center space-y-2 p-2">
                <div className="w-10 h-10 bg-[#2A1810] text-gold-300 rounded-xl flex items-center justify-center shadow">
                  <IconC size={20} />
                </div>
                <span className="font-serif text-xs md:text-sm font-bold text-brown-900">
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 3. Story & Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a86548] font-bold bg-[#a86548]/10 px-4 py-1.5 rounded-full inline-block border border-[#a86548]/20">
              {translate('about.concept_badge', lang)}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-brown-900 leading-tight">
              {translate('about.concept_title', lang)}
            </h2>
            <p className="text-brown-700 leading-relaxed font-light text-xs md:text-sm">
              {translate('about.concept_p1', lang)}
            </p>
            <p className="text-brown-700 leading-relaxed font-light text-xs md:text-sm">
              {translate('about.concept_p2', lang)}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="inline-flex items-center gap-2 bg-[#a86548] hover:bg-[#8e5238] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-md"
              >
                {translate('nav.rooms', lang)} <ArrowRight size={14} />
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 border border-[#a86548] text-[#a86548] hover:bg-[#a86548] hover:text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition"
              >
                {translate('nav.booknow', lang)}
              </Link>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="/terasssse.jpeg"
              alt="Riad Tofaha Terrace"
              className="rounded-3xl shadow-xl h-72 md:h-80 w-full object-cover border border-sand-300"
            />
            <img
              src="/terasse.jpeg"
              alt="Riad Tofaha Courtyard"
              className="rounded-3xl shadow-xl h-72 md:h-80 w-full object-cover mt-8 border border-sand-300"
            />
          </div>
        </section>

        {/* 4. Prime Location & Access Features */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-sand-300/80 shadow-lg space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a86548] font-bold">
              {translate('about.location_badge', lang)}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-brown-900">
              {translate('about.location_title', lang)}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="bg-ivory-100/70 p-6 rounded-2xl border border-sand-200 space-y-3 hover:border-gold-500/40 transition">
                  <div className="w-12 h-12 bg-[#2A1810] text-gold-300 rounded-xl flex items-center justify-center shadow-md">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-brown-900 pt-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-brown-600 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Exclusivities & Highlights */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a86548] font-bold">
              {translate('about.features_badge', lang)}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-brown-900">
              {translate('about.features_title', lang)}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-3xl border border-sand-300/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center space-y-3"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2A1810] to-[#4A2E1B] text-gold-300 rounded-2xl flex items-center justify-center mx-auto shadow-md border border-gold-500/20">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-brown-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brown-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="bg-[#2A1810] text-ivory-50 rounded-3xl py-14 px-6 text-center relative overflow-hidden shadow-2xl border border-gold-500/20">
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <h2 className="font-serif text-2xl md:text-4xl font-medium">
              Ready to Experience Riad Tofaha?
            </h2>
            <p className="text-ivory-50/80 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Book directly with us via WhatsApp to enjoy guaranteed best rates, immediate confirmation, and personalized hospitality.
            </p>
            <div>
              <Link
                to="/book"
                className="inline-block bg-[#a86548] hover:bg-[#8e5238] text-white px-8 py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold transition shadow-xl hover:scale-105"
              >
                {translate('nav.booknow', lang)}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
