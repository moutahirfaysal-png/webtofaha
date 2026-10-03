import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Users, User, Globe, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import type { Room } from '@/lib/types';

export default function Book() {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const initialRoomSlug = searchParams.get('room') || '';

  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(initialRoomSlug);
  
  // بيانات نموذج الحجز
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [fullName, setFullName] = useState('');
  const [nationality, setNationality] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // رقم الواتساب الخاص بالرياض (قم بتغييره برقم الرياض الخاص بك)
  const riadWhatsAppNumber = '212600000000'; 

  useSEO({
    title: 'Book Your Stay | Riad Tofaha Marrakech',
    description: 'Book your luxury stay at Riad Tofaha directly via WhatsApp.',
    canonicalPath: '/book',
  });

  useEffect(() => {
    fetchRooms().then((data) => {
      setRooms(data);
      if (!selectedRoomSlug && data.length > 0) {
        setSelectedRoomSlug(data[0].slug);
      }
    });
  }, [selectedRoomSlug]);

  // الغرفة المختارة حالياً
  const selectedRoom = rooms.find((r) => r.slug === selectedRoomSlug);

  // تحديث عدد الأشخاص بناءً على سعة الغرفة
  useEffect(() => {
    if (selectedRoom && guests > selectedRoom.max_occupancy) {
      setGuests(selectedRoom.max_occupancy);
    }
  }, [selectedRoom, guests]);

  // دالة تحويل البيانات إلى رسالة واتساب
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomName = selectedRoom ? getLocalizedText(selectedRoom.name, lang) : 'Riad Tofaha Room';

    const message = `✨ *طلب حجز جديد - Riad Tofaha* ✨
----------------------------------
🏡 *الغرفة المختارة:* ${roomName}
👥 *عدد الضيوف:* ${guests} / (الحد الأقصى: ${selectedRoom?.max_occupancy || 2})

📅 *التواريخ:*
• تاريخ الوصول (Check-in): ${checkIn}
• تاريخ المغادرة (Check-out): ${checkOut}

👤 *معلومات الزبون:*
• الاسم الكامل: ${fullName}
• الجنسية: ${nationality}
• الهاتف / الواتساب: ${phone}
• البريد الإلكتروني: ${email}
${notes ? `\n💬 *ملاحظات إضافية:* ${notes}` : ''}
----------------------------------
شكراً لكم! أرغب في تأكيد توفر هذه الغرفة.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${riadWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      {/* Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-20 px-4 mb-12 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium">
            RESERVATION
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-wide">
            Book Your Stay
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            اختر تواريخ إقامتك وادخل معلوماتك، وسنقوم بتأكيد حجزك فوراً عبر الواتساب.
          </p>
        </div>
      </section>

      {/* Booking Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 rounded-2xl border border-sand-300/80 p-6 md:p-10 shadow-lg">
          <form onSubmit={handleBookingSubmit} className="space-y-8">
            
            {/* 1. اختيار الغرفة */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                اختر الغرفة / Room Selection
              </label>
              <select
                value={selectedRoomSlug}
                onChange={(e) => setSelectedRoomSlug(e.target.value)}
                required
                className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a86548]"
              >
                {rooms.map((room) => (
                  <option key={room.id} value={room.slug}>
                    {getLocalizedText(room.name, lang)} - (تتسع لـ {room.max_occupancy} ضيوف)
                  </option>
                ))}
              </select>
            </div>

            {/* 2. التواريخ وعدد الضيوف */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#a86548]" /> تاريخ الوصول / Check-in
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#a86548]" /> تاريخ المغادرة / Check-out
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Users size={14} className="text-[#a86548]" /> عدد الضيوف / Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                >
                  {Array.from({ length: selectedRoom?.max_occupancy || 2 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'ضيف (Guest)' : 'ضيوف (Guests)'}
                    </option>
                  ))}
                </select>
                {selectedRoom && (
                  <p className="text-[11px] text-brown-500">
                    * الحد الأقصى لهذه الغرفة هو {selectedRoom.max_occupancy} أشخاص.
                  </p>
                )}
              </div>
            </div>

            <hr className="border-sand-300/60" />

            {/* 3. المعلومات الشخصية */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <User size={14} className="text-[#a86548]" /> الاسم الكامل / Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: محمد العلوي"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Globe size={14} className="text-[#a86548]" /> الجنسية / Nationality
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: مغربي / French / Spanish"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Phone size={14} className="text-[#a86548]" /> رقم الواتساب / Phone/WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+212 600 000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Mail size={14} className="text-[#a86548]" /> البريد الإلكتروني / Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>
            </div>

            {/* 4. ملاحظات إضافية */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                <MessageSquare size={14} className="text-[#a86548]" /> ملاحظات إضافية / Special Requests
              </label>
              <textarea
                rows={3}
                placeholder="توقيت الوصول المتوقع، أو أي طلبات خاصة..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
              />
            </div>

            {/* زر الإرسال عبر الواتساب */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition duration-300"
              >
                <Send size={18} /> إرسال الحجز عبر الواتساب (Book via WhatsApp)
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-brown-500 pt-2">
              <CheckCircle2 size={15} className="text-[#25D366]" />
              <span>سيتم توجيهك فوراً لرقم الرياض الرسمي على WhatsApp مع الرسالة المنسقة.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
