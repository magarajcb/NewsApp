const express=require('express');
const { isAuthenticated } = require('../middleware/auth');
const { savePreference, getPreference } = require('../controller/preferenceController');
const prefereneRouter=express.Router();
prefereneRouter.post('/preference',isAuthenticated,savePreference)
prefereneRouter.get('/preference',isAuthenticated,getPreference)
module.exports=prefereneRouter