const Data=require('../Models/DetailsModel')
const router=require("express").Router()
const express=require('express')
const app=express()

app.use(express.json());

//Add data
router.route("/add").post((req,res)=>{

    const name=req.body.name;
    const age=req.body.age;
    const stream=req.body.stream;

    const dataAddObj=new Data({
        name,
        age,
        stream,
    })

    dataAddObj.save().then(()=>{
        res.json("data added Success")
    }).catch((err)=>{
        alert('data added Error')
        console.log(err)
    })
})

module.exports=router;