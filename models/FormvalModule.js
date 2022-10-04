import mongoose from "mongoose";
const { Schema, model } = mongoose;

const FormvalSchema = new Schema({
  email: String,
  password: String,
  address: String,

  address2: String,
  City: String,

  Zip: String,
});

export default model("formval", FormvalSchema);
