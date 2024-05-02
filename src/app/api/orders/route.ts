import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  const {
    orderID,
    resturantID,
    customerID,
    driverID,
    productIDArray,
    orderDateTime,
    deliveryAddress,
    orderStatus,
    deliveryStatus,
    totalCost,
  } = data;

  try {
    const order = await prisma.order.create({
      data: {
        orderID,
        resturantID,
        customerID,
        driverID,
        productIDArray,
        orderDateTime,
        deliveryAddress,
        orderStatus,
        deliveryStatus,
        totalCost,
      },
    });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating order' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const orders = await prisma.order.findMany();
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching orders' }, { status: 500 });
  }
}
