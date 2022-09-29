import express from "express";



import { Login, Register ,Checkapi } from "../controllers/AuthUserController.js"; 


const AuthUsersRoute = express.Router();

AuthUsersRoute.post("/register", Register);
AuthUsersRoute.post("/login", Login);
AuthUsersRoute.get("/checkapi", Checkapi);





export default AuthUsersRoute;
