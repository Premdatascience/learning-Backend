
import multer from "multer";
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

import path from "path";
import fileupload from "../models/FileuploadModule.js"




const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
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




export const createFileupload = (upload.single('photo'), (req, res) => {
  const name = req.body.name;
  const birthdate = req.body.birthdate;
  const photo = req.file.filename;

  const newUserData = {
      name,
      birthdate,
      photo
  }

  const newUser = new fileupload(newUserData);

  newUser.save()
         .then(() => res.json('User Added'))
         .catch(err => res.status(400).json('Error: ' + err));
});




// 