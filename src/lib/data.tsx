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
    title: 'Orders',
    href: '/dashboard/business',
    icon: 'conciergebell',
  },
  {
    title: 'Menu',
    href: '/dashboard/business/menu',
    icon: 'utensilscrossed',
  },
  {
    title: 'Revenue Reports',
    href: '/dashboard/business/revenue',
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