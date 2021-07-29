require('dotenv').config()
const express = require("express")
const db = require("./lib/db")
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)
const PORT = process.env.PORT;

const store = new MongoDBStore({
    uri:process.env.DB,
    collection:"sessions"
})

app.use(session({
    saveUninitialized:false,
    resave:false,
    store:store,
    secret:process.env.SessionSecret,
    cookie: { maxAge: 6500000}
}))

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials:true,
    preflightContinue: false,
    optionsSuccessStatus: 204
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//Import admin the routers
const AdminAuthRouter = require("./routers/Admin/Auth/AdminAuth")
const AdminLocationsRouter = require("./routers/Admin/Locations/Locations")
const AdminCategoryRouter = require("./routers/Admin/BasicCategories/BasicCategories")
const AdminCreateNewCompanyRouter = require("./routers/Admin/CreateCompany/CreataCompany")

//Import Index page routers
const IndexPageRouter = require("./routers/IndexPage/IndexPage")

//Import company page routers
const CompanyRouter = require("./routers/Company/CompanyRouter")

//Use the routers
app.use(AdminAuthRouter);
app.use(AdminLocationsRouter);
app.use(AdminCategoryRouter);
app.use(AdminCreateNewCompanyRouter);

//Use index page routers
app.use(IndexPageRouter);

//User company router
app.use(CompanyRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up on port ${PORT}`)
})