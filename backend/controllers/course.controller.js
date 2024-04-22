
const Course=require('../models/course.js')
const mongoose=require('mongoose')

//CRUD operation on courses
const createCourse=async (req,res)=>{
    try {
        const {courseCode,
            courseTitle,
            instructor,
            schedule,
            credits,
            description,
            department}=req.body
        const existCourse=await Course.find({courseCode})
        if(!existCourse){
           return res.status(400).json({
                success:false,
                message:"course already exist"
            })
        }
        const newCourse=await Course.create({
            courseCode,
            courseTitle,
            instructor,
            schedule,
            credits,description,department
        })

        res.status(200).json({
            success:true,
            message:"Course Created successfully",
            newCourse
        })
        
    } catch (error) {
         res.status(400).json({
            success:false,
            error
         })
    }
}

const getAllCourse=async(req,res)=>{
   try {
    const allCourse=await Course.find({})
    return res.status(200).json({
    success:true,
    message:"list of all courses",
    allCourse
   })
   } catch (error) {
    return res.status(400).json({
        success:false,
        error
    })
   }
}


const getCoursebyId=async(req,res)=>{
    try {
        const reqCourse=await Course.findById(req.params.id.trim())
       if(!reqCourse){
            return res.status(200).json({
                message:"course dont exist",
                success:false
            })
        } 
        return res.status(200).json({
            success:true,
            message:"course found successfully",
            reqCourse
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            error
        })
    }
}

const updateCourse=async(req,res)=>{
   try {
    const {courseCode, 
        courseTitle,
        instructor,
         schedule,
         credits,
         description,
         department}=req.body
    const reqCourse=await Course.find({courseCode})
    
    if(!reqCourse){
        return res.status(200).json({
            message:"course dont exist",
            success:false
        })
    }


await Course.findOneAndUpdate({courseCode},{
    courseCode,
    courseTitle,
    instructor,
    schedule,
    credits,
    description,
    department

})
return res.status(200).json({
    message:"Course updated"
})
   } catch (error) {
    return res.status(400).json({
        message:"something went wrong",
        error
    })
   }

}


const deleteCourse=async(req,res)=>{
   try {
    await Course.findByIdAndDelete(req.params.id.trim())
    return res.status(200).json({
        success:true,
        message:"course deleted successfully"
    })
    
   } catch (error) {
    return res.status(400).json({
        message:"something went wrong",
        error
    })
   }
}

module.exports={createCourse,
    getAllCourse,
    getCoursebyId,
    deleteCourse,
    updateCourse
}

