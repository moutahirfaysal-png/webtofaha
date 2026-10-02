import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, LANGUAGES, type Language } from '@/lib/i18n';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: translate('nav.home', lang) },
    { to: '/about', label: translate('nav.about', lang) },
    { to: '/rooms', label: translate('nav.rooms', lang) },
    { to: '/gallery', label: translate('nav.gallery', lang) },
    { to: '/experiences', label: translate('nav.experiences', lang) },
    { to: '/blog', label: translate('nav.blog', lang) },
    { to: '/contact', label: translate('nav.contact', lang) },
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent py-5'
            : 'bg-ivory-50/95 backdrop-blur-md py-3 shadow-md'
        }`}
      >
        <nav className="container-luxury flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span
              className={`font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-500 ${
                isTransparent ? 'text-ivory-50' : 'text-brown-800'
              }`}
            >
              Riad Tofaha
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 link-underline ${
                  isTransparent
                    ? 'text-ivory-50 hover:text-gold-300'
                    : 'text-brown-700 hover:text-terracotta-600'
                } ${
                  location.pathname === link.to
                    ? isTransparent
                      ? 'text-gold-300'
                      : 'text-terracotta-600'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                  isTransparent ? 'text-ivory-50' : 'text-brown-700'
                }`}
                aria-label="Select language"
              >
                <Globe size={18} />
                <span className="uppercase">{lang}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-sm bg-ivory-50 shadow-lg overflow-hidden">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-sand-100 ${
                        lang === l.code ? 'bg-sand-100 text-terracotta-600 font-medium' : 'text-brown-700'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/book"
              className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                isTransparent
                  ? 'bg-terracotta-600 text-ivory-50 hover:bg-terracotta-700'
                  : 'bg-terracotta-600 text-ivory-50 hover:bg-terracotta-700'
              }`}
            >
              {translate('nav.book', lang)}
            </Link>

            <button
              className={`lg:hidden ${isTransparent ? 'text-ivory-50' : 'text-brown-800'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brown-900/95 pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl font-serif ${
                  location.pathname === link.to ? 'text-gold-300' : 'text-ivory-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-ivory-50/20 pt-6">
              <p className="text-sm text-ivory-50/60 uppercase tracking-widest mb-3">Language</p>
              <div className="flex gap-4">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as Language)}
                    className={`text-sm font-medium ${
                      lang === l.code ? 'text-gold-300' : 'text-ivory-50'
                    }`}
                  >
                    {l.flag}
                  </button>
                ))}
              </div>
            </div>
            <Link
              to="/book"
              className="btn-primary mt-4"
            >
              {translate('nav.book', lang)}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
