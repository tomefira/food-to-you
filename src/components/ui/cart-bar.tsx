'use client';

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

// Define the interface for cart items
interface CartItem {
  id: number;
  productName: string;
  productCost: number;
}

export default function Cartbar() {
  // Use the CartItem interface with the useState hook
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    async function fetchCartItems() {
      // Get the userId from cookies
      const customerId = Cookies.get('userId');

      if (!customerId) {
        console.error('Customer ID not found in cookies');
        return;
      }

      try {
        const response = await fetch(`/api/cart/fetch?customerId=${customerId}`);
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
          <h1 className="text-xl font-bold">Cart</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <Card key={product.id} className="mb-4">
                <CardContent>
                  <CardTitle>{product.productName}</CardTitle>
                  <p>${product.productCost.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty</p>
          )}
        </div>
      </div>
    </nav>
  );
}
