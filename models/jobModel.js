const mongoose=require("mongoose");

const jobSchema=mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    maintitle:{
        type:String,
        required:true,
      unique:true  
    },
    category:{
        type:String,
        required:true
    },
    category2:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});
const job=mongoose.model("Job",jobSchema);
module.exports=job