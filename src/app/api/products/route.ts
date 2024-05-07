import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();
  const { productID, productName, productCost, resturantID } = data;

  try {
    const product = await prisma.product.create({
      data: {
        productID,
        productName,
        productCost,
        resturantID,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
  }
}
