import express from "express";
import {createUser, getAllUsers, getUser} from "../controllers/user-controller.js";
import { SignIn } from "../controllers/login-controller.js";
import { verifyToken } from "../middleware/auth.js";
export const userRouter = express.Router();




userRouter.get("/user", verifyToken, getAllUsers);
userRouter.get("/user/:id", verifyToken, getUser);
userRouter.post("/user", createUser);
userRouter.post("/SignIn", SignIn);