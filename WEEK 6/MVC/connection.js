const mongoose = require("mongoose")

async function ConnectMongoDb(url) {
    mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo Error", err));
}

module.exports = {ConnectMongoDb,}