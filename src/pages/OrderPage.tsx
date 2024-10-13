import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderSummary from '../components/OrderSummary';
import Receipt from '../components/Receipt';
import { OrderItem, MenuItem, Order } from '../types';

const OrderPage: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [tableNumber, setTableNumber] = useState<number>(1);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedItem = location.state?.selectedItem as MenuItem | undefined;
    if (selectedItem) {
      handleItemSelect(selectedItem);
    }
  }, [location.state]);

  const handleItemSelect = (item: MenuItem) => {
    const existingItem = orderItems.find((orderItem) => orderItem.menuItem.id === item.id);
    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.menuItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrderItems([...orderItems, { menuItem: item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    setOrderItems(
      orderItems.map((item) =>
        item.menuItem.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setOrderItems(orderItems.filter((item) => item.menuItem.id !== itemId));
  };

  const handleCompleteOrder = () => {
    const total = orderItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
    const newOrder: Order = {
      id: Date.now(),
      items: orderItems,
      tableNumber,
      timestamp: new Date(),
      total,
      status: 'Completed' as const,
    };
    
    // In a real application, you would save this order to a database
    console.log('Order completed:', newOrder);
    
    setCompletedOrder(newOrder);
  };

  const handleNewOrder = () => {
    setOrderItems([]);
    setTableNumber(1);
    setCompletedOrder(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Current Order</h2>
      {completedOrder ? (
        <>
          <Receipt order={completedOrder} />
          <button
            onClick={handleNewOrder}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Start New Order
          </button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="tableNumber" className="block text-sm font-medium text-gray-700">
              Table Number
            </label>
            <input
              type="number"
              id="tableNumber"
              value={tableNumber}
              onChange={(e) => setTableNumber(parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <OrderSummary
            orderItems={orderItems}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
          <button
            onClick={handleCompleteOrder}
            className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={orderItems.length === 0}
          >
            Complete Order
          </button>
        </>
      )}
    </div>
  );
};

export default OrderPage;