import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    text: String, 
    isCorrect: Boolean,
})
const Quiz = new mongoose.Schema({
    type: String,
    question: String,
    answers: [AnswerSchema]
    
})

export const questionModel = mongoose.model("quiz", Quiz);