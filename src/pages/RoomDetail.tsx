import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { roomsData } from '@/lib/roomsData';
import { ArrowLeft, Bath, ShowerHead, Wind, Sparkles, Wifi, CheckCircle, Bed, User, Calendar } from 'lucide-react';

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // البحث عن الغرفة بناءً على slug أو id
  const room = roomsData.find((r) => r.slug === slug || r.id === slug) || roomsData[0];

  const [activeImg, setActiveImg] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Room Not Found</h2>
        <Link to="/rooms" className="text-[#a86548] underline mt-4 inline-block">Back to Rooms</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* زر العودة */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition mb-6 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Rooms
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* معرض الصور والمعلومات */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* معرض الصور */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200 space-y-3">
              <div className="h-96 w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                <img 
                  src={room.images[activeImg] || room.images[0]} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
              
              {/* الصور المصغرة */}
              {room.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {room.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImg(index)}
                      className={`h-20 w-28 flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${
                        activeImg === index ? 'border-[#a86548] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* تفاصيل الغرفة */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 space-y-4">
              <h1 className="text-3xl font-serif font-bold text-stone-800">{room.name}</h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-stone-600 border-y border-stone-100 py-3">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-[#a86548]" />
                  <span>{room.bedType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#a86548]" />
                  <span>{room.capacity}</span>
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm">{room.description}</p>
            </div>

            {/* التجهيزات والخدمات */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-4">Room Amenities & Features</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <Bath className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Private En-suite Bathroom</p>
                    <p className="text-xs text-stone-500">Private bathroom and toilet inside the room</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <ShowerHead className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Towels & Toiletries</p>
                    <p className="text-xs text-stone-500">Fresh towels, soap, and complimentary shampoo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <Wind className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Air Conditioning & Heating</p>
                    <p className="text-xs text-stone-500">Full climate control for summer and winter</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <Sparkles className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Hairdryer</p>
                    <p className="text-xs text-stone-500">Available free of charge in the bathroom</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <Wifi className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">High-Speed Wi-Fi</p>
                    <p className="text-xs text-stone-500">Free high-speed internet access</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-100">
                  <CheckCircle className="w-5 h-5 text-[#a86548]" />
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">Essential Amenities</p>
                    <p className="text-xs text-stone-500">Linens, safe, and electrical outlets</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* بطاقة السعر والحجز الجانبية */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 sticky top-28 space-y-6">
              <div>
                <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold">Price per night</span>
                <span className="text-3xl font-serif font-bold text-[#a86548]">€{room.price}</span>
              </div>

              <div className="space-y-3 pt-2">
                <Link 
                  to="/book" 
                  className="w-full block text-center bg-[#a86548] text-white py-3.5 rounded-xl font-bold hover:bg-[#8e5238] transition shadow-md uppercase tracking-wider text-xs"
                >
                  BOOK THIS ROOM
                </Link>
                
                <p className="text-xs text-center text-stone-500 flex items-center justify-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Best price guaranteed
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
