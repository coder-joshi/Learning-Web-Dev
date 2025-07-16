const express = require("express");
const path = require("path")
const app = express();
const {connectMongoDb} = require("./connection");
const urlRoute = require("./Routes/url");
const staticRoute = require("./Routes/StaticRouter");


const PORT = 3000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/",staticRoute);
app.use("/url",urlRoute);


connectMongoDb("mongodb://127.0.0.1:27017/url-shortner-part-two");

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})