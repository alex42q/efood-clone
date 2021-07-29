const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }],
    totalPrice:{
        type:Number
    },
})

const OrdersModel = mongoose.model("orders", OrdersSchema);

module.exports = OrdersModel;