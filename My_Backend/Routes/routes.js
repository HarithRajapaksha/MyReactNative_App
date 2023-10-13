const alldata=require('../Models/Model.js');
const router=require('express').Router()
const express=require('express')
const app=express()


//Data sdding
router.route("/add").post((req,res)=>{
     const name=req.body.name
     const age=req.body.age
     const stream=req.body.stream


     const addingData=new alldata({
        name:name,
        age:age,
        stream:stream
     })

     addingData.save().then(()=>{
        res.send("data added")
        console.log('data added');
     }).catch((err)=>{
        console.log('data added error'+err.message);
     })

})

//data read

router.route("/").get(async(req,res)=>{
    alldata.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message);
        res.send(err.message)
    })
})

//data delete
router.route("/delete/:id").delete(async(req,res)=>{
    let id=req.params.id;

    await alldata.findByIdAndDelete(id).then(()=>{
         res.send("data deleted");
    }).catch((err)=>{
        res.send("Data not delete")
    })
})

module.exports = router;