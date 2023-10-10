const mongoose=require('mongoose');
const sheet=mongoose.Schema

const mydatas=new sheet({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    stream:{
        type:String,
        required:true
    }
})

const myDatas=mongoose.model("myData",mydatas)
module.exports=myDatas;