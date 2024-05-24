import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Handler for POST requests (create a new user)
export async function POST(req: NextRequest) {
  const { firstName, lastName, mobileNum, email, password, address } = await req.json();

  try {
    // Check if the user already exists
    const existingUser = await prisma.customer.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.customer.create({
      data: {
        firstName,
        lastName,
        mobileNum,
        email,
        password: hashedPassword,
        address,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// Handler for GET requests (fetch all users)
export async function GET(req: NextRequest) {
  try {
    const users = await prisma.customer.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}