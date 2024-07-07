import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.routes.js';  // Assuming you have this file

config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

app.use("/user", userRouter);

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});
