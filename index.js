import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import UsersRoute from "./routes/UsersRoute.js";
import FileuploadRoute from "./routes/FileuploadRoute.js";
import dotenv from "dotenv";
import mongoose from "mongoose";


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
app.use(bodyParser.json());
app.use(cors());


//route connections

app.use("/", UsersRoute);

// const Fileupload = require("./routes/FileuploadRoute")

// app.use("/FileuploadRoute", Fileupload)


app.use("/", FileuploadRoute);




app.get("/", (req, res) => res.send("hello"));



app.listen(port, () => {
  databaseconnection();
  console.log("server conected");
});
