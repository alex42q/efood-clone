const AdminModel = require("../../../models/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const jwtDecode = require("jwt-decode")

exports.postCreateNewAdmin = (req, res, next)=>{
    const decoded = jwtDecode(req.session.jwt);
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
                        }else if(hash){
                            const admin = new AdminModel({
                                firstname:req.body.firstname,
                                lastname:req.body.lastname,
                                email:req.body.email,
                                password:hash,
                                salt:salt,
                                role:process.env.ADMINROLE
                            })
                            AdminModel.create(admin, function(err, result){
                                if(err){
                                    console.log(err)
                                }else{
                                    res.status(201).json({
                                        data:result
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }else{
            res.status(404).json({
                noFound:"Not user found"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postLoginAdmin = (req, res, next)=>{
    AdminModel.findOne({email:req.body.email})
    .then(admin=>{
        if(admin){
            bcrypt.compare(req.body.password, admin.password, function(err,hashed){
                if(err){
                    console.log(err)
                }else if(hashed){
                    const token = jwt.sign({
                        email:admin.email,
                        adminId:admin._id.toString(),
                        role:admin.role
                    }, process.env.TOKEN, { expiresIn: "1h"})
                    req.session.jwt = token;
                    res.status(200).json({
                        jwt:token
                    })
                }else{
                    res.status(404).json({
                        wrongPassword:"Wrong pass"
                    })
                }
            })
        }else{
            res.status(404).json({
                noFound:"No found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}