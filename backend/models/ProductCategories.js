const mongoose = require("mongoose");

const ProductCategoriesSchema = new mongoose.Schema({
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }]
})

const ProductCategoriesModel = mongoose.model("productCategories", ProductCategoriesSchema);

module.exports = ProductCategoriesModel;