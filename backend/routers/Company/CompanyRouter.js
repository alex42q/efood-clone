const express = require("express");
const router = express.Router();


//Import controller
const CompanyController = require('../../controllers/Company/CompanyController')


//Middlewares
const isAuth = require("../../Middlewares/isAuth");
const isLoggedIn = require("../../Middlewares/isLoggedIn");
const isCompany = require("../../Middlewares/isCompany");

//Put update personal details
router.put("/api/company/companydetails/update", isLoggedIn, isCompany, isAuth, CompanyController.putUpdateCompanyDetails )

//Post login company
router.post("/api/company/auth/login", CompanyController.postLoginCompany)

//Post create product categories for company
router.post("/api/company/productcategories/create", isLoggedIn, isCompany, isAuth, CompanyController.postAddProductCategoriesInCompany)

//Post create products
router.post("/api/company/product/create", isLoggedIn, isCompany, isAuth, CompanyController.postCreateAnewProductForEachCategory)

module.exports = router;