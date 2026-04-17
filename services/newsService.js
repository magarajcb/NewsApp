const axios=require('axios')
require('dotenv').config();
const getNews=async (category)=>{
try{
const response=await axios.get(`https://gnews.io/api/v4/top-headlines`,{
    params:{
        category,
        lang:'en',
        country:'in',
        max:10,
        apikey:process.env.NEWS_API_KEY
    }

});

return response.data.articles;

}

catch(error){
  console.log(error.message);
  throw new Error("Error fetching news")
}
}
module.exports = { getNews };