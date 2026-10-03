import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Users, Send, CheckCircle2, Bed, Sparkles, Tag } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText, Language } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
import type { Room } from '@/lib/types';

export default function Book() {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const roomSlugParam = searchParams.get('room');

  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>('');
  
  // بيانات الحجز
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [notes, setNotes] = useState('');

  const whatsappNumber = '212618177464';

  useSEO({
    title: `${translate('nav.booknow', lang)} | Riad Tofaha Marrakech`,
    description: translate('rooms.desc', lang),
    canonicalPath: '/book',
  });

  useEffect(() => {
    fetchRooms().then((data) => {
      setRooms(data);
      if (roomSlugParam && data.some((r) => r.slug === roomSlugParam)) {
        setSelectedRoomSlug(roomSlugParam);
      } else if (data.length > 0) {
        setSelectedRoomSlug(data[0].slug);
      }
    });
  }, [roomSlugParam]);

  const selectedRoom = rooms.find((r) => r.slug === selectedRoomSlug) || rooms[0];

  // حساب عدد الليالي والمبلغ التقديري
  const calculateNightsAndTotal = () => {
    if (!checkIn || !checkOut) return { nights: 0, total: 0 };
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const pricePerNight = selectedRoom?.base_price || 85;
    return { nights, total: nights * pricePerNight };
  };

  const { nights, total } = calculateNightsAndTotal();

  // إنشاء وتوجيه رسالة الواتساب
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomName = selectedRoom ? getLocalizedText(selectedRoom.name, lang) : 'Riad Room';
    const roomPriceStr = selectedRoom ? formatPrice(selectedRoom.base_price, selectedRoom.currency) : '€85';

    let messageText = '';

    if (lang === 'fr') {
      messageText = `🏨 *Demande de Réservation Directe - Riad Tofaha* 🏨\n----------------------------------\n🛏️ *Chambre Sélectionnée:* ${roomName}\n💰 *Prix par nuit:* ${roomPriceStr}/nuit\n📅 *Arrivée (Check-in):* ${checkIn || 'Non spécifié'}\n📅 *Départ (Check-out):* ${checkOut || 'Non spécifié'}\n🌙 *Nombre de nuits:* ${nights > 0 ? nights : 1}\n👥 *Nombre d'hôtes:* ${guestsCount}\n💵 *Total Estimé:* ${total > 0 ? formatPrice(total, selectedRoom?.currency || 'EUR') : roomPriceStr}\n\n👤 *Nom Complet:* ${guestName}\n📱 *Téléphone:* ${guestPhone}\n📧 *E-mail:* ${guestEmail}\n📝 *Notes:* ${notes || 'Aucune'}\n----------------------------------`;
    } else if (lang === 'ar') {
      messageText = `🏨 *طلب حجز مباشر - رياض تفاحة* 🏨\n----------------------------------\n🛏️ *الغرفة المختارة:* ${roomName}\n💰 *السعر لليلة:* ${roomPriceStr}/ليلة\n📅 *تاريخ الوصول:* ${checkIn || 'غير محدد'}\n📅 *تاريخ المغادرة:* ${checkOut || 'غير محدد'}\n🌙 *عدد الليالي:* ${nights > 0 ? nights : 1}\n👥 *عدد الضيوف:* ${guestsCount}\n💵 *المبلغ الإجمالي التقديري:* ${total > 0 ? formatPrice(total, selectedRoom?.currency || 'EUR') : roomPriceStr}\n\n👤 *الاسم الكامل:* ${guestName}\n📱 *الهاتف:* ${guestPhone}\n📧 *البريد الإلكتروني:* ${guestEmail}\n📝 *ملاحظات:* ${notes || 'لا يوجد'}\n----------------------------------`;
    } else if (lang === 'es') {
      messageText = `🏨 *Solicitud de Reserva Directa - Riad Tofaha* 🏨\n----------------------------------\n🛏️ *Habitación Seleccionada:* ${roomName}\n💰 *Precio por noche:* ${roomPriceStr}/noche\n📅 *Llegada:* ${checkIn || 'No especificada'}\n📅 *Salida:* ${checkOut || 'No especificada'}\n🌙 *Noches:* ${nights > 0 ? nights : 1}\n👥 *Huéspedes:* ${guestsCount}\n💵 *Total Estimado:* ${total > 0 ? formatPrice(total, selectedRoom?.currency || 'EUR') : roomPriceStr}\n\n👤 *Nombre:* ${guestName}\n📱 *Teléfono:* ${guestPhone}\n📧 *Correo:* ${guestEmail}\n📝 *Notas:* ${notes || 'Ninguna'}\n----------------------------------`;
    } else {
      messageText = `🏨 *Direct Stay Booking Request - Riad Tofaha* 🏨\n----------------------------------\n🛏️ *Selected Room:* ${roomName}\n💰 *Rate per night:* ${roomPriceStr}/night\n📅 *Check-in:* ${checkIn || 'Not set'}\n📅 *Check-out:* ${checkOut || 'Not set'}\n🌙 *Total Nights:* ${nights > 0 ? nights : 1}\n👥 *Guests:* ${guestsCount}\n💵 *Estimated Total:* ${total > 0 ? formatPrice(total, selectedRoom?.currency || 'EUR') : roomPriceStr}\n\n👤 *Full Name:* ${guestName}\n📱 *Phone:* ${guestPhone}\n📧 *Email:* ${guestEmail}\n📝 *Notes:* ${notes || 'None'}\n----------------------------------`;
    }

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-20 px-4 mb-12 border-b border-gold-500/20 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> DIRECT BOOKING
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide">
            {translate('nav.booknow', lang)}
          </h1>
          <p className="text-ivory-50/80 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed">
            احجز إقامتك مباشرة مع رياض تفاحة للحصول على أفضل الأسعار المؤكدة والخدمة المباشرة عبر الواتساب.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Selected Room Summary & Image/Price Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Room Selector Dropdown */}
            <div className="bg-white p-6 rounded-3xl border border-sand-300 shadow-sm space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-2">
                <Tag size={16} className="text-[#a86548]" /> اختر الغرفة المطلوبة:
              </label>
              <select
                value={selectedRoomSlug}
                onChange={(e) => setSelectedRoomSlug(e.target.value)}
                className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs md:text-sm font-bold text-brown-900 focus:outline-none focus:ring-2 focus:ring-[#a86548]"
              >
                {rooms.map((r) => (
                  <option key={r.id} value={r.slug}>
                    {getLocalizedText(r.name, lang)} — ({formatPrice(r.base_price, r.currency)} / ليلة)
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Room Card Preview */}
            {selectedRoom && (
              <div className="bg-white rounded-3xl overflow-hidden border border-sand-300 shadow-lg space-y-4 p-5">
                <div className="relative h-60 rounded-2xl overflow-hidden">
                  <img
                    src={selectedRoom.images[0] || '/terasssse.jpeg'}
                    alt={getLocalizedText(selectedRoom.name, lang)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-ivory-50/95 px-3 py-1.5 rounded-xl shadow-md border border-sand-300">
                    <span className="text-xs font-bold text-brown-900">
                      {formatPrice(selectedRoom.base_price, selectedRoom.currency)}
                    </span>
                    <span className="text-[10px] text-brown-500 font-light"> / ليلة</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-brown-900">
                    {getLocalizedText(selectedRoom.name, lang)}
                  </h3>
                  <p className="text-xs text-brown-600 font-light leading-relaxed">
                    {getLocalizedText(selectedRoom.short_description, lang) || getLocalizedText(selectedRoom.description, lang)}
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-xs text-brown-800 font-medium">
                    <span className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-sand-300 flex items-center gap-1.5">
                      <Bed size={14} className="text-[#a86548]" /> {selectedRoom.bed_config}
                    </span>
                    <span className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-sand-300 flex items-center gap-1.5">
                      <Users size={14} className="text-[#a86548]" /> {selectedRoom.max_occupancy} ضيوف
                    </span>
                  </div>
                </div>

                {/* Price Breakdown Preview */}
                {nights > 0 && (
                  <div className="bg-[#2A1810] text-ivory-50 p-4 rounded-2xl space-y-2">
                    <div className="flex justify-between text-xs text-ivory-50/80">
                      <span>{nights} ليلة × {formatPrice(selectedRoom.base_price, selectedRoom.currency)}</span>
                      <span>{formatPrice(total, selectedRoom.currency)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-gold-300 pt-1 border-t border-white/10">
                      <span>المبلغ الإجمالي التقديري:</span>
                      <span>{formatPrice(total, selectedRoom.currency)}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Side: Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-sand-300 shadow-lg space-y-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-900">
                تأكيد بيانات إقامتك
              </h2>
              <p className="text-xs text-brown-600 font-light mt-1">
                حدد التواريخ وبياناتك وسيتم فتح محادثة WhatsApp فوراً لتأكيد الحجز.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#a86548]" /> تاريخ الوصول (Check-in)
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#a86548]" /> تاريخ المغادرة (Check-out)
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>
              </div>

              {/* Guests Count */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Users size={14} className="text-[#a86548]" /> عدد الضيوف
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                >
                  <option value={1}>ضيف واحد (1 Guest)</option>
                  <option value={2}>ضيفين (2 Guests)</option>
                  <option value={3}>3 ضيوف (3 Guests)</option>
                  <option value={4}>4 ضيوف (4 Guests)</option>
                </select>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: فيصل المحمدي"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                    رقم الهاتف / الواتساب
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+212 600 000000"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                  ملاحظات أو طلبات خاصة (اختياري)
                </label>
                <textarea
                  rows={3}
                  placeholder="مثال: طلب خدمة الاستقبال من المطار أو وقت الوصول المتوقع..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition duration-300"
              >
                <Send size={16} /> تأكيد وإرسال الحجز عبر الواتساب
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brown-500 pt-1 text-center">
                <CheckCircle2 size={14} className="text-[#25D366] shrink-0" />
                <span>حجز مباشر وآمن بدون أي رسوم إضافية.</span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
