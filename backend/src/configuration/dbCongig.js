const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/node_db", {
    serverSelectionTimeoutMS: 5000,
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", (err) => {
    console.log("MongoDB Error", err);
});

module.exports = mongoose;