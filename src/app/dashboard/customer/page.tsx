'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const CustomerDashboard: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [paymentOption, setPaymentOption] = useState<string>('membership');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePaymentOptionChange = (option: string) => {
    setPaymentOption(option);
  };

  const placeOrder = () => {
    // Perform order placement logic here
    console.log('Order placed!');
    setCart([]);
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Customer Dashboard</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        {/* Search and Filter Component */}
        <div className="flex-1">
          <select className="select select-bordered w-full max-w-xs mb-4">
            <option disabled selected>
              Select Category
            </option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
          </select>
          <label className="input-group mb-4">
            <input type="text" className="input input-bordered w-full" placeholder="Search" />
            <span className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </label>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Distance</span>
            </label>
            <input type="range" min={0} max={100} defaultValue={40} className="range range-primary" />
          </div>
          <div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-lg p-6">
          {/* Restaurant List Component */}
          <div className="space-y-4">
            {/* Restaurant Item */}
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image src="" alt="Restaurant 1" width={500} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Restaurant 1</h2>
                <p>Cuisine: Italian</p>
                <p>Distance: 2 miles</p>
                <p>Rating: 4.5</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => setSelectedRestaurant({ name: 'Restaurant 1' })}>
                    View Menu
                  </button>
                </div>
              </div>
            </div>
            {/* Add more restaurant items */}
          </div>
        </div>

        {selectedRestaurant && (
          <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
            {/* Restaurant Details Component */}
            <h2 className="text-2xl font-bold mb-4">{selectedRestaurant.name}</h2>
            <p className="mb-2">Cuisine: Italian</p>
            <p className="mb-2">Address: 123 Main St, City, Country</p>
            <p className="mb-4">Phone: 123-456-7890</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Menu</h3>
              {/* Menu Category */}
              <div className="mb-4">
                <h4 className="text-lg font-bold mb-2">Appetizers</h4>
                <div className="space-y-2">
                  {/* Menu Item */}
                  <div className="flex justify-between">
                    <p>Appetizer 1</p>
                    <button className="btn btn-sm btn-primary" onClick={() => addToCart({ name: 'Appetizer 1', price: 10 })}>
                      Add to Cart
                    </button>
                  </div>
                  {/* Add more menu items */}
                </div>
              </div>
              {/* Add more menu categories */}
            </div>

            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              View Order Summary
            </button>
          </div>
        )}
      </div>

      {/* Order Summary Modal */}
      <div className={`modal ${isModalOpen ? 'modal-open' : ''}`}></div>
        <div className="modal-box">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between">
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mb-4 flex justify-between">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Service Options</h3>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="service"
                className="radio"
                checked={paymentOption === 'membership'}
                onChange={() => handlePaymentOptionChange('membership')}
              />
              <span className="ml-2">Membership ($9.99/month)</span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="service"
                className="radio"
                checked={paymentOption === 'onDemand'}
                onChange={() => handlePaymentOptionChange('onDemand')}
              />
              <span className="ml-2">Pay on Demand ($2.99/order)</span>
            </div>
          </div>
          <button className="btn btn-primary btn-block mb-4">Proceed to Payment</button>
          <div>
            <h3 className="text-xl font-bold mb-4">Payment</h3>
            {/* Payment Form */}
            <div className="mb-4">
              <label className="label">
                <span className="label-text">Credit Card Number</span>
              </label>
              <input type="text" className="input input-bordered w-full" />
            </div>
            {/* Add more payment form fields */}
            <button className="btn btn-primary btn-block" onClick={placeOrder}>
              Place Order
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default CustomerDashboard;