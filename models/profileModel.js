const mongoose = require('mongoose');
const profileSchema=mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    image:{
        type:String,
        required:true,
      unique:true  
    },
    balance:{
        type:String,
        required:true
    },
    skillCategory:{
        type:String,
        required:true
    },
    skill:{
        type:String,
        required:true
    }
});
const profile=mongoose.model("Profile",profileSchema);
module.exports=profile;
