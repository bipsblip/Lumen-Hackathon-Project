const mongoose=require('mongoose')
const detailSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now

        
    }

})

module.exports=mongoose.model("user",detailSchema)