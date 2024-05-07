import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name } = data;

  try {
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
      },
    });
    return NextResponse.json(restaurant, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating restaurant' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching restaurants' }, { status: 500 });
  }
}
