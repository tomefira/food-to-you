"use client";

import React, { useState } from 'react';

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      items: [{ name: 'Item 1', quantity: 2 }],
      total: 20,
      address: '123 Street',
      contact: '555-555-5555',
      status: 'pending',
    },
  ]);

  const handleAcceptOrder = (id: number) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'accepted' } : order));
  };

  const handleRejectOrder = (id: number) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'rejected' } : order));
  };

  const handleMarkAsDelivered = (id: number) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: 'delivered' } : order));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Incoming Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="mb-4 p-4 border rounded-lg">
            <div>
              <p>Order ID: {order.id}</p>
              <p>Customer: {order.customer}</p>
              <p>Items:</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
              <p>Address: {order.address}</p>
              <p>Contact: {order.contact}</p>
              <p>Status: {order.status}</p>
            </div>
            <div className="mt-2">
              {order.status === 'pending' && (
                <>
                  <button onClick={() => handleAcceptOrder(order.id)} className="px-4 py-2 bg-green-500 text-white rounded-md mr-2">Accept Order</button>
                  <button onClick={() => handleRejectOrder(order.id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Reject Order</button>
                </>
              )}
              {order.status === 'accepted' && (
                <button onClick={() => handleMarkAsDelivered(order.id)} className="px-4 py-2 bg-blue-500 text-white rounded-md">Mark as Delivered</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManagement;
