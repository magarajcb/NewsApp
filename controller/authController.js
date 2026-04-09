const authController={
registerUser:async (req,res)=>{
    try{
return res.status(200).json({message:"Register user endpoint"})
    }
    catch(error){

    }
}
}
module.exports=authController;