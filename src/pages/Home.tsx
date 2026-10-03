import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
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
    </div>
  );
}
