import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch products' });
  } finally {
    await prisma.$disconnect();
  }
};

export const createProduct = async (req, res) => {
  const { name, price, img } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        img,
      },
    });
    res.status(200).json({ message: 'new product created', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: { id: req.params.id }
    });
    res.status(200).json({ message: 'Removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};