import express from 'express';
import quizRoutes from './quizRoutes'

const router = express.Router();

router.use('/quiz', quizRoutes);


export default router;