const express=require('express')
const {getAllEnroll,
    declineEnroll,
    acceptEnroll,
    createEnroll,
    getEnrollbyId}=require('../controllers/enrollment.js');


const enrollRoute=express.Router()

enrollRoute.post("/create",createEnroll)
enrollRoute.get("/getAll",getAllEnroll)
enrollRoute.get("/get/:id",getEnrollbyId)
enrollRoute.post("/accept",acceptEnroll)
enrollRoute.get("/decline/:id",declineEnroll)



module.exports=enrollRoute