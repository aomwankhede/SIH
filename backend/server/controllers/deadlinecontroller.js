const Deadline = require("../models/deadline")

exports.createdeadline = async (req, res, next) =>{
    try{
      const puserid = req.user._id
      const {sid, marks, description, gdlink, projectid} = req.body
      const deadlinedata = new Deadline({studentid:sid, proffid:puserid, marks, description, googleDriveLink:gdlink, projectname:projectid})

      await deadlinedata.save();
      res.json({
        data: deadlinedata
      })
    }catch(err){
      next(err)
    }
  }