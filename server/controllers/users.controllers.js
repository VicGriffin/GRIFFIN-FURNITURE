import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUsersRoute = async (req, res) => {
    try {
        const { FirstName, SecondName, Email, PhoneNumber, Password } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = await prisma.user.create({
            data: {
                FirstName: FirstName,
                SecondName: SecondName,
                Email: Email,
                PhoneNumber: String(PhoneNumber),
                Password: hashedPassword
            },
        });

        res.status(200).json({success : true, message: "signup success",newUser});
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
};

