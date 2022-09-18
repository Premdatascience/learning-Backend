import express from "express";

import { createRegister,createLogin,viewRegistration} from "../controllers/RegistrationloginController.js";


const registrationloginRoute = express.Router();

registrationloginRoute.post("/register", createRegister);
registrationloginRoute.get("/viewregister", viewRegistration);
registrationloginRoute.post("/login", createLogin);




export default registrationloginRoute;