const mongoose = require("mongoose");

const CompanyDetailsSchema = new mongoose.Schema({
    location:{
        type:mongoose.Schema.Types.String,
        ref:"locations"
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }],
    phone:{
        type:String
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const CompanyDetailsModel = mongoose.model("companyDetails", CompanyDetailsSchema);

module.exports = CompanyDetailsModel;