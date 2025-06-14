const express = require("express")
const app = express()

async function getRecentPost() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // const data = await response.json();
    //     // document.getElementById("posts").innerHTML = data.body
    //     document.getElementById("posts").innerHTML = JSON.stringify(data)
    // console.log(data);
    // const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    // const arr = response.data
    //     for (let i = 0; i < arr.length; i++) {
    //             document.getElementById("posts").innerHTML += ("<div>" + arr[i].title + "</div>")
    //     }
}


app.get("/multiply",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a*b
    })
})
// The above function can be also written as

app.get("/multiply/:a/:b",function(req,res){
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        result: a*b
    })
})

app.get("/add",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a+b
    })
})  
app.get("/divide",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a/b
    })
})
app.get("/subtract",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a-b
    })
})

app.listen(3000)



