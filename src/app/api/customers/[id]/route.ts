import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Helper function to extract userId from headers
const getUserIdFromHeaders = (req: NextRequest): number | null => {
  const userIdHeader = req.headers.get('userId');
  return userIdHeader ? parseInt(userIdHeader) : null;
}

// Handler for GET requests (fetch a user by ID)
export async function GET(req: NextRequest) {
  const userId = getUserIdFromHeaders(req);

  if (!userId) {
    return NextResponse.json({ message: 'User ID not found in headers' }, { status: 400 });
  }

  try {
    const user = await prisma.customer.findUnique({ where: { id: userId } });

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
  const userId = getUserIdFromHeaders(req);

  if (!userId) {
    return NextResponse.json({ message: 'User ID not found in headers' }, { status: 400 });
  }

  const { firstName, lastName, mobileNum, email, address } = await req.json();

  try {
    const user = await prisma.customer.update({
      where: { id: userId },
      data: { firstName, lastName, mobileNum, email, address },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// Handler for DELETE requests (delete a user by ID)
export async function DELETE(req: NextRequest) {
  const userId = getUserIdFromHeaders(req);

  if (!userId) {
    return NextResponse.json({ message: 'User ID not found in headers' }, { status: 400 });
  }

  try {
    await prisma.customer.delete({ where: { id: userId } });
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
