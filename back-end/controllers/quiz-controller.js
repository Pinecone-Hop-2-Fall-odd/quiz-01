import { questionModel } from "../model/quiz-model.js";

export const createQuiz = async (req, res) => {
    const body = req.body
    try {
        await questionModel.create({
            type: body.type,
            question: body.question,
            answers: body.answers
        });
        const quizes = await questionModel.find({})
        res.status(200).json({ quizzes: quizes })
    } catch (err) {
        res.status(405).json({ message: err.message })
    }
}
export const getAllQuiz = async (req, res) => {
    const quiz_data = questionModel.find({});
    res.status(200).json({ quizzes: quiz_data });
}
export const getQuiz = async (req, res) => {
    const params = req.params;
    const quiz = await questionModel.findOne({ _id: params.id });
    if (quiz.length === 0) {
        res.status(405).json({ message: "Quiz not Found" });
    } else {
        res.status(200).json({ quizzes: quiz })
    }

}