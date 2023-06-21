import express from "express";


import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID } from "../controllers/ReduxCrudController.js";


const ReduxCrud = express.Router();

ReduxCrud .post("/formcreate", createUesers);
ReduxCrud .get("/formview", viewUesers);
ReduxCrud .get("/formview/:id", viewUesersbyID);
ReduxCrud .put("/formupdate/:id", UpdateUesers);
ReduxCrud .delete("/formdelete/:id", DeleteUesers);

// 



export default  ReduxCrud ;
