import { UserModel } from "../model/user-model.js";

export const login = async (req, res) => {
    const body = req.body;
    

    if (body.email === undefined) {
        res.status(403).json({ message: "Email required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }

    const One = await UserModel.findOne({email: body.email});

    if (!One) {
        res.status(405).json({ message: "User not found" });
    } else {

        if (One.password === body.password) {
            res.status(200).json({ user: One});
            return;
        } else {
            res.status(405).json({ message: "Password not match" });
            return;
        }
    }


}