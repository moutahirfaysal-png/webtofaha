import React from 'react';
import { Link } from 'react-router-dom'; // أو استخدام الـ router المعتمد في مشروعك (مثل next/link إذا كنت تستخدم Next.js)

export default function Footer() {
  // دالة التمرير إلى أعلى الصفحة بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // للتمرير بشكل سلس، أو يمكنك جعلها مباشرة دون تدرج إذا أردت
    });
  };

  return (
    <footer className="bg-[#1a0f0d] text-gray-300 py-12 border-t border-[#3d231e]">
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
            <strong className="text-gray-200">Email:</strong> riadtofahr@gmail.com
          </p>
        </div>

      </div>
      
      <div className="mt-8 pt-6 border-t border-[#3d231e] text-center text-xs text-gray-500">
        © 2026 Riad Tofaha. All rights reserved.
      </div>
    </footer>
  );
}
