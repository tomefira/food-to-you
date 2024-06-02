import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(request: Request) {
  const data = await request.json();
  const { driverId, firstName, lastName, mobileNum } = data;

  try {
    const driver = await prisma.driver.create({
      data: {
        driverId,
        firstName,
        lastName,
        mobileNum,
      },
    });
    return NextResponse.json(driver, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating driver' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const drivers = await prisma.driver.findMany();
    return NextResponse.json(drivers, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error fetching drivers' }, { status: 500 });
  }
}
