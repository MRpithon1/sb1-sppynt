import React, { useState } from 'react';
import { Room, Booking } from '../types';

interface BookingFormProps {
  room: Room;
  onBookingComplete: (booking: Booking) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ room, onBookingComplete }) => {
  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24);
    const totalPrice = room.price * nights;

    const newBooking: Booking = {
      id: Date.now(),
      roomId: room.id,
      guestName,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      totalPrice,
    };

    onBookingComplete(newBooking);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="guestName" className="block text-sm font-medium text-gray-700">
          Guest Name
        </label>
        <input
          type="text"
          id="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
          Check-in Date
        </label>
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
          Check-out Date
        </label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Complete Booking
      </button>
    </form>
  );
};

export default BookingForm;