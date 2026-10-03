import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, Language } from '@/lib/i18n';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brown-950/95 backdrop-blur-md shadow-lg py-3 border-b border-gold-500/20 text-ivory-50'
          : 'bg-brown-950/85 backdrop-blur-md py-3.5 border-b border-gold-500/10 text-ivory-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* اللوجو */}
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-ivory-50 group-hover:text-gold-300 transition-colors">
            Riad Tofaha
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-gold-300/80 font-medium -mt-1">
            Marrakech
          </span>
        </Link>

        {/* القائمة الخاصة بالحواسيب (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-gold-300 font-semibold'
                    : 'text-ivory-100/80 hover:text-gold-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* زر اللغة والحجز للحواسيب */}
        <div className="hidden lg:flex items-center space-x-5 rtl:space-x-reverse">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 text-xs font-medium bg-ivory-50/10 hover:bg-ivory-50/20 backdrop-blur-md px-3.5 py-2 rounded-xl border border-ivory-50/15 text-ivory-50 transition"
            >
              <Globe size={14} className="text-gold-300" />
              <span className="uppercase tracking-wider font-semibold">{currentLangObj.code}</span>
              <ChevronDown size={13} className={`text-ivory-50/70 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 rtl:left-0 rtl:right-auto mt-2 w-40 bg-brown-950/95 backdrop-blur-xl border border-gold-500/20 rounded-xl shadow-2xl py-2 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-xs transition ${
                      lang === l.code
                        ? 'bg-gold-500/15 text-gold-300 font-bold'
                        : 'text-ivory-100/80 hover:bg-ivory-50/5 hover:text-ivory-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                    {lang === l.code && <Check size={14} className="text-gold-300" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/book"
            className="bg-[#a86548] hover:bg-[#8e5238] text-white px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold transition shadow-md"
          >
            {translate('nav.bookNow', lang)}
          </Link>
        </div>

        {/* عناصر الهيدر المخصصة للهواتف (Mobile) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* محول اللغات المباشر للهاتف */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-ivory-50/10 border border-ivory-50/20 text-ivory-50 font-bold text-[11px] px-2 py-1.5 rounded-lg uppercase focus:outline-none cursor-pointer"
          >
            <option value="en" className="bg-brown-950 text-white">EN</option>
            <option value="fr" className="bg-brown-950 text-white">FR</option>
            <option value="ar" className="bg-brown-950 text-white">AR</option>
            <option value="es" className="bg-brown-950 text-white">ES</option>
          </select>

          {/* زر Book Now للهاتف */}
          <Link
            to="/book"
            className="bg-[#a86548] text-white px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-bold shadow-sm"
          >
            {translate('nav.bookNow', lang)}
          </Link>

          {/* زر الـ Hamburger Menu للهاتف */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-ivory-50 hover:text-gold-300 bg-ivory-50/10 rounded-lg border border-ivory-50/20 focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* قائمة الروابط القابلة للفتح بالضغط على Hamburger Menu للهواتف */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brown-950/98 border-b border-gold-500/20 px-6 py-5 space-y-3 shadow-2xl text-ivory-50 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-widest font-medium py-2.5 border-b border-ivory-50/10 ${
                  location.pathname === link.path ? 'text-gold-300 font-bold' : 'text-ivory-100/80 hover:text-gold-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
