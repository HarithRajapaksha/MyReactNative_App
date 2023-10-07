const mongoose=require('mongoose');
const sheema=mongoose.Schema;

const mydata=new sheema({
    name:{
        type:String,
        require:true
    },
    age:{
       type:Number,
       require:true
    },
    Stream:{
        type:String,
        require:true
    },
});

const myData=mongoose.model("myData",mydata);
module.exports=myData;