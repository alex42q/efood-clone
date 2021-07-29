const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    const authHeader = req.get("Authorization");
    if(!authHeader){
        const error = new Error("Not authenticated!!!")
        error.statusCode = 401;
        res.send("Not authenticated!")
        throw error;
    }
    const token = authHeader.split(' ')[1];
    try{
        decodedToken = jwt.verify(token, process.env.TOKEN);
    }
    catch(err){
        err.statusCode = 500;
        res.send("Invalid token");
        throw err;
    }
    if(!decodedToken){
        const error = new Error("Not authenticated.!")
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken;
    next();
}