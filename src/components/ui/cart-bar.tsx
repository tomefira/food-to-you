'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function Cartbar() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      const customerId = 1; // Replace with actual customer ID
      try {
        const response = await fetch(`/api/cart/${customerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCartItems(data.products || []);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <nav className="fixed right-0 top-0 h-full w-1/4 bg-white shadow-lg">
      <div className="space-y-4 py-4 px-3 h-full flex flex-col">
        <div className="mt-3 space-y-1">
          <h1>Cart</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {cartItems.map((product) => (
            <Card key={product.productID} className="mb-4">
              <CardContent>
                <CardTitle>{product.productName}</CardTitle>
                <p>${product.productCost.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </nav>
  );
}
