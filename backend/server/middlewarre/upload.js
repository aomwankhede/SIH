const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'server/uploads/')
    },
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})
var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "application/pdf" ||
            file.mimetype == "application/msword"
        ){
            callback(null,true)
        }else{
            console.log("Only pdf or docx file supported")
            callback(null,false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;