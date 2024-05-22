"use client";

import React, { useState } from 'react';

const RevenueReports: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [revenue, setRevenue] = useState(0);
  const [revenueByCategory, setRevenueByCategory] = useState({
    appetizer: 0,
    entree: 0,
    dessert: 0,
  });

  const handleGenerateReport = () => {
    // Simulate fetching data and calculating revenue
    setRevenue(1000);
    setRevenueByCategory({
      appetizer: 300,
      entree: 500,
      dessert: 200,
    });
  };

  const handleDownloadReport = () => {
    // Simulate report download
    console.log('Downloading report...');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Revenue Reports</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button onClick={handleGenerateReport} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">Generate Report</button>
      <div>
        <p>Total Revenue: ${revenue}</p>
        <p>Revenue by Category:</p>
        <ul>
          <li>Appetizer: ${revenueByCategory.appetizer}</li>
          <li>Entree: ${revenueByCategory.entree}</li>
          <li>Dessert: ${revenueByCategory.dessert}</li>
        </ul>
      </div>
      <button onClick={handleDownloadReport} className="px-4 py-2 bg-green-500 text-white rounded-md mt-4">Download Report</button>
    </div>
  );
};

export default RevenueReports;
