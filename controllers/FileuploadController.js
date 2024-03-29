
import fileupload from "../models/FileuploadModule.js"
// import { upload } from "../multer/filehelper.js";

export const createFileupload =  async (req, res) => {
  try{
    console.log(req.file)
      const file =   new fileupload({
        file: req.file.filename,
        filename:req.body.filename,
        name: req.body.name,
        birthdate: req.body.birthdate
       
      });
    await file.save();
      res.status(201).send('File Uploaded Successfully');
  }catch(error) {
      res.status(400).send(error.message);
  }
};




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


