const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
    },
    userDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userDetails"
    },
    companyDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"companyDetails"
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"orders"
    }],
    companyName:{
        type:String
    },
    logo:{
        type:String
    },
    slug:{
        type:String
    },
    coverImage:{
        type:String
    },
    userImage:{
        type:String,
        default:"https://i0.wp.com/assets.e-food.gr/gravatar/no-avatar2.png?ssl=1"
    },
    companyImage:{
        type:String,
        default:"https://www.e-food.gr/site-assets/img/efood/logo.svg"
    },
    productCategories:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"productCategories"
    }],
    category:{
        type:mongoose.Schema.Types.String,
        ref:"categories"
    },
    location:{
        type:mongoose.Schema.Types.String,
        ref:"locations"
    }
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;