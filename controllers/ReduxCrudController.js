import ReduxCrud from "../models/ReduxCrudModule";
// import csvtojson from "csvtojson";
// import multer from "multer";

//add
export const createUesers = async (req, res) => {
  const addUsers = new ReduxCrud(req.body);

  try {
    const users = await addUsers.save();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//view
export const viewUesers = async (req, res) => {
  try {
    const users = await ReduxCrud.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// view by id

export const viewUesersbyID = async (req, res) => {
  try {
    const users = await ReduxCrud.findOne({ _id: req.params.id });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update

export const UpdateUesers = async (req, res) => {
  try {
    const record = await ReduxCrud.findByIdAndUpdate(
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
    const record = await ReduxCrud.findByIdAndDelete(req.params.id);
    // await record.remove();
    // res.send({ data: true });

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json(err);
  }
};

//importdata
