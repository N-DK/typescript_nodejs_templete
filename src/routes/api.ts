import { Router } from 'express';
import APIController from '../app/controllers/APIController';

const router = Router();

router.get('/', APIController.index);

export default router;
