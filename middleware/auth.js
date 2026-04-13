const jwt=require('jsonwebtoken')
const auth={
    isAuthenticated:async (req,res,next)=>{
        try{
    const token=req.cookies?.token;
    console.log(req.cookies)
    if(!token)
        {
    res.status(500),json({message:'No token provided'})
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        res.status(500).json({message:'inavlid token'})
    }
   req.userId=decoded.id;
   next();
        }
        catch(error)
        {
            res.status(500).json({message:"Token failed"})
        }
}
}
module.exports=auth;