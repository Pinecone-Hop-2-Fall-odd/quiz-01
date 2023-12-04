import express from "express";
import {createUser, getAllUsers, getUser} from "../controllers/user-controller.js";
import { SignUp } from "../controllers/login-controller.js";

export const userRouter = express.Router();




userRouter.get("/user", getAllUsers);
userRouter.get("/user/:id", getUser);
userRouter.post("/user", createUser);
userRouter.post("/SignUp", SignUp);