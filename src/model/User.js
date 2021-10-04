const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
},
phone:{type:Number,
required:true,
},
intime:{
    type:String,
    required:true
},
outtime:{
    type:String
}
})
const User=new mongoose.model("User",userSchema);
module.exports=User;