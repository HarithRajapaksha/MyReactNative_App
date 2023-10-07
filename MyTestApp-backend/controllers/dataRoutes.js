const allData=require('../Models/DetailsModel')
const router=require("express").Router()
const express=require('express')
const app=express()

//Add data
router.route("/add").post((req,res)=>{

    const name=req.params.name;
    const age=req.params.age;
    const stream=req.params.stream;

    const dataAddObj=new allData({
        name,
        age,
        stream,
    })

    dataAddObj.save().then(()=>{
        res.json("data addedn Success")
    }).catch((err)=>{
        alert('Video added Error')
        console.log(err)
    })
})

module.exports=router;