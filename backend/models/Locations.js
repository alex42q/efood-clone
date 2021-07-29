const mongoose = require("mongoose")

const LocationsSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const LocationsModel = mongoose.model("locations", LocationsSchema);

module.exports = LocationsModel;