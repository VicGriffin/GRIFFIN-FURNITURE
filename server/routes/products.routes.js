import { Router } from 'express';
import { getProducts, createProduct ,deleteProduct } from '../controllers/products.controllers.js';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);

export default router;
