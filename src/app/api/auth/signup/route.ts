import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface CreateUserParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobileNum: string;
  address: string;
}

async function createUser({ email, password, firstName, lastName, mobileNum, address }: CreateUserParams) {
  const user = await prisma.customer.create({
    data: {
      email,
      password,
      firstName,
      lastName,
      mobileNum,
      address,
    },
  });
  return user;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await createUser(body);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'User registration failed' }, { status: 500 });
  }
}