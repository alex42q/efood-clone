const CompaniesModel = require("../../models/UserModel");
const LocationModel = require("../../models/Locations")
const CompaniesDetailsModel = require("../../models/CompanyDetails")
const CategoriesModel = require("../../models/Categories")
const ProductModel = require("../../models/Products")
const ProductsCategories = require("../../models/ProductCategories")

exports.getFourCompaniesInMainPage = (req, res, next)=>{
    CompaniesModel.find({role:process.env.COMPANYROLE})
    .limit(4)
    .then(companies=>{
        res.status(200).json({
            data:companies
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAllLocationsInMainPage = (req, res, next)=>{
    const search = req.params.search;
    LocationModel.find({name: new RegExp(search, "i")})
    .then(search=>{
        res.status(200).json({
            search:search
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getCompaniesByLocation = (req, res, next)=>{
    const location = req.query.location;
    CompaniesModel.find({location:location})
    .then(companies=>{
        if(companies){
            res.status(200).json({
                data:companies
            })
        }else{
            res.status(404).json({
                noCompanies:"No companies found"
            })
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAllCompaniesByFiveInIndexPage = (req, res, next)=>{
    CompaniesModel.find({})
    .sort({createdAt: -1})
    .limit(5)
    .then(companies=>{
        res.status(200).json({
            data:companies
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getAllCategoriesInMainShopPage = (req, res, next)=>{
    CategoriesModel.find({})
    
    .then(categories=>{
        res.status(200).json({
            data:categories
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getOneCompanyInMainPage = (req, res, next)=>{
    const companyName = req.params.companyname;
    CompaniesModel.findOne({slug:companyName})
    .populate("productCategories")
    .populate({
        path:"productCategories",
        populate:"products"
    })
    .then(company=>{
        if(company){
            res.status(200).json({
                data:company
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

exports.getProductsByCategory = (req, res, next)=>{
    const companyName = req.params.companyname;
    CompaniesModel.findOne({slug:companyName})
    .then(company=>{
        if(company){
            ProductsCategories.find({companyId:company._id})
            .populate("products")
            .then(categories=>{
                // const productTitle = req.body.producttitle
                // ProductModel.find({})
                // .then(products=>{
                //     res.status(200).json({
                //         data:products
                //     })
                // })
                // .catch(err=>{
                //     console.log(err)
                // })
                res.status(200).json({
                    data:categories
                })
            })
            .catch(err=>{
                console.log(err)
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

exports.getOneProductAfterClick = (req, res, next)=>{
    const product = req.params.product
    ProductModel.findOne({_id:product})
    .then(product=>{
        res.status(200).json({
            data:product
        })
    })
    .catch(err=>{
        console.log(err)
    })
}