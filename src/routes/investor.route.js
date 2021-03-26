import { Router } from 'express';
import investorController from '../controllers/investor.controller';

const router = Router();

router.post('/investor', investorController.addInvestor);

export default router;
