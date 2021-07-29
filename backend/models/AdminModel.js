const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    salt:{
        type:String
    },
    role:{
        type:String
    }
})

const AdminModel = mongoose.model("admins", AdminSchema);

module.exports = AdminModel;