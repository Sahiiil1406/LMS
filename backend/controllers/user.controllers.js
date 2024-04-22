const User=require('../models/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const sendEmail = require('../utils/nodemailer')
const TOKEN_SECRET="sahil123"


const signupUser=async (req,res)=>{
   try {
    const {name,email,password}=req.body
    const existUser=await User.find({email})
    if(!existUser){
        return res.status(400).json({
            success:false,
            message:"user already exist"
        })
    }
    const newUser=await User.create({name,
    email,password})
   /*  const options={
        "email":newUser.email,
        "message":"Your account has been created in iris.",
        "subject":"Account creation"
    }
    sendEmail(options) */
    return res.status(200).json({
        success:true,
        message:"user created successfully",
        newUser
    })
   } catch (error) {
    return res.status(400).json({
        success:false,
        message:"User not created",
        error
    })
   }
}



const loginUser=async (req,res)=>{
   try {
    const {email,password}=req.body;
    const existUser=await User.findOne({email})
    if(!existUser){
        return res.status(200).json({
            message:"User does not exist",
            success:false
        })    
    }
    const check=await bcrypt.compare(password,existUser.password)
    if(!check){
        return res.status(400).json({
            success:false,
            message:"Wrong credentials",
        })
    }
    
   const username=existUser.username
    const tokenData=({
        email,
        username,
        existUser
    })
    
    //token using jwt
    const token = await jwt.sign(tokenData,TOKEN_SECRET, {expiresIn: "1d"})

    
    return res
    .cookie("token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({ message: "Logged in successfully" ,token});

   } catch (error) {
    return res.status(400).json({
        success:false,
        message:'ERROR',
        error
    })
   }
}



const logoutUser=async (req,res)=>{
try {
   return  res
   .cookie("token", "", {
     httpOnly: true,
   })
   .status(200)
   .json({
            message:"Logout successfully"
        })
} catch (error) {
    return res.status(400).json({
        success:false,
        message:'ERROR',
        error
    })
}
}



const updateUser=async (req,res)=>{
   try {
    const {email,name,programType,department,roles,departmentId}=req.body;
    const existUser=await User.find({email})
    if(!existUser){
        return res.status(400).json({
            message:"User does not exist"
        })
    }
    await User.findOneAndUpdate({email},{email,name,programType,department,roles,departmentId})
    return res.status(400).json({
        message:"user updated successfully",
        success:true
    })
   } catch (error) {
    return res.status(400).json({
        success:false,
        message:"Soomething went wrong.",
        error
    })
   }

}



const deleteUser=async (req,res)=>{
    try {
    
    await User.findByIdAndDelete(req.params.id.trim())
    
    return res.status(400).json({
        message:"User Succesfully deleted",
        success:true
    })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Soomething went wrong.",
            error
    })   
}
}


const getUserbyId=async(req,res)=>{
    try {
        
        const existUser=await User.findById(req.params.id)
        if(!existUser){
            return res.json({
                message:"user doesnot exist",
                success:false
            })
        }
        
        return res.status(200).json({
            success:true,
            message:" successfully",
            existUser
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Something went wrong.",
            error
    }) 
    }
}

const getAllUser=async (req,res)=>{
    try {
        const user=await User.find({})
        
        return res.status(200).json({
            message:"List of all user",
            user
        })
    } catch (error) {
        return res.json({
            message:"Error",error
        })
    }
}
const getUerData=async(req,res)=>{
        const {token} =req.cookies
        if (!token) {
          return res.status(401)
          .json({ 
            message: 'Unauthorized' 
        });
        }
        try {
          const decoded = jwt.verify(token, TOKEN_SECRET);
          const userData = decoded;
      
          res.json({ userData });
    } catch (error) {
        return res.json(400).json({
            message:"something went wrong",
            error
        })
    }
}
module.exports= {signupUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
    getAllUser,
    getUserbyId,
    getUerData
}