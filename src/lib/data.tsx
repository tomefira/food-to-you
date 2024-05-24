import { sql } from "@vercel/postgres";
import { NavItem } from "./types";

export const customerNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: 'chefhat',
  },
  {
    title: 'Membership',
    href: '/membership',
    icon: 'badgeinfo',
  },
  {
    title: 'Order History',
    href: '/orders',
    icon: 'history',
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: 'user',
  },
  {
    title: 'Help',
    href: '/help',
    icon: 'badgehelp',
  },
];

export const restaurantNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'home',
  },
  {
    title: 'Manage Menu',
    href: '/menu',
    icon: 'utensilscrossed',
  },
  {
    title: 'Orders',
    href: '/orders',
    icon: 'conciergebell',
  },
  {
    title: 'Revenue Reports',
    href: '/reports',
    icon: 'barchart',
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: 'user',
  },
  {
    title: 'Help',
    href: '/help',
    icon: 'badgehelp',
  },
];