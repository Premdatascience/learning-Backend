import mongoose from "mongoose";
const {Schema ,model} =mongoose;

const fileuploadSchema = new Schema({

    photo: {
        type: String
    },

    name: {
        type: String
        
    }, 

    birthdate: {
        type: String
    }

});

export default model("fileupload", fileuploadSchema);