import mongoose from "mongoose";
const { Schema, model } = mongoose;

const FormtyscSchema = new Schema({
    name: String,
    email: String,
    password: String,
    inputAddress: String,
    inputCity: String,
    inputState: String,
    inputZip: String,
    gridCheck: String,
    filename:String,
    file: String,
    

});

export default model("formtysc", FormtyscSchema);
