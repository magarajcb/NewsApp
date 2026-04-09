const authController={
registerUser:async (req,res)=>{
    try{
       
return res.status(200).json({message:"Register user endpoint,sSucessfully!!"})
    }
    catch(error){

    }
}
}
module.exports=authController;