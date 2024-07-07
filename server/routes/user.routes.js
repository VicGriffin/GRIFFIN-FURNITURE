import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req, res) => {
    try {
        const { FirstName, SecondName, Email, PhoneNumber, Password } = req.body;

        if (!FirstName || !SecondName || !Email || !PhoneNumber || !Password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const newUser = await prisma.User.create({
            data: {
                FirstName,
                SecondName,
                Email,
                PhoneNumber,
                Password,
            },
        });

        res.json(newUser);
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

export default router;
