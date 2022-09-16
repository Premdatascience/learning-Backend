import mongoose from "mongoose";
const {Schema ,model} =mongoose;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  phone: Number,
  email: String,
  gender: String,
  country: String,
  dob: Date,
  companyname: String,
  homeaddress: String,
  officeaddress: String,
  password: String,
  confirmpassword: String,
});

export default model("registration", userSchema);