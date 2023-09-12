const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
  username:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    minlength: 8,
    required: true
  },
  role:{
    type: String,
    role: "Basic",
    required: true
  }
})

const User = mongoose.model("user",Schema)
module.exports = User;

