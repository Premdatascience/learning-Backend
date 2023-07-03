import formtysc from "../models/FormtyscModule.js";

export const createUesers = async (req, res) => {
  try{
  const file = new formtysc({
    name: req.body.name,
    email: req.body.email,
    password:req.body.password,
    inputAddress:req.body.inputAddress,
    inputCity:req.body.inputCity,
    inputState:req.body.inputState,
    inputZip:req.body.inputZip,
    gridCheck:req.body.gridCheck,
    filename:req.body.filename,
    file: req.file.filename,

  });
  await file.save();
  res.status(201).send('File Uploaded Successfully');
}catch(error) {
  res.status(400).send(error.message);
}

};

//view
export const viewUesers = async (req, res) => {
  try {
    const users = await formtysc.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// view by id

export const viewUesersbyID = async (req, res) => {
  try {
    const users = await formtysc.findOne({ _id: req.params.id });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update

export const UpdateUesers = async (req, res) => {
  try {
    const record = await formtysc.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete

export const DeleteUesers = async (req, res) => {
  try {
    const record = await formtysc.findByIdAndDelete(req.params.id);
    // await record.remove();
    // res.send({ data: true });

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json(err);
  }
};

//importdata
