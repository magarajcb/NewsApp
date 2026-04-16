const express=require('express');
const { isAuthenticated } = require('../middleware/auth');
const { savePreference, getPreference } = require('../controller/preferenceController');
const prefereneRouter=express.Router();
prefereneRouter.post('/save',isAuthenticated,savePreference)
prefereneRouter.post('/me',isAuthenticated,getPreference)
module.exports=prefereneRouter