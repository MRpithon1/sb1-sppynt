export interface MenuItem {
  id: number;
  name: string;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Beverage';
  price: number;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {
  id: number;
  items: OrderItem[];
  tableNumber: number;
  timestamp: Date;
  total: number;
  status: 'In Progress' | 'Completed';
}