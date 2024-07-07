import express from 'express';
import { createUsersRoute, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', createUsersRoute);
router.post('/login', loginUser);

export default router;
