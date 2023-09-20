//will have to get the profs id on clicking a button in frontend

//middleware to get the profid and projectid from frontend on clicking the professors button
exports.request = async (req,res,next)=>{
    try{
        profid = "6507d147d3683e5f6fd5e4f6" //ID of professor
        projectid = "6507d065d3683e5f6fd5e4f0"
        next()
    }catch(err){
        next(err);
    }
}
