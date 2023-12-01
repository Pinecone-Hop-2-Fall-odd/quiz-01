import  express  from "express";
import { getQuiz, createQuiz, getAllQuiz } from "../controllers/quiz-controller.js";



export const quizroute = express.Router()  

quizroute.get('/quiz', getAllQuiz);
quizroute.get('/quiz/:id', getQuiz);
quizroute.post('/quiz', createQuiz);
