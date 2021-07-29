const express = require("express");
const router = express.Router();

//Import controller
const IndexPageController = require("../../controllers/IndexPage/IndexPage")

//Get four companies in index page
router.get("/api/index/companies", IndexPageController.getFourCompaniesInMainPage)

//Get all locations in index page
router.get("/api/index/search/:search", IndexPageController.getAllLocationsInMainPage)

//Get companies by locations
router.get("/api/index/companiesbylocation", IndexPageController.getCompaniesByLocation)

//Get five companies in shop page
router.get("/api/index/shops/companies", IndexPageController.getAllCompaniesByFiveInIndexPage)

//Get all categories in shop page
router.get("/api/index/shops/categories", IndexPageController.getAllCategoriesInMainShopPage)

//Get one company in main page
router.get("/api/index/company/:companyname", IndexPageController.getOneCompanyInMainPage)

//Get all products by category
router.post('/api/index/productsbycategory/:companyname', IndexPageController.getProductsByCategory)

//Get one product in main page
router.get("/api/index/product/:product", IndexPageController.getOneProductAfterClick)

module.exports = router;