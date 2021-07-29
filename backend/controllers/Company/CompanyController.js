const CompanyModel = require("../../models/UserModel");
const CompanyDetailsmodel = require("../../models/CompanyDetails");
const ProductCategoriesModel = require("../../models/ProductCategories")
const jwt = require("jwt-decode");
const jsonWebToken = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const ProductModel = require("../../models/Products")

exports.putUpdateCompanyDetails = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    CompanyModel.findOne({email:decoded.email})
    .then(company=>{
        if(company){
            const companyDetails = new CompanyDetailsmodel({
                companyId:company._id
            })
            CompanyDetailsmodel.create(companyDetails, function(err, result){
                if(err){
                    console.log(err)
                }else{
                    if(req.body.phone){
                        result.phone = req.body.phone
                    }
                    company.companyDetails = result._id
                    company.save()
                    result.save()
                    res.status(201).json({
                        data:result
                    })
                }
            })
        }else{
            res.status(404).json({
                noCompany:"No company Found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postLoginCompany = (req, res, next)=>{
    CompanyModel.findOne({email:req.body.email})
    .then(company=>{
        if(company){
            bcrypt.compare(req.body.password, company.password, function(err, hash){
                if(err){
                    console.log(err)
                }else if(hash){
                    const token = jsonWebToken.sign({
                        email:company.email,
                        companyId:company._id.toString(),
                        role:company.role
                    }, process.env.TOKEN, { expiresIn:"1h"})
                    req.session.jwt = token;
                    res.status(200).json({
                        jwt:token
                    })
                }else{
                    res.status(404).json({
                        wrongPass:"Wrong password"
                    })
                }
            })
        }else{
            res.status(404).json({
                noCompany:"No company found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postAddProductCategoriesInCompany = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    CompanyModel.findOne({email:decoded.email})
    .then(company=>{
        if(company){
            const productCategories = new ProductCategoriesModel({
                title:req.body.title
            })
            ProductCategoriesModel.create(productCategories, function(err, result){
                if(err){
                    console.log(err)
                }else{
                    company.productCategories.push(result._id)
                    company.save()
                    res.status(201).json({
                        data:result
                    })
                }
            })
        }else{
            res.status(404).json({
                noCompany:"no company found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postCreateAnewProductForEachCategory = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    CompanyModel.findOne({email:decoded.email})
    .then(company=>{
        if(company){
            ProductCategoriesModel.findOne({_id:req.body.productCategory})
            .then(category=>{
                if(category){
                    const product = new ProductModel({
                        image:req.body.image,
                        title:req.body.title,
                        description:req.body.description,
                        price:req.body.price,
                        companyId:company._id
                    })
                    ProductModel.create(product, function(err, result){
                        if(err){
                            console.log(err)
                        }else{
                            result.productCategory = category.title;
                            category.products.push(result._id)
                            result.save()
                            category.save()
                            res.status(201).json({
                                data:result
                            })
                        }
                    })
                }else{
                    res.status(404).json({
                        noCategory:"No category found"
                    })
                }
            })
            .catch(err=>{
                console.log(err)
            })

        }else{
            res.status(404).json({
                noCompany:"no company found!"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

