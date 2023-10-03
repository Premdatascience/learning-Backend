import express from "express";


import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID ,sendOTP,createtstredux,viewtStredux,viewStreduxbyID,UpdatetStredux,DeleteStredux} from "../controllers/TypeScripteLoginController.js"
import {SendEmails} from "../controllers/SMTPController.js" 

const TypeScripteLoginRoute = express.Router();

 TypeScripteLoginRoute .post("/typeScripteLogincreate", createUesers);
 TypeScripteLoginRoute .get("/typeScripteLoginview", viewUesers);
 TypeScripteLoginRoute .get("/typeScripteLoginview/:id", viewUesersbyID);
 TypeScripteLoginRoute .put("/typeScripteLoginupdate/:id", UpdateUesers);
 TypeScripteLoginRoute .delete("/typeScripteLogindelete/:id", DeleteUesers);
 TypeScripteLoginRoute .post("/SendEmails", SendEmails);
 TypeScripteLoginRoute .post("/sendOTP", sendOTP);
 TypeScripteLoginRoute .post("/createtstredux", createtstredux);
 TypeScripteLoginRoute .get("/viewtStredux", viewtStredux);
 TypeScripteLoginRoute .get("/viewStreduxbyID/:id", viewStreduxbyID);
 TypeScripteLoginRoute .put("/UpdatetStredux/:id", UpdatetStredux);
 TypeScripteLoginRoute .delete("/DeleteStredux/:id", DeleteStredux);









export default  TypeScripteLoginRoute ;
