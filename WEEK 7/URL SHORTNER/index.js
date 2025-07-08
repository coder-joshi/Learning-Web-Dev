const express = require("express");
const app = express();
const {connectMongoDb} = require("./connection");
const urlRouter = require("./Routes/url")
// const URL = require("./Models/url")


const PORT = 3000;

//Middleware
app.use(express.json());

app.use("/url",urlRouter);

connectMongoDb("mongodb://127.0.0.1:27017/url-shortner-part-two");

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})