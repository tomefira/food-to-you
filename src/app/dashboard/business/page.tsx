import React from 'react';
import BusinessInfoForm from '@/components/ui/business-info-form';
import MenuManagement from '@/components/ui/menu-management';
import OrderManagement from '@/components/ui/order-management';
import RevenueReports from '@/components/ui/revenue-reports';

const BusinessDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Business Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <BusinessInfoForm />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Menu Management</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <MenuManagement />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Management</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <OrderManagement />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Revenue Reports</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <RevenueReports />
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
