import Cartbar from '@/components/ui/cart-bar';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Dashboard Page',
  description: 'Customer Dashboard Page',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar userType="customer" />
        <main className="flex-1 pt-16">{children}</main>
        <div className="w-1/4">
          <Cartbar />
        </div>
      </div>
    </>
  );
}
