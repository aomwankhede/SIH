const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deadlineschema = new Schema({
    studentid:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    proffid:{
        type:Schema.Types.ObjectId,
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
        type:Schema.Types.ObjectId,
        ref:'project'
    }
},{timestamps:true})

const deadline = mongoose.model("deadline",deadlineschema)
module.exports = deadline;