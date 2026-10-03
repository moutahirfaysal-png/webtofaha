import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, Language } from '@/lib/i18n';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: translate('nav.home', lang) },
    { path: '/about', label: translate('nav.about', lang) },
    { path: '/rooms', label: translate('nav.rooms', lang) },
    { path: '/gallery', label: translate('nav.gallery', lang) },
    { path: '/blog', label: translate('nav.blog', lang) },
    { path: '/contact', label: translate('nav.contact', lang) },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brown-950/90 backdrop-blur-md py-3 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold text-ivory-50">Riad Tofaha</span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gold-300 -mt-1">Marrakech</span>
        </Link>

        {/* Links */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-medium transition ${
                location.pathname === link.path ? 'text-gold-300 font-bold' : 'text-ivory-100/80 hover:text-gold-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-ivory-50/10 px-3 py-1.5 rounded-lg border border-ivory-50/20 text-ivory-50 text-xs">
            <Globe size={14} className="text-gold-300" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-ivory-50 font-bold uppercase cursor-pointer focus:outline-none"
            >
              <option value="en" className="bg-brown-950 text-white">EN</option>
              <option value="fr" className="bg-brown-950 text-white">FR</option>
              <option value="ar" className="bg-brown-950 text-white">AR</option>
              <option value="es" className="bg-brown-950 text-white">ES</option>
            </select>
          </div>

          <Link to="/book" className="bg-[#a86548] text-white px-5 py-2 rounded-lg text-xs uppercase font-bold tracking-wider hover:bg-[#8e5238] transition">
            {translate('nav.bookNow', lang)}
          </Link>
        </div>
      </div>
    </header>
  );
}
