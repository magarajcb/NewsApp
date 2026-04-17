const express=require('express');
const { isAuthenticated } = require('../middleware/auth');
const { fetchNews } = require('../controller/newsController');
const newsRouter=express.Router();
newsRouter.get("/news",isAuthenticated,fetchNews)
module.exports=newsRouter;