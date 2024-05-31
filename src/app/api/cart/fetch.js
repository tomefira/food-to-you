import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { customerId } = req.query;

    try {
      const cart = await prisma.cart.findUnique({
        where: { customerID: customerId },
        include: { products: true },
      });

      if (!cart) {
        res.status(404).json({ error: 'Cart not found' });
      } else {
        res.status(200).json(cart);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch cart' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
