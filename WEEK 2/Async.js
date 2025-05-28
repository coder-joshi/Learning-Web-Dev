// const fs = require("fs")
// data = fs.readFileSync("a.txt","utf-8")
// console.log(data) 
// data2 = fs.readFileSync("b.txt","utf-8")
// console.log(data2)


// const fs = require("fs")

// function read(err,data){
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// }

// fs.readFile("asdsd.txt","utf-8",read)

// fs.readFile("b.txt","utf-8",read)

// console.log("done")

function fn(){
    console.log("Hello World after 5sec")
}


setTimeout(fn,5000)
