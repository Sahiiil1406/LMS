const Enroll=require('../models/enrollment.js')
const User=require('../models/user.js')

const createEnroll=async(req,res)=>{
    try {
        const {courseCode,userEmail}=req.body
    const newEnroll=await Enroll.create({
        courseCode,
        userEmail
    })
    return res.status(200).json({
        message:"Enrollment created",
        newEnroll
    })
    } catch (error) {
        return res.status(400).json({
            message:"Error",
            error
        })
    }
}

const acceptEnroll=async(req,res)=>{
    try {
        const {id}=req.body
        const enroll=await Enroll.findById(id)
        const email= enroll.userEmail;
        
        const user=await User.findOne({email})
       
        user.courses.push(enroll.courseCode)
        await user.save()

        await Enroll.findByIdAndDelete(id)
        return res.status(200).json({
            message:"Enrollment successful",
            success:true,
        })
    } catch (error) {
        return res.status(400).json({
            message:"Error",
            error
        })
    }
}


const declineEnroll=async(req,res)=>{
    try {
        await Enroll.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message:"Enrollment cancelled successful",
            success:true,
        })
        
    } catch (error) {
        return res.status(400).json({
            message:"Error",
            error
        })
    }
}


const getAllEnroll=async(req,res)=>{
    try {
        const enroll=await Enroll.find({})
        return res.status(200).json({
            message:"List of all Enrollment",
            enroll
        })
        
    } catch (error) {
        return res.status(400).json({
            message:"Error",
            error
        })
    }
}

const getEnrollbyId=async(req,res)=>{
    try {
        const id=req.params.id
        const enroll=await Enroll.findById(id)
        return res.json({
            message:"Success",
            enroll
        })
       } catch (error) {
        return res.json({error})
       }
}


module.exports={getAllEnroll,
    declineEnroll,
    acceptEnroll,
    createEnroll,
    getEnrollbyId
}