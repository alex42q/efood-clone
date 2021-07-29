const mongoose = require("mongoose")

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on("error", (err, res)=>{console.log("Error with the database")})
db.once("open", ()=>{console.log('[Database: ]' + "Database connected!")})
db.on("disconnected", ()=>{console.log('[Database: ]' + "Database disconnected!")})

module.exports = db;