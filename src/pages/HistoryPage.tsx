import React from 'react';
import { Order } from '../types';

// In a real application, you would fetch this data from a database
const mockOrders: Order[] = [
  {
    id: 1,
    items: [
      { menuItem: { id: 1, name: 'Pizza', category: 'Main Course', price: 12.99 }, quantity: 2 },
      { menuItem: { id: 2, name: 'Coke', category: 'Beverage', price: 2.99 }, quantity: 2 },
    ],
    tableNumber: 3,
    timestamp: new Date('2023-05-15T12:30:00'),
    total: 31.96,
    status: 'Completed',
  },
  // Add more mock orders here
];

const HistoryPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Order #{order.id}</h3>
              <span className="text-sm text-gray-500">{order.timestamp.toLocaleString()}</span>
            </div>
            <p>Table: {order.tableNumber}</p>
            <p>Status: {order.status}</p>
            <ul className="mt-2">
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.quantity}x {item.menuItem.name} - ${(item.menuItem.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total: ${order.total.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;