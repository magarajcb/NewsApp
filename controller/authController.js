const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
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
console.log("Can't register.Check your credientals")
    }
},
loginUser:async (req,res)=>{
    try{
const{email,password}=req.body;
const user=await User.find({email})

if(user.length===0){
    return res.status(500).json({message:"User not registered"})
}
const isPassworValid=await bcrypt.compare(password,user[0].password)
if(!isPassworValid){
   return res.status(400).json({message:"Wrong password"})
}
const token=jwt.sign({id:user[0]._id},process.env.JWT_SECRET,{expiresIn:'1hr'});
res.cookie('token',token,{
    httpOnly:true,
    secure:false,
    sameSite:'strict'
})
return res.status(200).json({message:"Login succesfull"})
    }
    catch(error){
console.log("Can't login")
    }
},
logOut:async (req,res)=>{
    try{
res.clearCookie('token')
return res.status(200).json({message:'loggged out'})
    }
    catch(error)
    {
        res.status(500).json({message:'failed to logout'})
    }
},
me:async (req,res)=>{
    try{
const userId=req.userId;
const user=await User.findById(userId).select('-password -__v')
return res.status(200).json({message:'User logged in',use:user})
    }
    catch(error)
    {
        res.status(500).json({message:"Token failed"})
    }
}

}
module.exports=authController;