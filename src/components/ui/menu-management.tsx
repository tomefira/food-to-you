"use client";

import React, { useState, useEffect } from 'react';

interface MenuItem {
  id: string;
  productID: string;
  productName: string;
  productCost: number;
  restaurant: { id: string; name: string }; // Restaurant field added
}

const MenuManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState<MenuItem>({
    id: '',
    productID: '',
    productName: '',
    productCost: 0,
    restaurant: { id: '', name: '' }, // Initialize restaurant with empty values
  });

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  const handleNewItemChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'productCost' ? parseFloat(value) : value;
    setNewItem(prevState => ({
      ...prevState,
      [name]: name === 'restaurantName' ? { ...prevState.restaurant, name: value } : newValue,
    }));
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    const data: MenuItem = await response.json();
    setMenuItems([...menuItems, data]);
    setNewItem({ id: '', productID: '', productName: '', productCost: 0, restaurant: { id: '', name: '' } });
  };

  const handleDeleteItem = async (id: string) => {
    const response = await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Current Menu Items</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className="mb-2 flex justify-between">
            <div>
              {item.productName} - ${item.productCost} ({item.restaurant.name})
            </div>
            <div>
              <button onClick={() => handleDeleteItem(item.id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddItem} className="mt-4">
        <h2 className="text-xl font-bold mb-4">Add New Menu Item</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={newItem.productName}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Product Cost</label>
          <input
            type="text"
            name="productCost"
            value={newItem.productCost}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            type="text"
            name="restaurantName"
            value={newItem.restaurant.name}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default MenuManagement;