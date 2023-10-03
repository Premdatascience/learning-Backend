import User from "../models/AuthUserModule.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      role:req.body.role,
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

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.json({ status: "User not found" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        "secret123"
      );

      res.json({ status: "ok", token: token, role: user.role });
    } else {
      res.json({ status: "Wrong Email or Password" });
    }
  } catch (err) {
    console.error(err);
    res.json({ status: "An error occurred" });
  }
}

export const viewUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
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

export const SendOTP = async (req, res) => {
  const { phoneNumber } = req.body;
  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  // Send OTP to phoneNumber using SMS gateway service
  // (Integrate with the SMS service of your choice)
  // Save the otp and phoneNumber in the backend for verification later
  // Return success response
  res.json({ success: true });

}

export const VerifyOTP = async (req, res) => {
  const { phoneNumber, otp } = req.body;
  // Retrieve the saved OTP for the phoneNumber
  // Compare the otp with the saved OTP
  if (otp === savedOtp) {
    // OTP is valid, authenticate the user and generate session token/JWT
    // Return success response
    res.json({ success: true, token: 'your_generated_token' });
  } else {
    // Invalid OTP
    // Return error response
    res.json({ success: false, message: 'Invalid OTP' });
  }

}

export const Logout = async (req, res) => {


}
