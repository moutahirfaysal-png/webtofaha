import { useState } from 'react';
import { Phone, Mail, MapPin, Send, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, Language } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';

export default function Contact() {
  const { lang } = useLanguage();

  // بيانات الرياض الرسمية
  const phoneFormatted = '+212 618 177464';
  const whatsappNumber = '212618177464';
  const contactEmail = 'contact@riadtofaha.com';
  
  // الروابط المباشرة
  const bookingComUrl = 'https://www.booking.com/hotel/ma/riad-tofaha.fr.html';
  const airbnbUrl = 'https://www.airbnb.fr/rooms/1434061785654499260';
  const googleMapsUrl = 'https://maps.app.goo.gl/twzPTFH4qwoBpLct7';

  // نموذج الرسائل
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useSEO({
    title: `${translate('nav.contact', lang)} | Riad Tofaha Marrakech`,
    description: translate('contact.herosubtitle', lang),
    canonicalPath: '/contact',
  });

  // توليد قالب رسالة الواتساب ديناميكياً بحسب اللغة المختارة
  const getWhatsAppMessage = (selectedLang: Language, name: string, emailStr: string, subj: string, msg: string) => {
    switch (selectedLang) {
      case 'fr':
        return `💬 *Nouveau Message de Demande - Riad Tofaha* 💬\n----------------------------------\n👤 *Nom:* ${name}\n📧 *E-mail:* ${emailStr}\n📌 *Sujet:* ${subj}\n\n📝 *Message:*\n${msg}\n----------------------------------`;
      case 'es':
        return `💬 *Nuevo Mensaje de Consulta - Riad Tofaha* 💬\n----------------------------------\n👤 *Nombre:* ${name}\n📧 *Correo Electrónico:* ${emailStr}\n📌 *Asunto:* ${subj}\n\n📝 *Mensaje:*\n${msg}\n----------------------------------`;
      case 'ar':
        return `💬 *رسالة استفسار جديدة من الموقع - Riad Tofaha* 💬\n----------------------------------\n👤 *الاسم:* ${name}\n📧 *البريد الإلكتروني:* ${emailStr}\n📌 *الموضوع:* ${subj}\n\n📝 *الرسالة:*\n${msg}\n----------------------------------`;
      case 'en':
      default:
        return `💬 *New Inquiry Message - Riad Tofaha* 💬\n----------------------------------\n👤 *Name:* ${name}\n📧 *Email:* ${emailStr}\n📌 *Subject:* ${subj}\n\n📝 *Message:*\n${msg}\n----------------------------------`;
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = getWhatsAppMessage(lang, fullName, email, subject, message);
    const encodedMessage = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen text-brown-900">
      
      {/* 1. Header Banner */}
      <section className="bg-[#2A1810] text-ivory-50 py-16 md:py-24 px-4 mb-16 border-b border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium flex items-center justify-center gap-2">
            <Sparkles size={14} /> {translate('contact.herotagline', lang)}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide leading-tight">
            {translate('contact.herotitle', lang)}
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-light">
            {translate('contact.herosubtitle', lang)}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 2. Contact Cards & Booking Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 rounded-3xl border border-sand-300/80 shadow-sm flex items-start gap-4 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#2A1810] text-gold-300 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <Phone size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a86548]">
                  {translate('contact.phone', lang)}
                </span>
                <p className="font-serif text-lg font-bold text-brown-900 mt-0.5">
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#a86548] transition">
                    {phoneFormatted}
                  </a>
                </p>
                <p className="text-xs text-brown-500 font-light mt-1">
                  {translate('contact.phone.subtext', lang)}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-3xl border border-sand-300/80 shadow-sm flex items-start gap-4 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#2A1810] text-gold-300 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <Mail size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a86548]">
                  {translate('contact.email', lang)}
                </span>
                <p className="font-serif text-base font-bold text-brown-900 mt-0.5">
                  <a href={`mailto:${contactEmail}`} className="hover:text-[#a86548] transition">
                    {contactEmail}
                  </a>
                </p>
                <p className="text-xs text-brown-500 font-light mt-1">
                  {translate('contact.email.subtext', lang)}
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-sand-300/80 shadow-sm flex items-start gap-4 hover:shadow-md transition">
              <div className="w-12 h-12 bg-[#2A1810] text-gold-300 rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a86548]">
                  {translate('contact.address', lang)}
                </span>
                <p className="font-serif text-sm font-bold text-brown-900 mt-0.5 leading-snug">
                  {translate('contact.addressval', lang)}
                </p>
                <p className="text-xs text-brown-500 font-light mt-1">
                  {translate('contact.address.subtext', lang)}
                </p>
              </div>
            </div>

            {/* External Booking Channels (Booking.com & Airbnb) */}
            <div className="bg-gradient-to-br from-[#2A1810] to-[#4A2E1B] text-ivory-50 p-6 rounded-3xl shadow-xl border border-gold-500/20 space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-gold-300">
                  {translate('contact.otastitle', lang)}
                </h3>
                <p className="text-xs text-ivory-50/80 font-light mt-1 leading-relaxed">
                  {translate('contact.otassubtitle', lang)}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={bookingComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-2xl border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#003580] text-white font-black text-xs px-2.5 py-1 rounded">
                      Booking
                    </div>
                    <span className="text-xs font-semibold text-ivory-50 group-hover:text-gold-300 transition">
                      {translate('contact.bookingbadge', lang)}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-gold-300" />
                </a>

                <a
                  href={airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 px-4 py-3 rounded-2xl border border-white/15 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#FF5A5F] text-white font-black text-xs px-2.5 py-1 rounded">
                      airbnb
                    </div>
                    <span className="text-xs font-semibold text-ivory-50 group-hover:text-gold-300 transition">
                      {translate('contact.airbnbbadge', lang)}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-gold-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-sand-300/80 shadow-lg space-y-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-brown-900">
                {translate('contact.formtitle', lang)}
              </h2>
              <p className="text-xs text-brown-600 font-light mt-1">
                {translate('contact.form.subtext', lang)}
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                    {translate('contact.fullname', lang)}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={translate('contact.placeholder.name', lang)}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-ivory-100/70 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                    {translate('contact.emailaddress', lang)}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={translate('contact.placeholder.email', lang)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-ivory-100/70 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                  {translate('contact.subject', lang)}
                </label>
                <input
                  type="text"
                  required
                  placeholder={translate('contact.placeholder.subject', lang)}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-ivory-100/70 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-brown-800">
                  {translate('contact.message', lang)}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={translate('contact.placeholder.message', lang)}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-ivory-100/70 border border-sand-300 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#a86548] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition duration-300"
              >
                <Send size={16} /> {translate('contact.sendbtn', lang)}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brown-500 pt-1 text-center">
                <CheckCircle2 size={14} className="text-[#25D366] shrink-0" />
                <span>{translate('contact.send.subtext', lang)}</span>
              </div>
            </form>
          </div>

        </div>

        {/* 3. Google Maps Section */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-sand-300/80 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-brown-900 flex items-center gap-2">
              <MapPin className="text-[#a86548]" size={20} />
              {translate('contact.maptitle', lang)}
            </h2>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a86548] hover:text-brown-900 transition"
            >
              {translate('contact.openinmaps', lang)} <ExternalLink size={14} />
            </a>
          </div>

          <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-sand-300 shadow-inner">
            <iframe
              title="Riad Tofaha Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.883733182397!2d-7.9945!3d31.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d373c09e8633%3A0x33b1e3523fbf5f7a!2sRiad%20TOFAHA!5e0!3m2!1sen!2sma!4v1710000000000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </div>
  );
}
