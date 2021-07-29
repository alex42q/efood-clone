const mongoose = require("mongoose");

const MaterialsSchema = new mongoose.Schema({
    title:{
        type:String
    }
})

const MaterialModel = mongoose.model("materials", MaterialsSchema);

module.exports = MaterialModel;