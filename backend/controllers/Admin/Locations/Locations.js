const AdminModel = require("../../../models/AdminModel");
const LocationsModel = require("../../../models/Locations");
const jwt = require("jwt-decode")

exports.postCreateNewLocations = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    AdminModel.findOne({email:decoded.email})
    .then(admin=>{
        if(admin){
            const location = new LocationsModel({
                name:req.body.name
            })
            LocationsModel.create(location, function(err, result){
                if(err){
                    console.log(err)
                }else{
                    res.status(201).json({
                        data:result
                    })
                }
            })
        }else{
            res.status(404).json({
                noAdmin:"No found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}