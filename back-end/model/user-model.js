import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: Number,
    email: {type: String, unique: true},
});

export const UserModel = mongoose.model("user", UserSchema);