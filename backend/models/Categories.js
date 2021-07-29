const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema({
    title:{
        type:String
    },
    companies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }]
})

const CategoriesModel = mongoose.model("categories", CategoriesSchema);

module.exports = CategoriesModel;