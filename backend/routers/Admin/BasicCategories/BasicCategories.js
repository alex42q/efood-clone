const express = require("express");
const router = express.Router();

//Import controller
const AdminCategoriesController = require("../../../controllers/Admin/BasicCategories/BasicCategories")

//Middlewares
const isAuth = require("../../../Middlewares/isAuth");
const isLoggedIn = require("../../../Middlewares/isLoggedIn");
const isAdmin = require("../../../Middlewares/isAdmin");

//Post create new category
router.post("/api/admin/category/create", isLoggedIn, isAdmin, isAuth, AdminCategoriesController.postCreateNewCategory)

module.exports = router;