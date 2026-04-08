const express=require('express')
const app=express();

app.get("/",(req,res)=>{
    res.json("Server Started")
})
module.exports=app;