import { UserModel } from "../model/user-model.js";

export const getAllUsers = async (req, res) => {
    const user_data = await UserModel.find({})
    res.status(200).json({ users: user_data })

}

export const getUser = async (req, res) => {
    const params = req.params;
    const user = await UserModel.find({_id: params.id})

    if (user.length === 0) {
        res.status(405).json({ message: "User not found"});
        return
    } else {
        res.status(200).json({ users: user});

        return
    }
}

export const createUser = async (req, res) => {
    const body = req.body;

    try {
     await UserModel.create({
        username: body.username,
        email: body.email,
        password: body.password,
    });
    const users = await UserModel.find()
    res.status(200).json({users: users})
    } catch (err) {
        res.status(405).json({message: err.message})
    }
}