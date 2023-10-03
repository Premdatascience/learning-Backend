import mongoose from "mongoose";
const { Schema, model } = mongoose;
const TSTReduxcrudSchema = new Schema({
   
    title: String,
    description: String,
 
});
export default model("TSTReduxcrud",TSTReduxcrudSchema);