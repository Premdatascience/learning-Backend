
import multer from "multer";
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

import path from "path";
import fileupload from "../models/FileuploadModule.js"




const storageData = multer.diskStorage({
    destination:  (req, file, cb) =>{
        cb(null, './images');
    },
    filename:  (req, file, cb)=> {
        cb(null,  Date.now()+"--" + file.originalname);
    },
});

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if (allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

let upload = multer({ storage: storageData});




export const createFileupload = (upload.single('photo'), (req, res) => {

    const photo = req.body.photo;
    const name = req.body.name;

    const birthdate = req.body.birthdate;


    const newUserData = {
        photo,
        name,

        birthdate

    }

    const newUser = new fileupload(newUserData);

    newUser.save()
        .then(() => res.json('file uploaded'))
        .catch(err => res.status(400).json('Error: ' + err));

    // console.log(req.file);
    // res.send("single file upload success")
});



// view

export const viewFileupload = async (req, res) => {
    try {
      const users = await fileupload.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  };


  export const DeleteFileupload = async (req, res) => {
    try {
      const record = await fileupload.findByIdAndDelete(req.params.id);
      // await record.remove();
      // res.send({ data: true });
  
      res.status(200).json(record);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  