import { UserModel } from "../model/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignIn = async (req, res) => {
    const body = req.body;

    if (body.email === undefined) {
        res.status(403).json({ message: "Email required" })
        return;
    }
    if (body.password === undefined) {
        res.status(403).json({ message: "Password required" })
        return;
    }

    const One = await UserModel.findOne({ email: body.email });

    if (!One) {
        res.status(405).json({ message: "User not found" });
    } else {
        if (await bcrypt.compare(body.password, One.password)) {
            const token = jwt.sign(
                { user_id: One._id, email: One.email },
                "Ultraprivatekey",
            )



            res.status(200).json({ users: One });
            return;
        } else {
            res.status(405).json({ message: "Password not match" });
            return;
        }
    }


}