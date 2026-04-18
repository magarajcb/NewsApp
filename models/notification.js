const mongoose=require('mongoose')
const notificationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    
    description:{
            type:String
        },
    source:{
        type:String
    },
    category:{
        type:String
    },
    sentAt:{
        type:Date,
        dafault:Date.now
    },
  },{timestamps:true})
  module.exports = mongoose.model("Notification",notificationSchema,"test2");