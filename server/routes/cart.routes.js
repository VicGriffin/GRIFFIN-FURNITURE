// routes/cartRoutes.js
import { Router } from 'express';
import { getAllCartItems, addItemToCart } from '../controllers/cart.controllers.js';

const router = Router();

router.get('/cart', getAllCartItems);
router.post('/cart', addItemToCart);

export default router;
