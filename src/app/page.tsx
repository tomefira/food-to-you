"use client"

import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
      <main>
        <nav className="flex items-center justify-between p-6 bg-white shadow">
          <div>
            <Link className="h-8" href="/">
                &#127829;
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="space-x-4">
            <Button className="px-4 py-2 rounded bg-white text-black">Log in</Button>
            <Button className="px-4 py-2 rounded bg-red-600">Sign up</Button>
          </div>
        </nav>
      </main>
  );
}