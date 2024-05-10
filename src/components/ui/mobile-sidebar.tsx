'use client';
import { DashboardNav } from '@/components/ui/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Icons } from '../icons';

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
  }

  export const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
      label: 'Dashboard'
    },
    {
      title: 'User',
      href: '/dashboard/user',
      icon: 'user',
      label: 'user'
    },
    {
      title: 'Employee',
      href: '/dashboard/employee',
      icon: 'employee',
      label: 'employee'
    },
    {
      title: 'Profile',
      href: '/dashboard/profile',
      icon: 'profile',
      label: 'profile'
    },
    {
      title: 'Kanban',
      href: '/dashboard/kanban',
      icon: 'kanban',
      label: 'kanban'
    },
    {
      title: 'Login',
      href: '/',
      icon: 'login',
      label: 'login'
    }
  ];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <div className="space-y-1">
                <DashboardNav
                  items={navItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
