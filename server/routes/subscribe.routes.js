import { Router } from 'express';
import { subscribe } from '../controllers/subscribe.controllers.js';

const router = Router();

router.post("/subscribe", subscribe);

export default router;
