import express from "express";
import { upload } from "../multer/filehelper.js";
import { createFileupload ,viewFileupload,DeleteFileupload} from "../controllers/FileuploadController.js";


const FileuploadRoute = express.Router();



FileuploadRoute.post("/fileupload",upload.single('file'), createFileupload);
FileuploadRoute.get("/viewfileupload", viewFileupload);
FileuploadRoute.delete("/deletefileupload/:id", DeleteFileupload);



export default FileuploadRoute;