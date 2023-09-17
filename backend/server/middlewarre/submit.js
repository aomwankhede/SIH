//will have to get the profs id on clicking a button in frontend

exports.request = async (req,res,next)=>{
    try{
        profid = "65069114ffa0b22f01e0079b" //ID of professor
        next()
    }catch(err){
        next(err);
    }
}
