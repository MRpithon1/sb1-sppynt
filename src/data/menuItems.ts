import { MenuItem } from '../types';

export let menuItems: MenuItem[] = [
  { id: 1, name: 'Caesar Salad', category: 'Appetizer', price: 8.99 },
  { id: 2, name: 'Margherita Pizza', category: 'Main Course', price: 12.99 },
  { id: 3, name: 'Grilled Salmon', category: 'Main Course', price: 18.99 },
  { id: 4, name: 'Chocolate Cake', category: 'Dessert', price: 6.99 },
  { id: 5, name: 'Iced Tea', category: 'Beverage', price: 2.99 },
  { id: 6, name: 'Chicken Wings', category: 'Appetizer', price: 9.99 },
  { id: 7, name: 'Spaghetti Bolognese', category: 'Main Course', price: 14.99 },
  { id: 8, name: 'Cheesecake', category: 'Dessert', price: 7.99 },
];

export const updateMenuItems = (newItems: MenuItem[]) => {
  menuItems = newItems;
};