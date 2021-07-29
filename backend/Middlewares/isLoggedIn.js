module.exports = (req, res, next)=>{
    if(!req.session.jwt) return res.status(401).send("You are not logged in!! Please loggedin")
    next()
}