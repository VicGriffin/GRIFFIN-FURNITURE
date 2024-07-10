import { Router } from 'express';
import { getAllCartItems, addItemToCart, deleteCartItem } from '../controllers/cart.controllers.js';

const router = Router();

router.get('/cart', getAllCartItems);
router.post('/cart', addItemToCart);
router.delete('/cart/:id', deleteCartItem);  

export default router;