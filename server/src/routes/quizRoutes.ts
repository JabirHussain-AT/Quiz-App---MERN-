import express from 'express';
import { questions , addQuestions } from  '../controller/quizController'

const router = express.Router();

router.get('/questions', questions );
router.post('/questions',  addQuestions );

export default router;