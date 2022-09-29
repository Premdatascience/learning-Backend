import User from "../models/AuthUserModule.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "Duplicate Email" });
  }

};

export const Login = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log(isPasswordValid);
  if (isPasswordValid) {
    const token = await jwt.sign(
      { email: user.email, name: user.name },
      "secret123"
    );

    res.json({ status: "ok", token: token });
  } else {
    res.json({ status: "Wrong Email or Password" });
  }
 
};

export const Checkapi = async (req, res) => {

  const token = req.headers["x-access-token"];
  const goal = req.body.tempGoal;

  const isTokenValid = await jwt.verify(token, "secret123");
  const email = isTokenValid.email;

  if (isTokenValid) {
    await User.updateOne({ email: email }, { $set: { goal: goal } });

    res.json({ status: "ok" });
  } else {
    res.json({ status: "Invalid Token" });
  }

};

export const Checkapi2 = async (req, res) => {

  const token = req.headers["x-access-token"];
  const isValidToken = await jwt.verify(token, "secret123");

  if (isValidToken) {
    const email = isValidToken.email;
    const user = await User.findOne({ email: email });
    res.json({ status: "ok", goal: user.goal });
  } else {
    res.json("Invalid Token");
  }

};

export const Logout = async (req, res) => {


}
