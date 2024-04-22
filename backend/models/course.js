const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    courseCode:{
        type:String,
        require:true,
        unique:true
    },
    courseTitle:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    instructor:{
        type:String,
        require:true
    },
    schedule:{
        type:String,
        require:true
    },
    credits:{
        type:Number,
        require:true
    },
    department:{
        type:String
    }
},{timestamps:true})

const Course=mongoose.model("Course",courseSchema)
module.exports=Course;