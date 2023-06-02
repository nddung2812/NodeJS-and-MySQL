import express from 'express';
const router = express.Router();

import { getAllUsers } from '../controllers/getAllUsers.js';

router.get('/', getAllUsers);

export default router;