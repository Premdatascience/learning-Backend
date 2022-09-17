import express from "express";

import { createFileupload ,viewFileupload,DeleteFileupload} from "../controllers/FileuploadController.js";


const FileuploadRoute = express.Router();

FileuploadRoute.post("/fileupload", createFileupload);
FileuploadRoute.get("/viewfileupload", viewFileupload);
FileuploadRoute.delete("/deletefileupload/:id", DeleteFileupload);



export default FileuploadRoute;