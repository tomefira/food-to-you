import { prisma } from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { customerId, productId } = req.body;

    try {
      // Find the cart for the customer
      let cart = await prisma.cart.findUnique({
        where: { customerID: customerId },
        include: { products: true },
      });

      if (!cart) {
        // If cart does not exist, create a new one
        cart = await prisma.cart.create({
          data: {
            customerID: customerId,
            products: {
              connect: { id: productId },
            },
          },
        });
      } else {
        // Add product to the existing cart
        await prisma.cart.update({
          where: { customerID: customerId },
          data: {
            products: {
              connect: { id: productId },
            },
          },
        });
      }

      res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add product to cart' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
