import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow">
      <div>
        <Link href="/">
          <a className="h-8">
            &#127829;
          </a>
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/about">
                <a className={router.pathname === '/about' ? 'text-blue-500' : ''}>About</a>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Add dropdown content here */}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/contact">
                <a className={router.pathname === '/contact' ? 'text-blue-500' : ''}>Contact</a>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Add dropdown content here */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Log in</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</button>
      </div>
    </nav>
  );
}