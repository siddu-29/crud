const mongoose=require("mongoose")
const schema = new mongoose.Schema({
    name:{type:String,
        required:true
    },
    roll:{type:String,
        required:true
    },
    section:{type:String,
        required:true
    }
    
})
module.exports=mongoose.model("student",schema);
