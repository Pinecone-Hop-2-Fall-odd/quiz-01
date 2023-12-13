import express from "express";
import cors from 'cors'
import { userRouter } from "./route/user-route.js";
import mongoose from "mongoose";
import { quizroute } from "./route/quiz-route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(quizroute);
app.use(userRouter);


// app.post("/protected", auth, (req, res, next) => {
//   res.status(200).json({
//     data: "successful you got the protected route"
//   });
// });

// app.post("/unprotected", auth, (req, res, next) => {
//   res.status(200).json({
//     data: "successful you got the unprotected route"
//   })
// })

const connectDb = async () => {
  await mongoose.connect('mongodb+srv://nullification:baguette@cluster0.4wsafti.mongodb.net/')
  console.log('database connected');
}
connectDb();
app.listen(8800, () => {
  console.log("server is running on http://localhost:8800");
})