import express from "express";
import cors from 'cors'
import { userRouter } from "./route/user-route.js";
import mongoose from "mongoose";
import { quizroute } from "./route/quiz-route.js";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import auth from "./middleware/auth.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(quizroute);
app.use(userRouter);



app.post("/protected", auth, (res, req, next) => {
  res.statusCode(200).json({data: "success got the protected way"})
})

app.post("/unprotected",  (res, req, next) => {
  res.status(200).json({data: "success got the unprotected way"});
})

const connectDb = async () => {
  await mongoose.connect('mongodb+srv://nullification:baguette@cluster0.4wsafti.mongodb.net/')
  console.log('database connected');
}

connectDb();



app.listen(8800, () => {
  console.log("server is running on http://localhost:8800");

})
