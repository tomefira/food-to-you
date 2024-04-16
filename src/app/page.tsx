"use client"

import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <div className="flex items-center justify-between py-4 px-6 mx-auto my-5 max-w-7xl">
        <div>
          <Link className="text-4xl font-bold" href="/">
            🎒
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-lg`}>
                    Restaurants
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-lg`}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-lg`}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="space-x-3">
          <Button variant="outline" className="px-4 py-2 rounded text-sm font-medium">Log in</Button>
          <Button className="px-4 py-2 rounded text-sm font-medium bg-red-600 text-white">Sign up</Button>
        </div>
      </div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto my-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 p-8">
          <h1 className="text-5xl font-bold mb-4"><span className="relative top-[-0.5em] text-red-600 bg-red-100 px-2 py-1 rounded-md">Food-To-You</span> <br></br>Your Favorite Food Delivery Partner</h1>
          <p className="text-lg text-gray-600 mb-6">The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.</p>
            <div className="flex space-x-4">
              <Button className="px-6 py-3 bg-red-600 text-white rounded-md">Order Now</Button>
              <Button variant="outline" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md">Download App</Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 p-8">
            <Image src="/DeliveryDriver.jpg" alt="Food Delivery" width={570} height={480} className="w-full h-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="max-w-7xl mx-auto my-32 px-4 sm:px-6 lg:px-8">
        <h1 className='text-3xl mb-16 text-center font-semibold'>How to Order?</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className="relative">
            <span className="absolute -top-4 -left-4 bg-slate-700 text-white rounded-full flex items-center justify-center w-8 h-8 text-sm font-bold z-10">01</span>
            <Card className="bg-gray-100 p-6">
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <p className='text-4xl'>📍</p>
                </div>
                <p className='mt-4 text-center font-semibold text-lg'>Choose Location</p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <span className="absolute -top-4 -left-4 bg-slate-700 text-white rounded-full flex items-center justify-center w-8 h-8 text-sm font-bold z-10">02</span>
            <Card className="bg-gray-100 p-6">
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <p className='text-4xl'>🍔</p>
                </div>
                <p className='mt-4 text-center font-semibold text-lg'>Browse The Menu</p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <span className="absolute -top-4 -left-4 bg-slate-700 text-white rounded-full flex items-center justify-center w-8 h-8 text-sm font-bold z-10">03</span>
            <Card className="bg-gray-100 p-6">
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <p className='text-4xl'>💳</p>
                </div>
                <p className='mt-4 text-center font-semibold text-lg'>Place Your Order</p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <span className="absolute -top-4 -left-4 bg-slate-700 text-white rounded-full flex items-center justify-center w-8 h-8 text-sm font-bold z-10">04</span>
            <Card className="bg-gray-100 p-6">
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full mb-4">
                  <p className='text-4xl'>🏠</p>
                </div>
                <p className='mt-4 text-center font-semibold text-lg'>Receive Your Food</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer p-10 bg-black text-white pl-24">
        <aside>
          <p className='w-50 h-50'>🎒</p>
          <p>Food-To-You Ltd.<br/>Delivering food to Australia since 2024.</p>
        </aside> 
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </main>
  );
}