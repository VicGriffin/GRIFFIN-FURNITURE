import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/products.controllers.js';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);

export default router;
