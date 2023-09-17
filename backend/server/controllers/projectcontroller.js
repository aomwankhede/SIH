const Project = require("../models/project")
const Request = require("../models/request")

exports.projectsave = async(req,res,next) => {
    try{
      const { name, desc, tags, professorid } = req.body
      const newProject = new Project({ projectname:name, description: desc, tags:tags, profid:professorid });
      if(req.body.studentid){
        const id = req.body.studentid
        console.log(id);
        newProject.studentid = id
      };

      await newProject.save();
      res.json({
        data: newProject
      })
    }catch(err){
      next(err)
    }
   }

   exports.sendrequest = async(req, res,next)=>{
    try{

      // const {senderid, recipientid} = req.body
      const senderid = req.user._id;
      const recipientid = profid;
    //   const projectid = projectid;

      const request = new Request({
        sender: senderid,
        recipient: recipientid,
        // project: projectid,
        status: 'pending', 
      });

      await request.save();
      res.json({
        data:request
      })
    }catch(err){
      next(err)
    }
   }

   exports.getrequests = async (req,res,next) =>{
    try{
        const userdata = req.user 
        // console.log(userdata);

        if(userdata.role == 'basic'){
           var data =  await Request.find({sender:userdata._id})
        }
        else if(userdata.role == 'supervisor'){
           var data =  await Request.find({recipient:userdata._id})
        }
        
        res.json({
             data
        })

    }catch(err){
        next(err)
    }
   }