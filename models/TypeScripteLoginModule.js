import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TypeScripteLoginSchema = new Schema({
   
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    password: String,
    confirmPassword:String
});

export default model("typescriptelogin", TypeScripteLoginSchema);
