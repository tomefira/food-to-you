import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Dashboard Page',
  description: 'Business Dashboard Page'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar userType='business' />
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}