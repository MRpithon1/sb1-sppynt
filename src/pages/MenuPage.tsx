import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuList from '../components/MenuList';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuItems';

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<MenuItem[]>(menuItems);

  useEffect(() => {
    setItems(menuItems);
  }, []);

  const handleItemSelect = (item: MenuItem) => {
    navigate('/order', { state: { selectedItem: item } });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      <MenuList menuItems={items} onItemSelect={handleItemSelect} />
    </div>
  );
};

export default MenuPage;