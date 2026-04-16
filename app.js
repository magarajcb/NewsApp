const express=require('express');
const cookieParser=require('cookie-parser')
const authRouter = require('./routes/authRoutes');
const prefereneRouter = require('./routes/preferenceRoutes');
const app=express();

app.get("/",(req,res)=>{
    res.json("Server Started")
})
app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/prefernces",prefereneRouter)
module.exports=app;