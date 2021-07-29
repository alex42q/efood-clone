const AdminModel = require("../models/AdminModel");
const jwt = require("jwt-decode")

module.exports = (req, res, next)=>{
    const decoded = jwt(req.session.jwt);
    if(decoded.role !== process.env.ADMINROLE) return res.status(403).send("Not allowed!")
    next();
}