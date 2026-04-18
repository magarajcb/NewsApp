const express=require('express')
const { isAuthenticated } = require('../middleware/auth')
const { getNotifications, deleteNotification } = require('../controller/notificationController')
const notificationRouter=express.Router()
notificationRouter.get('/',isAuthenticated,getNotifications)
notificationRouter.delete('/:id',isAuthenticated,deleteNotification)
module.exports=notificationRouter
