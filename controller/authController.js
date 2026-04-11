const User=require('../models/user')
const bcrypt=require('bcrypt')
const authController={
registerUser:async (req,res)=>{
    try{
        const {name,email,password}=req.body;
       const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    message: "Email already registered",
  });
}
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=new User({
            name,
            email,
            password:hashedPassword
        });

        const savedUser=await newUser.save();
       const {password:pass,__v,...userData}=savedUser.toObject();

return res.status(200).json({message:"NEw user registered",user:userData})
    }
    catch(error){
console.log("Failed to connect DB")
    }
}
}
module.exports=authController;