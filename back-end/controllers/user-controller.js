import { UserModel } from "../model/user-model.js";
import bcrypt from "bcrypt"

export const getAllUsers = async (req, res) => {
    const user_data = await UserModel.find({})
    res.status(200).json({ users: user_data })

}

export const getUser = async (req, res) => {
    const params = req.params;
    const user = await UserModel.find({email: params.email})
    if (user.length === 0) {
        res.status(405).json({ message: "User not found"});
        return
    } else {
        res.status(200).json({ users: user});
        return
    }
}

export const createUser = async (req, res) => {
    try{
        const body = req.body;
        const hashedpassword = await bcrypt.hash(req.body.password, 10)
         await UserModel.create({
            username: body.username,
            email: body.email,
            password: hashedpassword,
        });
        const users = await UserModel.find()
        res.status(200).json({users: users})

    } catch(err) {
        res.status(405).json({message: err.message});
    }
  
}