const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require("./usermodel")
 
const Projectschema = new Schema({
    projectname:{
        type:String
    },
    description:{
        type:String
    },
    department:{
        type:String
    },
    professors:[{
        type:Schema.Types.ObjectId,
        ref:'user'
    }],
    projectstatus:{
        type:String
    },
    studentid:{
        type:Number,
        default: null,
        // ref:User.studentid
    },
    profid:{
        type:Number,
        default:null,
        // ref:User.profid
    },
    deadline:{
        type:Date
    },
    deadlinedesc:{
        type:String
    },
    work:[{type:Number}]
})

const Project = mongoose.model('project', Projectschema)
module.exports = Project;