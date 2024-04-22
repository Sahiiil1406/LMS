const jwt=require('jsonwebtoken')
const User=require('../models/user.js')

//Aunthentication
const authenticateUser=async (req,res,next)=>{
    const token=req.cookie
    if(!token){
        return res.status(401).json({
            message:"Please,Login to access this resource"
        })
    }
    const decodedData=jwt.verify(token,"sahil123")
    if(!decodedData){
        return res.status(400).json({
            message:"Error in token"
        })
    }
    req.user=await User.find({decodedData})
    next()
}
module.exports={authenticateUser}

//Authorisation/Authorization of roles
