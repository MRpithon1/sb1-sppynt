import React from 'react';
import { OrderItem } from '../types';

interface OrderSummaryProps {
  orderItems: OrderItem[];
  onQuantityChange: (itemId: number, newQuantity: number) => void;
  onRemoveItem: (itemId: number) => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderItems, onQuantityChange, onRemoveItem }) => {
  const total = orderItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      {orderItems.map((item) => (
        <div key={item.menuItem.id} className="flex justify-between items-center mb-2">
          <span>{item.menuItem.name}</span>
          <div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => onQuantityChange(item.menuItem.id, parseInt(e.target.value))}
              className="w-16 text-right mr-2 p-1 border rounded"
            />
            <button
              onClick={() => onRemoveItem(item.menuItem.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 pt-2 border-t">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;