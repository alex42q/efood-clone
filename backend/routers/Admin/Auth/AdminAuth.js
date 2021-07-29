const express = require("express");
const router = express.Router();

//Import admin auth controller
const AdminAuthController = require("../../../controllers/Admin/Auth/AdminAuth");

//Middlewares
const isAuth = require("../../../Middlewares/isAuth");
const isLoggedIn = require("../../../Middlewares/isLoggedIn");
const isAdmin = require("../../../Middlewares/isAdmin")

//Create new admin post
router.post("/api/admin/auth/create",isLoggedIn, isAdmin, isAuth, AdminAuthController.postCreateNewAdmin)

//Login admin post
router.post("/api/admin/auth/login", AdminAuthController.postLoginAdmin)

module.exports = router;