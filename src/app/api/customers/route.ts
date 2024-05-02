import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  const { customerID, firstName, lastName, address, mobileNum } = data;

  try {
    const customer = await prisma.customer.create({
      data: {
        customerID,
        firstName,
        lastName,
        address,
        mobileNum,
      },
    });
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating customer' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const customers = await prisma.customer.findMany();
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching customers' }, { status: 500 });
  }
}