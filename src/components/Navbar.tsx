import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/i18n';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // قائمة الروابط من الترجمات
  const navLinks = [
    { to: '/', label: t('nav.home') || 'Home' },
    { to: '/about', label: t('nav.about') || 'About' },
    { to: '/rooms', label: t('nav.rooms') || 'Our Rooms' },
    { to: '/gallery', label: t('nav.gallery') || 'Gallery' },
    { to: '/experiences', label: t('nav.experiences') || 'Experiences' },
    { to: '/blog', label: t('nav.blog') || 'Blog' },
    { to: '/contact', label: t('nav.contact') || 'Contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* اسم الرياض / اللوجو */}
          <Link to="/" className="text-2xl font-serif font-bold text-stone-800 tracking-wide">
            Riad Tofaha
          </Link>

          {/* روابط التنقل في الشاشات الكبيرة */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-[#a86548] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* زر تغيير اللغة وزر الحجز */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg text-xs font-semibold border border-stone-200">
              <Globe className="w-4 h-4 text-[#a86548]" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent border-none outline-none cursor-pointer text-stone-800 font-bold"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <Link
              to="/book"
              className="bg-[#a86548] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#8e5238] transition shadow-md uppercase tracking-wider"
            >
              {t('nav.bookNow') || 'BOOK NOW'}
            </Link>
          </div>

          {/* قائمة الهاتف المحمول */}
          <div className="flex md:hidden items-center space-x-3 rtl:space-x-reverse">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-stone-100 border border-stone-200 outline-none cursor-pointer text-xs font-bold text-stone-800 p-1.5 rounded-md"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* القائمة المنزلقة للهواتف */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-stone-700 hover:text-[#a86548] font-medium text-sm border-b border-stone-50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#a86548] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider mt-4"
          >
            {t('nav.bookNow') || 'BOOK NOW'}
          </Link>
        </div>
      )}
    </header>
  );
}
