const mongoose = require("mongoose");

async function connectMongoDb(url){
    mongoose.connect(url)
    .then(()=>{console.log("MongoDB has connected successfully")})
    .catch((err)=>{console.log("MongoDB ran into error. The error is:",err)});
}

module.exports = {connectMongoDb}