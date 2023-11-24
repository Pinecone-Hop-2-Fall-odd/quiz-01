import express from "express";
import cors from 'cors'
import { userRouter } from "./route/user-route.js";
import mongoose from "mongoose";
import { createUser } from "./controllers/user-controller.js";

const app = express();
app.use(cors());
app.use(express.json());


app.use(userRouter);

const connectDb = async () => {
  await mongoose.connect('mongodb+srv://nullification:baguette@cluster0.4wsafti.mongodb.net/')

  console.log('database connected');
}

connectDb();



app.listen(8800, () => {
  console.log("server is running on http://localhost:8800");

})
