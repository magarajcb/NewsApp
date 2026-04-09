const mongoose=require('mongoose')
const app = require("./app")
require('dotenv').config();
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to database")
})

.catch((error)=>{
console.log("failed to connect database..",error.message)
})
app.listen(3001,(error)=>{
    if(error){
        console.log("Failed to start the server")
        return
    }
    console.log("Server started suceesfully")
})
