
const Prefernce = require("../models/preference");

const savePreference=async (req,res)=>{
    try{
        const{
            categories,
            frequency,
            realTimeEnabled,
            emailEnabled,
            keywords,
            language,
            country
        }=req.body;
const preference=await Prefernce.findOneAndUpdate({userId:req.user._id},
    {
        categories,
        frequency,
        realTimeEnabled,
        emailEnabled,
        keywords,
        language,
        country
    },{
        ne:true,
        upsert:true
    }
);
res.status(200).json({message:"Preference save dsuccesfully"})

    }
    catch(error){
        res.status(500).json({message:"Error while savin prfernce",error:error.message})

    }
}
const getPreference=async(req,res)=>{
    try{
const preference=await Prefernce.findOne({userId:req.user._id});
if(!preference){
    return res.status(404).json({message:"Prefernce not found"})
}
res.status(200).json(preference)
    }
    catch(error){
res.status(500).json({message:"Error fetching prefenrce",error:error.message})
    }
}
module.exports={savePreference,getPreference}