import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ReduxCrud = new Schema({
  email: String,
  password: String,
  address: String,

  address2: String,
  City: String,

  Zip: String,
});

export default model("ReduxCrud", ReduxCrud);
