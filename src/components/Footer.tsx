export default function Footer() {
  return (
    <footer className="bg-[#1a0f0d] text-white py-12 border-t border-[#8c5830]/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* العمود الأول: اسم الرياض */}
        <div>
          <h3 className="text-2xl font-serif text-[#d4af37] mb-3">Riad Tofaha</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your peaceful sanctuary in the heart of the historic Medina of Marrakesh.
          </p>
        </div>

        {/* العمود الثاني: روابط سريعة أو معلومات التواصل */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/rooms" className="hover:text-white transition">Our Rooms</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* العمود الثالث: العنوان والبريد الإلكتروني (بدون Newsletter وحذف Experience) */}
        <div>
          <h4 className="text-lg font-semibold text-[#d4af37] mb-3">Contact Us</h4>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Address:</strong> 18 Rue Ank Jemel, Marrakesh 40000
          </p>
          <p className="text-sm text-gray-300">
            <strong>Email:</strong> riadtofaha@gmail.com
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Riad Tofaha. All rights reserved.
      </div>
    </footer>
  );
}
