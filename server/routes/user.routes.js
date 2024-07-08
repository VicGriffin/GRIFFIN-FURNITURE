import { Router } from 'express';
import { createUsersRoute } from '../controllers/users.controllers.js';

const router = Router();

router.post('/register', createUsersRoute);

export default router;
