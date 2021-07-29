const mongoose = require("mongoose");

const ProductsSchmema = new mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    materials:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"materials"
    }],
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"companyId"
    },
    productCategory:{
        type:mongoose.Schema.Types.String,
        ref:"productCategories"
    }
})

const ProductModel = mongoose.model("products", ProductsSchmema);

module.exports = ProductModel;

