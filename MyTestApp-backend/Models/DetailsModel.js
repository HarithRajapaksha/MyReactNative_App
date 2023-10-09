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

    stream:{
        type:String,
        require:true
    },
});

const StudentData=mongoose.model("mydata",mydata);
module.exports=StudentData;