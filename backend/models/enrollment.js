const mongoose=require('mongoose')

const enrollSchema=new mongoose.Schema({
    courseCode:String,
    userEmail:String
},{timestamps:true})

const Enroll=mongoose.model("Enroll",enrollSchema)
module.exports=Enroll