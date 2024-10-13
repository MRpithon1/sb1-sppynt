import React, { useState } from 'react';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuItems';

const AdminDashboard: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    category: 'Appetizer',
    price: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.name && newItem.category && newItem.price) {
      const newMenuItem: MenuItem = {
        id: items.length + 1,
        name: newItem.name,
        category: newItem.category as MenuItem['category'],
        price: newItem.price,
      };
      setItems([...items, newMenuItem]);
      setNewItem({ name: '', category: 'Appetizer', price: 0 });
    }
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Menu Item</h3>
        <form onSubmit={handleAddItem} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={newItem.category}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="Appetizer">Appetizer</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newItem.price}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Item
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Menu Items</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Category</th>
              <th className="text-left">Price</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;