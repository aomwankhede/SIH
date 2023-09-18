const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path')
const User = require('./models/usermodel')
const routes = require('./routes/route.js');
const cors = require('cors')
 
require("dotenv").config({
 path: path.join(__dirname, "../.env")
});
 
const app = express();
app.use(cors());
 
const PORT = process.env.PORT || 3400;
 
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use("/api/auth", require("./Auth/routes"))
// app.use('/server/uploads', express.static('uploads'))  //Will have to check the working

const connectDB = require("./db");
connectDB();

app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
     const accessToken = req.headers["x-access-token"];
     const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
    //  console.log(userId);
     // Check if token has expired
     if (exp < Date.now().valueOf() / 1000) { 
      return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
     } 
     res.locals.loggedInUser = await User.findById(userId); next(); 
    } else { 
     next(); 
    } 
   });

app.use('/', routes); 

// TO connect with react
app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
   
app.listen(PORT, () => {
     console.log('Server is listening on Port:', PORT)
   })