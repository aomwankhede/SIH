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
    tags:[{
        type:String
    }],
    studentid:{
        type:Number,
        default: null,
        // ref:User.studentid
    },
    profid:{
        type:Number,
        default:null,
        // ref:User.profid
    }
})

const Project = mongoose.model('project', Projectschema)
module.exports = Project;