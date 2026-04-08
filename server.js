const express=require('express')
const app=express();
app.get("/",(req,res)=>{
    res.json("Server Started")
})
app.listen(3001,(error)=>{
    if(error){
        console.log("Failed to start the server")
        return
    }
    console.log("Server started suceesfully")
})