import { questionModel } from "../model/quiz-model.js";

export const createQuiz = async (req, res) => {
    const body = req.body
    console.log(body);
    try {
        await questionModel.create({
            type: body.type,
            number: body.number,
            point: body.number,
            question: body.question,
            Answer: body.Answer
        });
        const quizes = await questionModel.find({})
        res.status(200).json({quiz: quizes})
    } catch(err) {
        res.status(405).json({message: err.message})
    }
}
export const getAllQuiz = async ( req, res) => {
    const quiz_data = question.find({});
    res.status(200).json({quiz: quiz_data});
}
export const getQuiz = async (req, res) => {
    const params = req.params;
    const quiz = await questionModel.findOne({_id: params.id});
    if(quiz.length === 0) {
        res.status(405).json({message: "Quiz not Found"});
    } else{
        res.status(200).json({quiz: quiz})
}

}