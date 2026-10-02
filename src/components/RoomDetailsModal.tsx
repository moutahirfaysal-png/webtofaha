import React, { useState } from 'react';
import { X, Wifi, Wind, Bath, ShowerHead, Sparkles, CheckCircle, Bed, User } from 'lucide-react';
import { RoomData } from '../lib/roomsData'; // تعديل المسار حسب مكان roomsData

interface Props {
  room: RoomData | null;
  onClose: () => void;
  onBook: (room: RoomData) => void;
}

export const RoomDetailsModal: React.FC<Props> = ({ room, onClose, onBook }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 transition-all">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-800">{room.name}</h3>
            <div className="flex gap-4 text-xs text-gray-500 mt-1">
              <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#a86548]" /> {room.bedType}</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4 text-[#a86548]" /> {room.capacity}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* معرض صور الغرفة */}
          <div className="space-y-3">
            <div className="h-72 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <img 
                src={room.images[selectedImageIndex] || room.images[0]} 
                alt={room.name} 
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            
            {/* المصغرات للتنقل بين صور الغرفة */}
            {room.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      selectedImageIndex === idx ? 'border-[#a86548] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* وصف الغرفة */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">وصف الغرفة</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
          </div>

          {/* تجهيزات ومعدات الغرفة */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">معدات وخدمات الغرفة</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              
              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Bath className="w-5 h-5 text-[#a86548]" />
                <span>دوش وطواليط داخلي خاص</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <ShowerHead className="w-5 h-5 text-[#a86548]" />
                <span>فوطات ومعدات الدوش والشامبو</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Wind className="w-5 h-5 text-[#a86548]" />
                <span>كليماتيزور (تكييف وتدفئة)</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Sparkles className="w-5 h-5 text-[#a86548]" />
                <span>مجفف شعر (Séche-cheveux)</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <Wifi className="w-5 h-5 text-[#a86548]" />
                <span>واي فاي سريع ومجاني</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl border border-stone-100">
                <CheckCircle className="w-5 h-5 text-[#a86548]" />
                <span>المعدات الأساسية (خزنة، أغطية، إلخ)</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-500 block">السعر ابتداءً من</span>
            <span className="text-xl font-bold text-[#a86548]">€{room.price} <span className="text-xs text-gray-500 font-normal">/ ليلة</span></span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBook(room);
            }}
            className="bg-[#a86548] text-white px-6 py-2.5 rounded-xl hover:bg-[#8e5238] transition font-medium shadow-md"
          >
            BOOK THIS ROOM
          </button>
        </div>

      </div>
    </div>
  );
};
