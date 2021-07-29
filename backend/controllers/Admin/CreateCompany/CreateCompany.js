const CompanyModel = require("../../../models/UserModel");
const AdminModel = require("../../../models/AdminModel");
const CategoriesModel = require("../../../models/Categories")
const jwt = require("jwt-decode")
const bcrypt = require("bcryptjs")

exports.postCreateNewCompany = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    AdminModel.findOne({email:decoded.email})
    .then(admin=>{
        if(admin){
            bcrypt.genSalt(10, function(err, salt){
                if(err){
                    console.log(err)
                }else{
                    bcrypt.hash(req.body.password, 12, function(err, hash){
                        if(err){
                            console.log(err)
                        }else{
                            CategoriesModel.findOne({title:req.body.category})
                            .then(category=>{
                                if(category){
                                    const company = new CompanyModel({
                                        firstname:req.body.firstname,
                                        lastname:req.body.lastname,
                                        email:req.body.email,
                                        password:hash,
                                        salt:salt,
                                        role:process.env.COMPANYROLE,
                                        companyName:req.body.companyName,
                                        category:category.title,
                                        location:req.body.location
                                    })
                                    CompanyModel.create(company, function(err, result){
                                        if(err){
                                            console.log(err)
                                        }else{
                                            category.companies.push(result._id)
                                            category.save()
                                            res.status(201).json({
                                                data:result
                                            })
                                        }
                                    })
                                }else{
                                    res.status(404).json({
                                        noCategory:"No category found!"
                                    })
                                }
                            })
                            .catch(err=>{
                                console.log(err)
                            })
                        }
                    })
                }
            })
        }else{
            res.status(404).json({
                noFound:"No found"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}