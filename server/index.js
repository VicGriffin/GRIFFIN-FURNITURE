import express from 'express';
import { config } from 'dotenv';
import URouter from './routes/user.routes.js';

config();
const app = express();
app.use(express.json());

app.use("/user", URouter);

app.listen(3001, () => {
    console.log('server is running on port 3001....');
});
