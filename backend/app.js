const express=require("express")
const cors=require("cors")
const cookieParser = require("cookie-parser");
const courseRoute = require("./routes/course.routes.js")
const userRoutes = require("./routes/user.routes.js")
const enrollRoute=require('./routes/enroll.routes.js')


const app=express()

//middleware and cookie-parser
app.use(express.json({limit:"50mb"}))
//using cors
app.use(cors())
//cookie-parser
app.use(cookieParser())
//built middleware
 


//routes
//app.use("/courses",courseRoute)
app.use("/user",userRoutes)
app.use("/course",courseRoute)
app.use("/enroll",enrollRoute)
/*app.post("/login",loginUser)
app.post("/update",updateUser)
app.post("/delete",deleteUser)
app.get("/logout",logoutUser)
app.get("/all",getAllUser) */

//testing api
app.get("/test/:id",async(req,res)=>{
   res.json({
    success:true
   })
})








module.exports=app