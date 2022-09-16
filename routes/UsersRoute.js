import express from "express";


import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID } from "../controllers/UsersController.js";


const UsersRoute = express.Router();

UsersRoute.post("/create", createUesers);
UsersRoute.get("/view", viewUesers);
UsersRoute.get("/view/:id", viewUesersbyID);
UsersRoute.put("/update/:id", UpdateUesers);
UsersRoute.delete("/delete/:id", DeleteUesers);


// 



export default UsersRoute;
