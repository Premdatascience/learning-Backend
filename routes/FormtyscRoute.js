import express from "express";
import { upload } from "../multer/filehelper.js";
import { createUesers, viewUesers, UpdateUesers, DeleteUesers, viewUesersbyID } from "../controllers/FormtyscController.js";


const FormtyscRoute = express.Router();

 FormtyscRoute .post("/formtysccreate",upload.single('file'), createUesers);
 FormtyscRoute .get("/formtyscview", viewUesers);
 FormtyscRoute .get("/formtyscview/:id", viewUesersbyID);
 FormtyscRoute .put("/formtyscupdate/:id", UpdateUesers);
 FormtyscRoute .delete("/formtyscdelete/:id", DeleteUesers);


// 

export default  FormtyscRoute ;
