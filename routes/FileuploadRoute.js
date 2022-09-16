import express from "express";

import { createFileupload} from "../controllers/FileuploadController.js";


const FileuploadRoute = express.Router();

FileuploadRoute.post("/fileupload", createFileupload);




export default FileuploadRoute;