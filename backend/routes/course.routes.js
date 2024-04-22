const express=require('express')
const { createCourse,
    getAllCourse,
    getCoursebyId,
    deleteCourse,
    updateCourse} = require("../controllers/course.controller")


const courseRoute=express.Router()

courseRoute.get("/getAllCourses",getAllCourse)
courseRoute.post("/create",createCourse)
courseRoute.get("/getcoursebyId/:id",getCoursebyId)
courseRoute.get("/deleteCourse/:id",deleteCourse)
courseRoute.post("/update",updateCourse)

module.exports=courseRoute