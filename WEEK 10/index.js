const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const {connectMongoDb} = require("./connection");
const {restrictToLoggedInUserOnly,checkAuth} = require("./Middleware/auth.middleware");
const staticRoute = require("./Routers/staticRouter");
const urlRoute = require("./Routers/urlRouter");
const userRoute = require("./Routers/userRouter");
const app = express();

const PORT = 3000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use("/",checkAuth,staticRoute);
app.use("/url",restrictToLoggedInUserOnly,urlRoute);
app.use("/user",userRoute);

connectMongoDb("mongodb://127.0.0.1:27017/practicing-urlShortner")

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})