import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscription = await prisma.subscribe.create({
      data: {
        Email: email,
      },
    });
    res.status(200).json({ success: true, message: "Subscribed successfully", data: newSubscription });
  } catch (e) {
    if (e.code === 'P2002') {
      res.status(400).json({ success: false, message: "Email is already subscribed" });
    } else {
      res.status(500).json({ success: false, message: "Failed to subscribe" });
    }
  } finally {
    await prisma.$disconnect();
  }
};
