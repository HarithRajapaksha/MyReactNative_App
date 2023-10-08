const Data=require('../Models/DetailsModel')
const router=require("express").Router()
const express=require('express')
const app=express()
const cors = require('cors')

app.use(cors())

app.use(express.json());

//Add data
router.route("/add").post((req,res)=>{
  
    const {Name,Age,Stream}=req.body;

    const dataAddObj=new Data({
        name:Name,
        age:Age,
        stream:Stream,
    })

    dataAddObj.save().then(()=>{
        res.json("data added Success")
    }).catch((err)=>{
        alert('data added Error')
        console.log(err)
    })
})

module.exports=router;