const mongoose = require("mongoose");
const localDB = "mongodb://127.0.0.1:27017/role_auth";
const connectDB = async() =>{
    await mongoose.connect(localDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected");
}

module.exports = connectDB;