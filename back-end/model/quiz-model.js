import mongoose from "mongoose";

const answer = new mongoose.Schema({
    text: String, 
    isCorrect: Boolean,
    isCHosen: Boolean
})
const Quiz = new mongoose.Schema({
    type: String,
    number: Number,
    point: Number,
    question: String,
    Answer: answer
    
})

export const questionModel = mongoose.model("quiz", Quiz);