const express = require("express");
const userRouter = require("./routes/user")
const {ConnectMongoDb} = require("./connection")
const {logReqRes} = require("./Middleware/index")

const app = express();
const PORT = 3000;

ConnectMongoDb("mongodb://127.0.0.1:27017/learning-mongoose")

//Middleware - Plugin
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("log.txt"))

//Routes
app.use("/api/users",userRouter)

app.listen(PORT, () => {
    console.log("Server has started");
})
