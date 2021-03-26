import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/user/:id', userController.getUser);

export default router;
