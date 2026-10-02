import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  // استخدام رقمك مباشرة لمنع الإعدادات من التغطية عليه
  const whatsappNumber = '+212618177464';

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
      </span>
    </a>
  );
}