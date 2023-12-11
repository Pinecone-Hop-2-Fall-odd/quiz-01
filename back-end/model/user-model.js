import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: {type: Number, required: true},
    email: {type: String, unique: true, required: true},
});

export const UserModel = mongoose.model("user", UserSchema);