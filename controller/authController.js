const user=require('../models/user')
const authController={
registerUser:async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const newUser=new user({
            name,
            email,
            password
        });
        const savedUser=await newUser.save();
       
return res.status(200).json({message:"Register user endpoint,Sucessfully!!",newUser:savedUser})
    }
    catch(error){
console.log("Failed to connect DB")
    }
}
}
module.exports=authController;