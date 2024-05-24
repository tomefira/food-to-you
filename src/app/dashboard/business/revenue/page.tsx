// /dashboard/business/revenue.tsx

'use client'

import { useEffect, useState } from 'react';
import { AreaChart } from '@tremor/react';

type ChartData = {
  date: string;
  TotalOrders: number;
  Revenue: number;
};

const valueFormatter = (number: number) => {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

interface RestaurantRevenueChartProps {
  restaurantId: number;
}

export function RestaurantRevenueChart({ restaurantId }: RestaurantRevenueChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/revenue?restaurantId=${restaurantId}`);
        const data = await response.json();

        if (response.ok) {
          setChartData(data.chartData);
          setTotalRevenue(data.totalRevenue);
        } else {
          console.error('Error fetching revenue data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    }

    fetchData();
  }, [restaurantId]);

  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Restaurant Revenue and Orders
      </h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {valueFormatter(totalRevenue)}
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={chartData}
        index="date"
        yAxisWidth={65}
        categories={['TotalOrders', 'Revenue']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}

// Exporting the component as the default export
export default function Page() {
  // Replace with the actual restaurantId you want to use
  const restaurantId = 1;

  return <RestaurantRevenueChart restaurantId={restaurantId} />;
}
