import express from "express";



import { Login, Register, ViewRegister } from "../controllers/AuthUserController.js"; 


const AuthUsersRoute = express.Router();

AuthUsersRoute.post("/register", Register);
AuthUsersRoute.post("/login", Login);
AuthUsersRoute.get("/viewregister", ViewRegister);





export default AuthUsersRoute;
