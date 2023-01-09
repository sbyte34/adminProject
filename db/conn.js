const mongoose=require("mongoose");
// const db="mongodb+srv://smartbyte:smart88byte@cluster0.hhrwbgu.mongodb.net/projectsmartbyte?retryWrites=true&w=majority"
const db=process.env.DATABASE
mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connected")).catch((error)=>console.log(error.message));