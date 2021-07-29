const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema({
    address:{
        type:String
    },
    number:{
        type:String
    },
    postalCode:{
        type:String
    },
    phone:{
        type:String
    },
    bellName:{
        type:String
    },
    roof:{
        type:String
    }
})

const UserDetailsModel = mongoose.model("userDetails", UserDetailsSchema);

module.exports = UserDetailsModel;