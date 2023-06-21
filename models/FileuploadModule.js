import mongoose from "mongoose";
const {Schema ,model} =mongoose;

const fileuploadSchema = new Schema({

    file: {
        type: String
    },

    name: {
        type: String
        
    }, 
    filename: {
        type: String
        
    }, 

    birthdate: {
        type: Date
    }

});

export default model("fileupload", fileuploadSchema);