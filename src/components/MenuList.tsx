import React from 'react';
import { MenuItem } from '../types';
import { Utensils } from 'lucide-react';

interface MenuListProps {
  menuItems: MenuItem[];
  onItemSelect: (item: MenuItem) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menuItems, onItemSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-lg shadow-md cursor-pointer transition-colors bg-white hover:bg-gray-100"
          onClick={() => onItemSelect(item)}
        >
          <div className="flex items-center justify-between mb-2">
            <Utensils className="w-6 h-6" />
            <span className="font-bold">{item.name}</span>
          </div>
          <p className="text-sm">{item.category}</p>
          <p className="text-sm font-semibold">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;