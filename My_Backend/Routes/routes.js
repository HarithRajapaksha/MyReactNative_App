const alldata=require('../Models/Model.js');
const router=require('express').Router()
const express=require('express')
const app=express()

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

module.exports = router;