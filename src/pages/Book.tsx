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

    // Default: English
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
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-20 px-4 mb-12 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium">
            RESERVATION
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-wide">
            {translate('book.title', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            {translate('book.subtitle', lang)}
          </p>
        </div>
      </section>

      {/* Booking Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-50 rounded-2xl border border-sand-300/80 p-6 md:p-10 shadow-lg">
          <form onSubmit={handleBookingSubmit} className="space-y-8">
            
            {/* 1. Room Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                {translate('book.roomSelect', lang)}
              </label>
              <select
                value={selectedRoomSlug}
                onChange={(e) => setSelectedRoomSlug(e.target.value)}
                required
                className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a86548]"
              >
                {rooms.map((room) => (
                  <option key={room.id} value={room.slug}>
                    {getLocalizedText(room.name, lang)} - ({translate('book.capacity', lang)} {room.max_occupancy} {room.max_occupancy === 1 ? translate('book.guestSingular', lang) : translate('book.guestPlural', lang)})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Check-in, Check-out & Guests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#a86548]" /> {translate('book.checkIn', lang)}
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
                  <Calendar size={14} className="text-[#a86548]" /> {translate('book.checkOut', lang)}
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
                  <Users size={14} className="text-[#a86548]" /> {translate('book.guests', lang)}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                >
                  {Array.from({ length: selectedRoom?.max_occupancy || 2 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? translate('book.guestSingular', lang) : translate('book.guestPlural', lang)}
                    </option>
                  ))}
                </select>
                {selectedRoom && (
                  <p className="text-[11px] text-brown-500">
                    * {translate('book.maxGuestsNote', lang)} {selectedRoom.max_occupancy} {selectedRoom.max_occupancy === 1 ? translate('book.guestSingular', lang) : translate('book.guestPlural', lang)}.
                  </p>
                )}
              </div>
            </div>

            <hr className="border-sand-300/60" />

            {/* 3. Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <User size={14} className="text-[#a86548]" /> {translate('book.fullName', lang)}
                </label>
                <input
                  type="text"
                  required
                  placeholder={translate('book.placeholder.fullName', lang)}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Globe size={14} className="text-[#a86548]" /> {translate('book.nationality', lang)}
                </label>
                <input
                  type="text"
                  required
                  placeholder={translate('book.placeholder.nationality', lang)}
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Phone size={14} className="text-[#a86548]" /> {translate('book.phone', lang)}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={translate('book.placeholder.phone', lang)}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                  <Mail size={14} className="text-[#a86548]" /> {translate('book.email', lang)}
                </label>
                <input
                  type="email"
                  required
                  placeholder={translate('book.placeholder.email', lang)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>
            </div>

            {/* 4. Special Requests */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-brown-800 flex items-center gap-1.5">
                <MessageSquare size={14} className="text-[#a86548]" /> {translate('book.specialRequests', lang)}
              </label>
              <textarea
                rows={3}
                placeholder={translate('book.placeholder.notes', lang)}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-ivory-100 border border-sand-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#a86548]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition duration-300"
              >
                <Send size={18} /> {translate('book.submitBtn', lang)}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-brown-500 pt-2 text-center">
              <CheckCircle2 size={15} className="text-[#25D366] shrink-0" />
              <span>{translate('book.redirectNote', lang)}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
