import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUsersRoute = async (req, res) => {
    try {
        const { FirstName, SecondName, Email, PhoneNumber, Password } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);

        if (!FirstName || !SecondName || !Email || !PhoneNumber || !Password) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const newUser = await prisma.user.create({
            data: {
                FirstName,
                SecondName,
                Email,
                PhoneNumber: String(PhoneNumber),
                Password: hashedPassword
            },
        });

        res.json(newUser);
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
};

export const loginUser = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { Email } });
        if (!user || !(await bcrypt.compare(Password, user.Password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
