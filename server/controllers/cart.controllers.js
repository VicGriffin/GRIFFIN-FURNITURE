import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllCartItems = async (req, res) => {
  try {
    const cartItems = await prisma.cartItem.findMany();
    res.json(cartItems);
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const cartItem = await prisma.cartItem.create({
      data: {
        productId,
        quantity,
      },
    });

    res.status(200).json({ message: 'added to cart', cartItem:cartItem });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }finally {
        await prisma.$disconnect()
    }
};
