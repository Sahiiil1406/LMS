const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')


const userSchema=new mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:String,
    require:true
   },
   programType:{
    type:String
   },
   department:{
    type:String
   },
   courses:[{
    type:String
   }],
   departmentId:{
    type:String,
},
   staffId:{
    type:String
},
  roles:{
  type:String,
  enum:['admin','student','faculty'],
  default:'student'

}
   
},{timestamps:true})

userSchema.pre("save", async function (next) {
   if (!this.isModified("password")) {
     next();
   }
 
   this.password = await bcrypt.hash(this.password, 10);
 });
 
 // JWT TOKEN
/*  userSchema.methods.getJWTToken = function () {
   return jwt.sign({ id: this._id },JWT_SECRET, {
     expiresIn:JWT_EXPIRE,
   });
 }; */
 
 // Compare Password
 
 /* userSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
 }; */

const User=mongoose.model("User",userSchema)
module.exports=User