import { PrismaClient, Product } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Data = {
  error?: string;
  products?: Product[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { customerId } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const cart = await prisma.cart.findUnique({
      where: { customerID: parseInt(customerId as string) },
      include: {
        products: true,
      },
    });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.status(200).json({ products: cart.products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
