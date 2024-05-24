import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: { email },
    })

    if (restaurant && await bcrypt.compare(password, restaurant.password)) {
      return NextResponse.json({ role: 'restaurant' })
    }

    const customer = await prisma.customer.findUnique({
      where: { email },
    })

    if (customer && await bcrypt.compare(password, customer.password)) {
      const user = { id: customer.id.toString(), name: customer.firstName };
      const response = NextResponse.json({user, role: 'customer'});

      response.cookies.set('userId', user.id, {
        path: '/',
        httpOnly: true,
        secure: true, // Set this to false for local development
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      
      return response;
    }

    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}