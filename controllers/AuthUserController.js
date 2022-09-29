import User from "../models/AuthUserModule.js";

import Jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  console.log(res.body);

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", err: "duplicate email" });
  }
};

export const Login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = Jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
};

export const Checkapi = async (req, res) => {

const token = req.headers['x-acess-token']

try{
const decoded =Jwt.verify(token,'secret123')

const email = decoded.email
const user = await User.findOne({email:email})
return {status :"ok",quote:user.quote}
}catch(error){
  res.json({status:"error",error:"invalid token"})
}

};
