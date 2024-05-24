'use client'

import { useState, useEffect } from "react";
import { Search } from "@/components/ui/search";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Italian", options: 10 },
  { name: "Chinese", options: 15 },
  { name: "Mexican", options: 8 },
  { name: "Indian", options: 12 },
  { name: "French", options: 7 },
];

const products = [
  { name: "Spaghetti Carbonara", category: "Italian", rating: 5 },
  { name: "Kung Pao Chicken", category: "Chinese", rating: 4 },
  { name: "Tacos al Pastor", category: "Mexican", rating: 4 },
  { name: "Butter Chicken", category: "Indian", rating: 5 },
  { name: "Coq au Vin", category: "French", rating: 4 },
];



const CustomerDashboard = () => {
  const [distance, setDistance] = useState(25);
  const [rating, setRating] = useState(3);

  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('/api/customers', {
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies in the request
        });

        if (response.ok) {
          const data = await response.json();
          setCustomerData(data);
        } else {
          console.error('Failed to fetch customer data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCustomerData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Search />
        <DropdownMenu>
          <DropdownMenuTrigger>Filter</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Distance: {distance}km</DropdownMenuLabel>
            <DropdownMenuItem>
              <Slider
                id="distance"
                defaultValue={[25]}
                max={40}
                step={5}
                onValueChange={(value) => setDistance(value[0])}
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Rating</DropdownMenuLabel>
            <DropdownMenuItem>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onMouseEnter={() => setRating(star)}
                    onClick={() => setRating(star)}
                    className={`w-8 h-8 cursor-pointer ${
                      star <= rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.946a1 1 0 00.95.691h4.144c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.278 3.946c.3.921-.755 1.688-1.539 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.278-3.946a1 1 0 00-.364-1.118L2.39 9.374c-.784-.57-.38-1.81.588-1.81h4.144a1 1 0 00.95-.691l1.278-3.946z" />
                  </svg>
                ))}
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h1 className="text-3xl font-bold">Customer Dashboard</h1>
      <h2 className="text-2xl font-bold mt-4 mb-4">Explore Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="w-36">
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>{category.options} options</CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-4">Find Your Dinner</h2>
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <Card key={index} className="w-36">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>Category: {product.category}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;
