import { Router } from 'express';
import { createContact, getContacts } from '../controllers/contact.controllers.js';

const router = Router();

router.post('/contacts', createContact);
router.get('/contacts', getContacts);

export default router;