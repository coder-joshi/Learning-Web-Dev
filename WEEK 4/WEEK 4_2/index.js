const express = require("express")
const app = express()

app.get("/",function (req,res){
    res.send("<b>Hello World</b>")
})

app.get("/a/testing",function (req,res){
    res.send("Hello World from testing")
})

app.listen(3000)