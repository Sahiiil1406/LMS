const mongoose=require('mongoose')

const connectDb=(req,res)=>{
    try {
        mongoose.connect("mongodb+srv://sahil123:sahil123@cluster0.coxj76n.mongodb.net/")
        console.log("Mongo Db connected")
    } catch (error) {
        res.status(400).json({
            message:"Mongo db not connected",
            success:false
        })
    }
}

module.exports=connectDb