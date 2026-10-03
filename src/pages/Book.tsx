import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Users, User, Globe, Phone, Mail, MessageSquare, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';
import { fetchRooms } from '@/lib/data';
import { formatPrice } from '@/lib/booking';
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

  // رقم الواتساب الرسمي للرياض
  const riadWhatsAppNumber = '212613136351'; 

  useSEO({
    title: `${translate('book.title', lang)} | Riad Tofaha Marrakech`,
    description: translate('book.subtitle', lang),
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

  const selectedRoom = rooms.find((r) => r.slug === selectedRoomSlug);

  useEffect(() => {
    if (selectedRoom && guests > selectedRoom.max_occupancy) {
      setGuests(selectedRoom.max_occupancy);
    }
  }, [selectedRoom, guests]);

  // صياغة رسالة الواتساب حسب اللغة المختارة
  const getWhatsAppMessage = (roomName: string) => {
    if (lang === 'fr') {
      return `✨ *Nouvelle Demande de Réservation - Riad Tofaha* ✨
----------------------------------
🏡 *Chambre sélectionnée :* ${roomName}
👥 *Nombre de personnes :* ${guests}

📅 *Dates :*
• Date d'arrivée : ${checkIn}
• Date de départ : ${checkOut}

👤 *Informations du client :*
• Nom complet : ${fullName}
• Nationalité : ${nationality}
• Téléphone / WhatsApp : ${phone}
• E-mail : ${email}
${notes ? `\n💬 *Demandes particulières :* ${notes}` : ''}
----------------------------------
Je souhaite confirmer la disponibilité de cette chambre. Merci !`;
    }

    if (lang === 'es') {
      return `✨ *Nueva Solicitud de Reserva - Riad Tofaha* ✨
----------------------------------
🏡 *Habitación seleccionada:* ${roomName}
👥 *Número de huéspedes:* ${guests}

📅 *Fechas:*
• Fecha de llegada: ${checkIn}
• Fecha de salida: ${checkOut}

👤 *Datos del huésped:*
• Nombre completo: ${fullName}
• Nacionalidad: ${nationality}
• Teléfono / WhatsApp: ${phone}
• Correo electrónico: ${email}
${notes ? `\n💬 *Peticiones especiales:* ${notes}` : ''}
----------------------------------
Deseo confirmar la disponibilidad de esta habitación. ¡Muchas gracias!`;
    }

    if (lang === 'ar') {
      return `✨ *طلب حجز جديد - Riad Tofaha* ✨
----------------------------------
🏡 *الغرفة المختارة:* ${roomName}
👥 *عدد الضيوف:* ${guests} (${guests === 1 ? 'ضيف' : 'ضيوف'})

📅 *التواريخ:*
• تاريخ الوصول: ${checkIn}
• تاريخ المغادرة: ${checkOut}

👤 *معلومات الزبون:*
• الاسم الكامل: ${fullName}
• الجنسية: ${nationality}
• الهاتف / الواتساب: ${phone}
• البريد الإلكتروني: ${email}
${notes ? `\n💬 *ملاحظات إضافية:* ${notes}` : ''}
----------------------------------
أرغب في تأكيد توفر هذه الغرفة. شكراً لكم!`;
    }

    return `✨ *New Booking Request - Riad Tofaha* ✨
----------------------------------
🏡 *Selected Room:* ${roomName}
👥 *Number of Guests:* ${guests}

📅 *Dates:*
• Check-in Date: ${checkIn}
• Check-out Date: ${checkOut}

👤 *Guest Details:*
• Full Name: ${fullName}
• Nationality: ${nationality}
• Phone / WhatsApp: ${phone}
• Email: ${email}
${notes ? `\n💬 *Special Requests:* ${notes}` : ''}
----------------------------------
I would like to confirm availability for this room. Thank you!`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const roomName = selectedRoom ? getLocalizedText(selectedRoom.name, lang) : 'Riad Tofaha Room';
    const message = getWhatsAppMessage(roomName);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${riadWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      {/* Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-12 md:py-16 px-4 mb-10 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> RESERVATION
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide">
            {translate('book.title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-xl mx-auto text-xs md:text-sm leading-relaxed font-light">
            {translate('book.subtitle', lang)}
          </p>
        </div>
      </section>

      {/* Main Container - Airbnb Styled Card */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-2xl p-6 sm:p-8 space-y-6">
          
          {/* Header Info of Selected Room */}
          {selectedRoom && (
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  {getLocalizedText(selectedRoom.name, lang)}
                </h2>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  {selectedRoom.bed_config} • {selectedRoom.max_occupancy} {selectedRoom.max_occupancy === 1 ? translate('book.guestSingular', lang) : translate('book.guestPlural', lang)}
                </p>
              </div>
              {selectedRoom.base_price && (
                <div className="text-right">
                  <span className="text-lg font-bold text-neutral-900">
                    {formatPrice(selectedRoom.base_price, selectedRoom.currency)}
                  </span>
                  <span className="text-xs text-neutral-500 block"> / {translate('rooms.night', lang)}</span>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            
            {/* Airbnb Segmented Box Widget */}
            <div className="border border-neutral-300 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition-all shadow-sm">
              
              {/* Row 1: Room Selector */}
              <div className="p-3 bg-neutral-50/60 hover:bg-white transition border-b border-neutral-300">
                <label className="block text-[9px] font-black uppercase tracking-wider text-neutral-500">
                  {translate('book.roomSelect', lang)}
                </label>
                <select
                  value={selectedRoomSlug}
                  onChange={(e) => setSelectedRoomSlug(e.target.value)}
                  required
                  className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer pt-0.5"
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.slug}>
                      {getLocalizedText(room.name, lang)} ({translate('book.capacity', lang)} {room.max_occupancy})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 2: Check-in & Check-out side by side */}
              <div className="grid grid-cols-2 divide-x divide-neutral-300 border-b border-neutral-300 rtl:divide-x-reverse">
                <div className="p-3 bg-neutral-50/60 hover:bg-white transition">
                  <label className="block text-[9px] font-black uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                    <Calendar size={11} className="text-[#a86548]" /> {translate('book.checkIn', lang)}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer pt-0.5"
                  />
                </div>

                <div className="p-3 bg-neutral-50/60 hover:bg-white transition">
                  <label className="block text-[9px] font-black uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                    <Calendar size={11} className="text-[#a86548]" /> {translate('book.checkOut', lang)}
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer pt-0.5"
                  />
                </div>
              </div>

              {/* Row 3: Guests Selector */}
              <div className="p-3 bg-neutral-50/60 hover:bg-white transition">
                <label className="block text-[9px] font-black uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                  <Users size={11} className="text-[#a86548]" /> {translate('book.guests', lang)}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer pt-0.5"
                >
                  {Array.from({ length: selectedRoom?.max_occupancy || 2 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? translate('book.guestSingular', lang) : translate('book.guestPlural', lang)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Details Section (Clean Minimalist Grid) */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-600 block">
                معلومات الحجز الشخصية / Guest Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-neutral-300 rounded-xl p-2.5 bg-neutral-50/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition">
                  <label className="block text-[9px] font-black uppercase text-neutral-500 flex items-center gap-1">
                    <User size={11} className="text-[#a86548]" /> {translate('book.fullName', lang)}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={translate('book.placeholder.fullName', lang)}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent text-xs text-neutral-800 font-medium focus:outline-none pt-0.5"
                  />
                </div>

                <div className="border border-neutral-300 rounded-xl p-2.5 bg-neutral-50/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition">
                  <label className="block text-[9px] font-black uppercase text-neutral-500 flex items-center gap-1">
                    <Globe size={11} className="text-[#a86548]" /> {translate('book.nationality', lang)}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={translate('book.placeholder.nationality', lang)}
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    className="w-full bg-transparent text-xs text-neutral-800 font-medium focus:outline-none pt-0.5"
                  />
                </div>

                <div className="border border-neutral-300 rounded-xl p-2.5 bg-neutral-50/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition">
                  <label className="block text-[9px] font-black uppercase text-neutral-500 flex items-center gap-1">
                    <Phone size={11} className="text-[#a86548]" /> {translate('book.phone', lang)}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={translate('book.placeholder.phone', lang)}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent text-xs text-neutral-800 font-medium focus:outline-none pt-0.5"
                  />
                </div>

                <div className="border border-neutral-300 rounded-xl p-2.5 bg-neutral-50/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition">
                  <label className="block text-[9px] font-black uppercase text-neutral-500 flex items-center gap-1">
                    <Mail size={11} className="text-[#a86548]" /> {translate('book.email', lang)}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={translate('book.placeholder.email', lang)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs text-neutral-800 font-medium focus:outline-none pt-0.5"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="border border-neutral-300 rounded-xl p-2.5 bg-neutral-50/40 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#a86548] focus-within:border-transparent transition">
                <label className="block text-[9px] font-black uppercase text-neutral-500 flex items-center gap-1">
                  <MessageSquare size={11} className="text-[#a86548]" /> {translate('book.specialRequests', lang)}
                </label>
                <textarea
                  rows={2}
                  placeholder={translate('book.placeholder.notes', lang)}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-transparent text-xs text-neutral-800 font-medium focus:outline-none pt-0.5 resize-none"
                />
              </div>
            </div>

            {/* Airbnb Style Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#25D366] to-[#1da851] hover:from-[#20ba5a] hover:to-[#178f43] text-white py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <Send size={16} /> {translate('book.submitBtn', lang)}
              </button>
            </div>

            {/* Reassurance Footer */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 text-center pt-1">
              <ShieldCheck size={14} className="text-[#25D366] shrink-0" />
              <span>{translate('book.redirectNote', lang)}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
