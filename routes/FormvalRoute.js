import express from "express";


import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID } from "../controllers/FormvalController.js";


const FormvalRoute = express.Router();

 FormvalRoute .post("/formcreate", createUesers);
 FormvalRoute .get("/formview", viewUesers);
 FormvalRoute .get("/formview/:id", viewUesersbyID);
 FormvalRoute .put("/formupdate/:id", UpdateUesers);
 FormvalRoute .delete("/formdelete/:id", DeleteUesers);


// 



export default  FormvalRoute ;
