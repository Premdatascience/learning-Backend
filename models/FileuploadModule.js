import mongoose from "mongoose";
const {Schema ,model} =mongoose;

const fileuploadSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },

    birthdate: {
        type: String
    }

});

export default model("fileupload", fileuploadSchema);