import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type OrderData = {
  completedAt: Date | null;
  totalCost: number;
};

type GroupedData = {
  [date: string]: {
    date: string;
    TotalOrders: number;
    Revenue: number;
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const restaurantId = searchParams.get('restaurantId');

  if (!restaurantId) {
    return NextResponse.json({ error: 'Restaurant ID is required' }, { status: 400 });
  }

  try {
    const orders: OrderData[] = await prisma.order.findMany({
      where: {
        restaurantID: parseInt(restaurantId, 10),
        isCompleted: true,
      },
      select: {
        completedAt: true,
        totalCost: true,
      },
      orderBy: {
        completedAt: 'asc',
      },
    });

    const groupedData: GroupedData = orders.reduce((acc: GroupedData, order) => {
      if (!order.completedAt) return acc;

      const date = order.completedAt.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { date, TotalOrders: 0, Revenue: 0 };
      }
      acc[date].TotalOrders += 1;
      acc[date].Revenue += order.totalCost;
      return acc;
    }, {} as GroupedData);

    const chartData = Object.values(groupedData);
    const totalRevenue = chartData.reduce((sum, day) => sum + day.Revenue, 0);

    return NextResponse.json({ chartData, totalRevenue });
  } catch (error) {
    console.error('Error fetching revenue data:', error);
    return NextResponse.json({ error: 'Error fetching revenue data' }, { status: 500 });
  }
}
