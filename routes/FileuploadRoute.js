import express from "express";
// import { upload } from "../multer/filehelper.js";
import { createFileupload ,viewFileupload,DeleteFileupload} from "../controllers/FileuploadController.js";


const FileuploadRoute = express.Router();
import path from "path";
import {v4 as uuidv4} from "uuid"


import multer from "multer";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {   
    console.log(uuidv4() + '-' + Date.now() + path.extname(file.originalname))
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });


FileuploadRoute.post("/fileupload",upload.single('file'), createFileupload);
FileuploadRoute.get("/viewfileupload", viewFileupload);
FileuploadRoute.delete("/deletefileupload/:id", DeleteFileupload);



export default FileuploadRoute;