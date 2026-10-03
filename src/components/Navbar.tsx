import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // قائمة روابط الهيدر (تم إزالة Experiences والإبقاء على Blog)
  const navLinks = [
    { path: '/', label: translate('nav.home', lang) || 'Home' },
    { path: '/about', label: translate('nav.about', lang) || 'About' },
    { path: '/rooms', label: translate('nav.rooms', lang) || 'Our Rooms' },
    { path: '/gallery', label: translate('nav.gallery', lang) || 'Gallery' },
    { path: '/blog', label: translate('nav.blog', lang) || 'Blog' },
    { path: '/contact', label: translate('nav.contact', lang) || 'Contact' },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm py-3 border-b border-sand-200'
          : 'bg-ivory-50/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl font-bold tracking-wider text-brown-900 group-hover:text-terracotta-600 transition-colors">
            Riad Tofaha
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-brown-500 font-medium -mt-1">
            Marrakech
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-widest font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-terracotta-600 font-semibold'
                    : 'text-brown-700 hover:text-terracotta-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Language Selector & Book Now CTA */}
        <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs text-brown-700 font-medium bg-sand-100/60 px-3 py-1.5 rounded-lg border border-sand-200">
            <Globe size={14} className="text-terracotta-600" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-transparent border-none text-xs font-semibold uppercase focus:outline-none cursor-pointer"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code} className="text-brown-900">
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          {/* Book Now Button */}
          <Link
            to="/book"
            className="bg-[#a86548] hover:bg-[#8e5238] text-white px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold transition shadow-sm"
          >
            {translate('nav.bookNow', lang) || 'Book Now'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/book"
            className="bg-[#a86548] text-white px-4 py-2 rounded-lg text-[11px] uppercase tracking-wider font-bold"
          >
            Book
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brown-800 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory-50 border-b border-sand-200 px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-widest font-medium py-2 border-b border-sand-100 ${
                  location.pathname === link.path
                    ? 'text-terracotta-600 font-bold'
                    : 'text-brown-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-brown-600">Language:</span>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code as any);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs px-2.5 py-1 rounded font-bold uppercase ${
                    lang === l.code
                      ? 'bg-[#a86548] text-white'
                      : 'bg-sand-100 text-brown-700'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
