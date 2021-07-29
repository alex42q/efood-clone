const express = require("express");
const router = express.Router();

//Import controller
const AdminLocationsController = require("../../../controllers/Admin/Locations/Locations");

//Middlewares
const isAuth = require("../../../Middlewares/isAuth");
const isLoggedIn = require("../../../Middlewares/isLoggedIn");
const isAdmin = require("../../../Middlewares/isAdmin");

//Post create new location admin
router.post('/api/admin/location/create', isLoggedIn, isAdmin, isAuth, AdminLocationsController.postCreateNewLocations)

module.exports = router;