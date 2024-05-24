import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface OrderData {
  orderID: string;
  restaurantID: number;
  customerID: number;
  productIDs: string[];
  orderDateTime: Date;
  deliveryAddress: string;
  orderStatus: 'pending' | 'accepted' | 'rejected' | 'completed';
  deliveryStatus: 'preparing' | 'driving' | 'delivered';
  totalCost: number;
}

export async function POST(request: Request) {
  try {
    const data: OrderData = await request.json();

    const {
      orderID,
      restaurantID,
      customerID,
      productIDs,
      orderDateTime,
      deliveryAddress,
      orderStatus,
      deliveryStatus,
      totalCost,
    } = data;

    const order = await prisma.order.create({
      data: {
        orderID,
        restaurantID,
        customerID,
        productIDs,
        orderDateTime,
        deliveryAddress,
        orderStatus,
        deliveryStatus,
        totalCost,
      },
    });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const restaurantIDParam = searchParams.get('restaurantID');

    if (!restaurantIDParam) {
      return NextResponse.json({ error: 'Missing restaurantID' }, { status: 400 });
    }

    const restaurantID = parseInt(restaurantIDParam, 10);

    if (isNaN(restaurantID)) {
      return NextResponse.json({ error: 'Invalid restaurantID' }, { status: 400 });
    }

    const orders = await prisma.order.findMany({
      where: {
        restaurantID,
      },
    });

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching orders' }, { status: 500 });
  }
}
