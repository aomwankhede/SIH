const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deadlineschema = new Schema({
    studentid:{
        type:String,
        ref:'user'
    },
    proffid:{
        type:String,
        ref:'user'
    },
    marks:{
        type:Number
    },
    description:{
        type:String
    },
    googleDriveLink:{
        type:String
    },
    projectname:{
        type:String,
        ref:'project'
    },
    deadlineDate:{
        type:Date
    }
},{timestamps:true})

const deadline = mongoose.model("deadline",deadlineschema)
module.exports = deadline;