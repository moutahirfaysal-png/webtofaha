import React, { useState } from 'react';
import { roomsData, RoomData } from '../lib/roomsData';
import { RoomDetailsModal } from './RoomDetailsModal';

export const RoomsSection = () => {
  // State للتحكم بالنافذة المنبثقة
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roomsData.map((room) => (
          <div key={room.id} className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <img src={room.images[0]} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{room.description}</p>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-2">
              <button
                onClick={() => setSelectedRoom(room)}
                className="w-full border border-stone-400 py-2.5 rounded text-xs font-bold hover:bg-stone-100 transition uppercase tracking-wider"
              >
                VIEW ROOM DETAILS
              </button>
              
              <button className="w-full bg-[#a86548] text-white py-2.5 rounded text-xs font-bold hover:bg-[#8e5238] transition uppercase tracking-wider">
                BOOK THIS ROOM
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة */}
      <RoomDetailsModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBook={(room) => {
          // كود الحجز عند الضغط على زر Book This Room داخل النافذة
        }}
      />
    </div>
  );
};
