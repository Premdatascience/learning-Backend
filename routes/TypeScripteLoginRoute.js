import express from "express";


import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID ,importData} from "../controllers/TypeScripteLoginController.js"


const TypeScripteLoginRoute = express.Router();

 TypeScripteLoginRoute .post("/typeScripteLogincreate", createUesers);
 TypeScripteLoginRoute .get("/typeScripteLoginview", viewUesers);
 TypeScripteLoginRoute .get("/typeScripteLoginview/:id", viewUesersbyID);
 TypeScripteLoginRoute .put("/typeScripteLoginupdate/:id", UpdateUesers);
 TypeScripteLoginRoute .delete("/typeScripteLogindelete/:id", DeleteUesers);
 TypeScripteLoginRoute .post("/importData", importData);




export default  TypeScripteLoginRoute ;
