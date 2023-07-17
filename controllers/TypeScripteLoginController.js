import formval from "../models/TypeScripteLoginModule.js";
import xlsx from "xlsx";

//add
export const createUesers = async (req, res) => {
  const addUsers = new formval(req.body);

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
    const users = await formval.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// view by id

export const viewUesersbyID = async (req, res) => {
  try {
    const users = await formval.findOne({ _id: req.params.id });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//update

export const UpdateUesers = async (req, res) => {
  try {
    const record = await formval.findByIdAndUpdate(
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
    const record = await formval.findByIdAndDelete(req.params.id);
    // await record.remove();
    // res.send({ data: true });

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json(err);
  }
};

//importdata
export const importData = async (req, res) => {
  const file = req.file; // Assuming you're using multer to upload the file

  try {
    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Assuming the Excel file has columns like 'name', 'email', etc.
    // You might need to adjust the property names based on your Excel file structure
    for (const data of jsonData) {
      const newUser = new formval({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        password:data.password,
        // Add other properties as required
      });
      await newUser.save();
    }

    res.status(200).json({ message: "Import successful" });
  } catch (err) {
    res.status(500).json(err);
  }
};