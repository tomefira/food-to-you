'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

interface Product {
  id: number;
  productID: string;
  productName: string;
  productCost: number;
  restaurantID: number;
}

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, productID: 'prod1', productName: 'Pizza', productCost: 12.99, restaurantID: 1 },
    { id: 2, productID: 'prod2', productName: 'Burger', productCost: 8.99, restaurantID: 1 },
  ]);

  const [newProduct, setNewProduct] = useState<Omit<Product, 'id' | 'productID'>>({ productName: '', productCost: 0, restaurantID: 1 });

  const generateProductID = () => `prod${Date.now()}`;

  const handleAddProduct = () => {
    const productID = generateProductID();
    setProducts([...products, { id: Date.now(), productID, ...newProduct, productCost: parseFloat(newProduct.productCost.toString()) }]);
    setNewProduct({ productName: '', productCost: 0, restaurantID: 1 });
  };

  const handleEditProduct = (id: number, updatedProduct: Omit<Product, 'id' | 'productID'>) => {
    setProducts(products.map(product => product.id === id ? { ...product, ...updatedProduct, productCost: parseFloat(updatedProduct.productCost.toString()) } : product));
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ScrollArea className="h-full w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Restaurant Menu</CardTitle>
          <CardDescription>Manage your products here</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="view">
            <TabsList>
              <TabsTrigger value="view">View Products</TabsTrigger>
              <TabsTrigger value="add">Add Product</TabsTrigger>
            </TabsList>
            <TabsContent value="view">
              {products.map(product => (
                <Card key={product.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{product.productName}</CardTitle>
                    <CardDescription>{product.productID}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Price: ${product.productCost}</p>
                    <Button onClick={() => handleEditProduct(product.id, { productName: 'Updated Name', productCost: product.productCost, restaurantID: product.restaurantID })}>Edit</Button>
                    <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="add">
              <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Product Name</label>
                  <Input
                    type="text"
                    value={newProduct.productName}
                    onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Product Cost</label>
                  <Input
                    type="number"
                    value={newProduct.productCost}
                    onChange={(e) => setNewProduct({ ...newProduct, productCost: parseFloat(e.target.value) })}
                    className="mt-1 block w-full"
                  />
                </div>
                <Button type="submit" className="mt-4">Add Product</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default Menu;
