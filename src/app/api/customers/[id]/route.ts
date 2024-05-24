import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handler for GET requests (fetch a user by ID)
export async function GET(req: NextRequest) {
  const { id } = await req.json();

  try {
    const user = await prisma.customer.findUnique({ where: { id: parseInt(id) } });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// Handler for PUT requests (update a user by ID)
export async function PUT(req: NextRequest) {
  const { id } = await req.json();
  const { firstName, lastName, mobileNum, email, address } = await req.json();

  try {
    const user = await prisma.customer.update({
      where: { id: parseInt(id) },
      data: { firstName, lastName, mobileNum, email, address },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// Handler for DELETE requests (delete a user by ID)
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    await prisma.customer.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
