import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // مراقبة النزول في الصفحة لإظهار أو إخفاء زر السهم
  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  // دالة الصعود إلى أعلى الصفحة بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#1a0f0d] text-gray-300 py-12 border-t border-[#3d231e] relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* معلومات الرياض */}
        <div>
          <h3 className="text-xl font-serif text-[#d4af37] mb-3">Riad Tofaha</h3>
          <p className="text-sm text-gray-400">
            Your peaceful sanctuary in the heart of the historic Medina of Marrakech.
          </p>
        </div>

        {/* Quick Links المربوطة */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                to="/" 
                onClick={scrollToTop} 
                className="hover:text-[#d4af37] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={scrollToTop} 
                className="hover:text-[#d4af37] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/rooms" 
                onClick={scrollToTop} 
                className="hover:text-[#d4af37] transition-colors"
              >
                Our Rooms
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                onClick={scrollToTop} 
                className="hover:text-[#d4af37] transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={scrollToTop} 
                className="hover:text-[#d4af37] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* معلومات الاتصال */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-1">
            <strong className="text-gray-200">Address:</strong> 18 Rue Ank Jemel, Marrakesh 40000
          </p>
          <p className="text-sm text-gray-400">
            <strong className="text-gray-200">Email:</strong> riadtofaha@gmail.com
          </p>
        </div>

      </div>

      {/* حقوق النشر */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-[#3d231e] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Riad Tofaha. All rights reserved.</p>
        
        {/* زر السهم الصغير للصعود إلى الأعلى */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 bg-[#d4af37] hover:bg-[#c29e2f] text-[#1a0f0d] p-2.5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </footer>
  );
}
