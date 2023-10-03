import formval from "../models/TypeScripteLoginModule.js";
import tstredux from "../models/TypeScriptReduxModule.js";
import xlsx from "xlsx";
import nodemailer from "nodemailer";
import crypto from "crypto"; // For generating OTP
//add



export const createtstredux = async (req, res) => {
  const addUsers = new tstredux(req.body);

  try {
    const users = await addUsers.save();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const viewtStredux = async (req, res) => {
  try {
    const users = await tstredux.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const viewStreduxbyID = async (req, res) => {
  try {
    const users = await tstredux.findOne({ _id: req.params.id });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const UpdatetStredux = async (req, res) => { 
  try {
    const record = await tstredux.findByIdAndUpdate(
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




export const DeleteStredux = async (req, res) => {
  try {
    const record = await tstredux.findByIdAndDelete(req.params.id);
    // await record.remove();
    // res.send({ data: true });

    res.status(200).json(record);
  } catch (err) {
    res.status(500).json(err);
  }
};




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


const otpMap = new Map();

function generateOTP() {
  console.log("Generating OTP...");
  const randomBytes = crypto.randomBytes(3);
  const otp = randomBytes.toString("hex");
  console.log("OTP generated:", otp);
  return otp;
}

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    const transporter = nodemailer.createTransport({
      service: 'sendgrid',
      auth: {
        user: 'premkumar@tsquaredc.com',
        pass: 'TSqrd123#%',
      },
    });

    const mailOptions = {
      from: "premkumar@tsquaredc.com",
      to: email,
      subject: "OTP Verification",
      text: `Your OTP for verification is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    otpMap.set(email, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending OTP" });
  }
};


export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  console.log(email, otp);

  try {
    const storedOTP = otpMap.get(email);

    if (storedOTP === otp) {
      // OTP is valid
      // Perform your verification logic here
      res.status(200).json({ message: "OTP verification successful" });
    } else {
      // OTP is invalid
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error verifying OTP" });
  }
};
