const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./Routes/product.route.js")
require("dotenv").config();


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/products",productRoute)



app.get("/", (req, res) => {
    res.send("Hello World I created an API")
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Database")
        app.listen(3000, () => {
            console.log("Listening to port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed")
    })




