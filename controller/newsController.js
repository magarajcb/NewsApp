const { getNews } = require("../services/newsService");

const newsController={
    fetchNews:async(req,res)=>{
        try{
const {category}=req.query;
const news=await getNews(category)
res.status(200).json({message:"News fetched Succsfully",news})
        }
        catch(error){
res.status(500).json({message:"Can't fetch news",error:error.message})
        }
    }
}
module.exports=newsController;