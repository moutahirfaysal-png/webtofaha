import { Link } from 'react-router-dom';
import { Footprints, Car, MapPin, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
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

  const cards = [
    {
      icon: Footprints,
      title: translate('about.card1_title', lang),
      desc: translate('about.card1_desc', lang),
    },
    {
      icon: Car,
      title: translate('about.card2_title', lang),
      desc: translate('about.card2_desc', lang),
    },
    {
      icon: MapPin,
      title: translate('about.card3_title', lang),
      desc: translate('about.card3_desc', lang),
    },
    {
      icon: ShieldCheck,
      title: translate('about.card4_title', lang),
      desc: translate('about.card4_desc', lang),
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* 1. Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-20 px-4 mb-16 border-b border-gold-500/20 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> {translate('about.hero_badge', lang)}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide leading-tight">
            {translate('about.hero_title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-xs md:text-sm font-light leading-relaxed">
            {translate('about.hero_subtitle', lang)}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 2. Concept & Images Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#a86548] font-bold bg-[#a86548]/10 px-4 py-1.5 rounded-full inline-block border border-[#a86548]/20">
              {translate('about.story_badge', lang)}
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-brown-900 leading-tight">
              {translate('about.story_title', lang)}
            </h2>
            <p className="text-brown-700 leading-relaxed font-light text-xs md:text-sm">
              {translate('about.story_p1', lang)}
            </p>
            <p className="text-brown-700 leading-relaxed font-light text-xs md:text-sm">
              {translate('about.story_p2', lang)}
            </p>
            <div className="pt-2 flex items-center gap-4">
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

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/terasssse.jpeg"
              alt="Riad Tofaha Terrace"
              className="rounded-3xl shadow-lg h-72 w-full object-cover border border-sand-300"
            />
            <img
              src="/terasse.jpeg"
              alt="Riad Tofaha Courtyard"
              className="rounded-3xl shadow-lg h-72 w-full object-cover mt-6 border border-sand-300"
            />
          </div>
        </section>

        {/* 3. 4 Essential Highlights */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-sand-300/80 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((item, idx) => {
              const IconC = item.icon;
              return (
                <div key={idx} className="bg-ivory-100/70 p-6 rounded-2xl border border-sand-200 space-y-3 hover:border-[#a86548]/40 transition">
                  <div className="w-11 h-11 bg-[#2A1810] text-gold-300 rounded-xl flex items-center justify-center shadow-md">
                    <IconC size={20} />
                  </div>
                  <h3 className="font-serif text-base font-bold text-brown-900 pt-1">
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

        {/* 4. CTA */}
        <section className="bg-[#2A1810] text-ivory-50 rounded-3xl py-12 px-6 text-center shadow-xl border border-gold-500/20">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-medium">
              Ready to Experience Riad Tofaha?
            </h2>
            <p className="text-ivory-50/80 text-xs md:text-sm font-light">
              Book your stay directly via WhatsApp for instant confirmation and personalized service.
            </p>
            <div className="pt-2">
              <Link
                to="/book"
                className="inline-block bg-[#a86548] hover:bg-[#8e5238] text-white px-8 py-3 rounded-xl text-xs uppercase tracking-widest font-bold transition shadow-lg hover:scale-105"
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
