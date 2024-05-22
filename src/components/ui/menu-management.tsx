"use client";

import React, { useState, useEffect } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const MenuManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Specify type for menuItems
  const [newItem, setNewItem] = useState<MenuItem>({
    id: 0, // Assuming id is number
    name: '',
    description: '',
    price: 0, // Assuming price is number
    category: 'appetizer',
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
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newItem}),
    });
    const data: MenuItem = await response.json(); // Specify type for data
    setMenuItems([...menuItems, data]);
    setNewItem({ id: 0, name: '', description: '', price: 0, category: 'appetizer' }); // Reset newItem
  };

  const handleDeleteItem = async (id: number) => {
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
              {item.name} - ${item.price} ({item.category})
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
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            name="price"
            value={newItem.price}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={newItem.category}
            onChange={handleNewItemChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="appetizer">Appetizer</option>
            <option value="entree">Entree</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default MenuManagement;
