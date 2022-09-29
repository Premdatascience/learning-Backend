import express from "express";



import { Login, Register ,Checkapi, Checkapi2, Logout } from "../controllers/AuthUserController.js"; 


const AuthUsersRoute = express.Router();

AuthUsersRoute.post("/register", Register);
AuthUsersRoute.post("/login", Login);
AuthUsersRoute.post("/checkapi", Checkapi);
AuthUsersRoute.get("/checkapi2", Checkapi2);
AuthUsersRoute.get("/logout", Logout);




export default AuthUsersRoute;
