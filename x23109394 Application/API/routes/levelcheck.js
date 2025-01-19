import express from 'express';
import { getAllLevelcheck } from '../controllers/levelCheckController.js';
 
const router = express.Router();
 
router.get('/', getAllLevelcheck);
//router.get('/:id', getLevelcheck);
 
export default router;