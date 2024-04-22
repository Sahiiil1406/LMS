const app=require("./app")
const connectDb = require("./utils/db")
const PORT=1406


app.listen(PORT,()=>{
    console.log("sever started");
    connectDb();
})