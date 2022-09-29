import express from 'express';
import { login, logOut, register } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logOut', logOut);

export default router;
