const express = require("express");
const router = express.Router();

//Import controller
const AdminCreateCompanyController = require("../../../controllers/Admin/CreateCompany/CreateCompany")


//Middlewares
const isAuth = require("../../../Middlewares/isAuth");
const isLoggedIn = require("../../../Middlewares/isLoggedIn");
const isAdmin = require("../../../Middlewares/isAdmin");

//Post create new company
router.post("/api/admin/company/create", isLoggedIn, isAdmin, isAuth, AdminCreateCompanyController.postCreateNewCompany)


module.exports = router;