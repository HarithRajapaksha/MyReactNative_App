const mongoose=require('mongoose');
const sheema=mongoose.Schema;

const mydata=new sheema({
    
    Name:{
        type:String,
        require:true
    },

    Age:{
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