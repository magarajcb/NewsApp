const express=require('express');

const authRouter = require('./routes/authRoutes');
const app=express();

app.get("/",(req,res)=>{
    res.json("Server Started")
})
app.use("/auth",authRouter)
module.exports=app;