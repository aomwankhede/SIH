const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
 username:{
   type: String,
   required: true
 },
 email: {
  type: String,
  required: true,
  trim: true
 },
 password: {
  type: String,
  required: true
 },
 studentid:{
   type:Number,
  //  required:true,
   default:null
 },
 profid:{
   type:Number,
   default:null
 },
 role: {
  type: String,
  default: 'basic',
  enum: ["basic", "supervisor", "admin"]
 },
 accessToken: {
  type: String
 },
//  projectfile: {
//     type: String
//  }
},{timestamps : true});
 
const User = mongoose.model('user', UserSchema);
 
module.exports = User;