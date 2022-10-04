import express from "express";

import cors from "cors";
import UsersRoute from "./routes/UsersRoute.js";
import FileuploadRoute from "./routes/FileuploadRoute.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

import expressStatic from "express-static";
import path from "path";
import { fileURLToPath } from 'url';

import bodyParser from "body-parser";
import AuthUsersRoute from "./routes/AuthUsersRoute.js";
import morgan from "morgan";
import FormvalRoute from "./routes/FormvalRoute.js";


const databaseconnection = async () => {
  try {
    await mongoose.connect(process.env.DataBase);
    console.log("db is running");
  } catch (err) {
    console.log(err);
  }
};


dotenv.config();

const app = express();
const port = 4000;
app.use(express.json());
app.use(morgan ("dev"))

app.use(bodyParser.json());
app.use(cors());


//route connections

app.use("/", UsersRoute);

app.use("/", AuthUsersRoute);

// const Fileupload = require("./routes/FileuploadRoute")

// app.use("/FileuploadRoute", Fileupload)



app.use("/", FileuploadRoute);


app.use("/", FormvalRoute);
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));


app.get("/", (req, res) => res.send("hello"));



app.listen(port, () => {
  databaseconnection();
  console.log(`server  is conected to ${port}`);
});
