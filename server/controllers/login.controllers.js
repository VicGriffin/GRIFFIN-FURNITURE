import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { Email: Email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const passwordMatch = await bcrypt.compare(Password, user.Password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const payload = {
            id: user.id,
            Email: user.Email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie("access_token", token, { httpOnly: true });
        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } finally {
        await prisma.$disconnect();
    }
};
