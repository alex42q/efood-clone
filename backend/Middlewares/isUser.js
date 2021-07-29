const UserModel = require("../models/UserModel");
const jwt = require("jwt-decode");

module.exports = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    if(decoded.role!== process.env.USERROLE) return res.status(403).send("Not allowed");
    next();
}