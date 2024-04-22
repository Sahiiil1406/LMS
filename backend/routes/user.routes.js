const express=require('express')
const {signupUser,
    logoutUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getUserbyId,
    getUerData}=require('../controllers/user.controllers.js')


const userRoutes=express.Router()
userRoutes.post("/signupUser",signupUser)
userRoutes.post("/loginUser",loginUser)
userRoutes.get("/logoutUser",logoutUser)
userRoutes.post("/updateUser",updateUser)
userRoutes.get("/deleteUser/:id",deleteUser)
userRoutes.get("/getAllUser",getAllUser)
userRoutes.get("/getUserbyId/:id",getUserbyId)
userRoutes.get("/getUserData",getUerData)



module.exports=userRoutes