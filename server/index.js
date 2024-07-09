import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import usersRouter from './routes/user.routes.js';  
import loginRouter from "./routes/login.routes.js";
import subscribeRouter from './routes/subscribe.routes.js';
import productsRouter from './routes/products.routes.js';
import cartRouter from './routes/cart.routes.js'
import contactRouter from './routes/contact.routes.js'


config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'POST, PATCH, GET',
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/users', loginRouter);
app.use('/', subscribeRouter);
app.use('/users', productsRouter);
app.use('/users', cartRouter);
app.use('/users', contactRouter);

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});
