const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Names: {
        type: String,
        required:true
    },

    studentClass: {
        type: String,
        required: true
    },
   
    
    phoneNumber: {
        type: String,
        required: true
    },
 
    password: {
        type: String,
        require: true
    },

    profilePicture: {
        pictureId: String,
        pictureUrl: String
    },
   
}, { timestamps: true });

const UserModel = mongoose.model("school", UserSchema);

module.exports = UserModel; 
 