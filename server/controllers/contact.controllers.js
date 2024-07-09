import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};


