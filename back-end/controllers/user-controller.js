import { UserModel } from "../model/user-model.js";

export const users = [
    {
        "id": "sanoifhjsapomfp868",
        "name": "bob",
        "email": "email@gmail.com",
        "password": "pass"
    }
];

export const getAllUsers = async (req, res) => {
    const user_data = await UserModel.find({})
    res.status(200).json({ users: user_data })

}

export const getUser = async (req, res) => {
    const params = req.params;
    const user = await UserModel.find({email: params.email})

    if (user.password === body.password) {
        res.status(200).json({ user: user});
        return
    } else {
        res.status(406).json({ message: "Password not match"});
        return
    }
}

export const createUser = async (req, res) => {
    const body = req.body;
    console.log(body.email);

    const result = await UserModel.create({
        username: body.username,
        email: body.email,
        password: body.password,
    });


    res.status(200).json({ users: result })
}