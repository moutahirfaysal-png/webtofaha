import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/i18n';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // تأثير تغير خلفية الهيدر عند التمرير لأسفل
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // قائمة الروابط
  const navLinks = [
    { to: '/', label: t('nav.home') || 'Home' },
    { to: '/about', label: t('nav.about') || 'About' },
    { to: '/rooms', label: t('nav.rooms') || 'Our Rooms' },
    { to: '/gallery', label: t('nav.gallery') || 'Gallery' },
    { to: '/experiences', label: t('nav.experiences') || 'Experiences' },
    { to: '/blog', label: t('nav.blog') || 'Blog' },
    { to: '/contact', label: t('nav.contact') || 'Contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80' 
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* الشعار الفاخر للرياض */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-wider group-hover:text-[#a86548] transition-colors">
              Riad Tofaha
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-[#a86548] uppercase -mt-1 pl-0.5">
              Marrakech
            </span>
          </Link>

          {/* روابط التنقل في الشاشات الكبيرة */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-1 transition-colors duration-200 hover:text-[#a86548] ${
                    isActive ? 'text-[#a86548] font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {/* خط سفلي متحرك يظهر تحت رابط الصفحة النشطة */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#a86548] rounded-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* الجانب الأيمن: اختيار اللغة + زر الحجز */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* اختيار اللغة الفاخر */}
            <div className="relative group">
              <div className="flex items-center gap-2 bg-stone-100/80 hover:bg-stone-100 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-700 border border-stone-200/80 cursor-pointer transition">
                <Globe className="w-3.5 h-3.5 text-[#a86548]" />
                <span className="uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 text-stone-400 group-hover:rotate-180 transition-transform" />
              </div>

              {/* القائمة المنسدلة للغات */}
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 bg-white rounded-xl shadow-xl border border-stone-100 py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs text-left rtl:text-right hover:bg-stone-50 transition ${
                      language === lang.code ? 'font-bold text-[#a86548] bg-stone-50/80' : 'text-stone-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* زر الحجز الرئيسي */}
            <Link
              to="/book"
              className="bg-[#a86548] hover:bg-[#8e5238] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              {t('nav.bookNow') || 'BOOK NOW'}
            </Link>

          </div>

          {/* أزرار الهواتف الذكية */}
          <div className="flex lg:hidden items-center gap-3">
            
            {/* اختار اللغة للهاتف */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-stone-100 border border-stone-200 outline-none text-xs font-bold text-stone-800 p-1.5 rounded-lg uppercase"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.code.toUpperCase()}
                </option>
              ))}
            </select>

            {/* زر القائمة المنسدلة للهاتف */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-800 hover:text-[#a86548] focus:outline-none transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* القائمة المنزلقة للهواتف الذكية */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-stone-100 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-sm font-medium border-b border-stone-100 transition ${
                    isActive ? 'text-[#a86548] font-bold' : 'text-stone-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#a86548] text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md mt-4"
          >
            {t('nav.bookNow') || 'BOOK NOW'}
          </Link>
        </div>
      )}
    </header>
  );
}
