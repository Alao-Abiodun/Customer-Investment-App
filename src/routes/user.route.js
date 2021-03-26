import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.post('/newInvestor', userController.getUser);

export default router;