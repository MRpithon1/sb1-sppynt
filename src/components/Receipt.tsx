import React from 'react';
import { Order } from '../types';
import { jsPDF } from 'jspdf';

interface ReceiptProps {
  order: Order;
}

const Receipt: React.FC<ReceiptProps> = ({ order }) => {
  const downloadReceipt = () => {
    const doc = new jsPDF();
    let yPos = 20;

    doc.setFontSize(18);
    doc.text('Receipt', 105, yPos, { align: 'center' });
    yPos += 10;

    doc.setFontSize(12);
    doc.text(`Order ID: ${order.id}`, 20, yPos);
    yPos += 10;
    doc.text(`Table: ${order.tableNumber}`, 20, yPos);
    yPos += 10;
    doc.text(`Date: ${order.timestamp.toLocaleString()}`, 20, yPos);
    yPos += 20;

    doc.setFontSize(10);
    doc.text('Item', 20, yPos);
    doc.text('Qty', 100, yPos);
    doc.text('Price', 130, yPos);
    doc.text('Subtotal', 160, yPos);
    yPos += 10;

    order.items.forEach((item) => {
      doc.text(item.menuItem.name, 20, yPos);
      doc.text(item.quantity.toString(), 100, yPos);
      doc.text(`$${item.menuItem.price.toFixed(2)}`, 130, yPos);
      doc.text(`$${(item.quantity * item.menuItem.price).toFixed(2)}`, 160, yPos);
      yPos += 10;
    });

    yPos += 10;
    doc.setFontSize(12);
    doc.text(`Total: $${order.total.toFixed(2)}`, 160, yPos);

    doc.save(`receipt_${order.id}.pdf`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Receipt</h3>
      <p>Order ID: {order.id}</p>
      <p>Table: {order.tableNumber}</p>
      <p>Date: {order.timestamp.toLocaleString()}</p>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
              <tr key={item.menuItem.id}>
                <td>{item.menuItem.name}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">${item.menuItem.price.toFixed(2)}</td>
                <td className="text-right">${(item.quantity * item.menuItem.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 pt-2 border-t">
        <p className="text-xl font-bold text-right">Total: ${order.total.toFixed(2)}</p>
      </div>
      <button
        onClick={downloadReceipt}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Download Receipt
      </button>
    </div>
  );
};

export default Receipt;