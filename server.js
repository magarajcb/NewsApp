const app = require("./app")

app.listen(3001,(error)=>{
    if(error){
        console.log("Failed to start the server")
        return
    }
    console.log("Server started suceesfully")
})