import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import usersRouter from './routes/user.routes.js';  
import loginRouter from "./routes/login.routes.js"



config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: "POST, PATCH, GET"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`Received ${req.method} request for ${req.url}`);
//     next();
// });

app.use("/users", usersRouter);
app.use("/users", loginRouter);

// app.use((err, req, res, next) => {
//     console.error('Unhandled error:', err.stack);
//     res.status(500).send('FAILED!');
// });

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});
