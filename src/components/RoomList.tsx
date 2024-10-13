import React from 'react';
import { Room } from '../types';
import { Bed } from 'lucide-react';

interface RoomListProps {
  rooms: Room[];
  onRoomSelect: (room: Room) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, onRoomSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`p-4 rounded-lg shadow-md cursor-pointer transition-colors ${
            room.status === 'Available'
              ? 'bg-green-100 hover:bg-green-200'
              : room.status === 'Occupied'
              ? 'bg-red-100'
              : 'bg-yellow-100'
          }`}
          onClick={() => onRoomSelect(room)}
        >
          <div className="flex items-center justify-between mb-2">
            <Bed className="w-6 h-6" />
            <span className="font-bold">{room.number}</span>
          </div>
          <p className="text-sm">{room.type}</p>
          <p className="text-sm font-semibold">${room.price}/night</p>
          <p className="text-xs mt-2">{room.status}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomList;