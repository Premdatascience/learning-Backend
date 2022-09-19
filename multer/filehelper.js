import express from "express";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid"

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads');
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

export const upload = multer({ storage, fileFilter });