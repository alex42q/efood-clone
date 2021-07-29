const AdminModel = require("../../../models/AdminModel");
const Categories = require("../../../models/Categories");
const jwt = require("jwt-decode");

exports.postCreateNewCategory = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    AdminModel.findOne({email:decoded.email})
    .then(admin=>{
        if(admin){
            const category = new Categories({
                title:req.body.title
            })
            Categories.create(category, function(err, result){
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