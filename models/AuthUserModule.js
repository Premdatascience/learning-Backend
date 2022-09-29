import mongoose from "mongoose";
const {Schema ,model} =mongoose;

const AuthuserSchema = new Schema({

    name :{
        type:String,
        required:true,
  
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    },
    goal:{
        type:String
    },
});

export default model("User", AuthuserSchema);