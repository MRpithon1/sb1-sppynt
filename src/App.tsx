import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import HistoryPage from './pages/HistoryPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MenuPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;