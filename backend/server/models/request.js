const mongoose = require("mongoose");
const Schema = mongoose.Schema

const requestschema = new Schema({
    sender: {type: Schema.Types.ObjectId, ref:'user'},
    recipient: {type: Schema.Types.ObjectId, ref:'user'},
    project:{type:Schema.Types.ObjectId, ref:'project'}, //Will get the project details from project database
    status: String
},{timestamps:true})

const Request = mongoose.model('request', requestschema)
module.exports = Request;