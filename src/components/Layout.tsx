import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CreditCard, Menu, ShoppingCart, Clock, Settings } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <CreditCard className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">Restaurant POS</h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="flex items-center hover:text-blue-200">
                  <Menu className="w-5 h-5 mr-1" />
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="flex items-center hover:text-blue-200">
                  <ShoppingCart className="w-5 h-5 mr-1" />
                  Current Order
                </Link>
              </li>
              <li>
                <Link to="/history" className="flex items-center hover:text-blue-200">
                  <Clock className="w-5 h-5 mr-1" />
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/admin" className="flex items-center hover:text-blue-200">
                  <Settings className="w-5 h-5 mr-1" />
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2023 Restaurant POS System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;