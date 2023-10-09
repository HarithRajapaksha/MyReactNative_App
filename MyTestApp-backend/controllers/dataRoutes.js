const Data=require('../Models/DetailsModel')
const router=require("express").Router()
const express=require('express')
const app=express()
const cors = require('cors')

app.use(cors())

app.use(express.json());

//add the data 

router.route("/add").post((req,res)=>{
   
        console.log(req.params.Age)
        const Name=req.params.Name;
        const Age=req.params.Age
        const Stream=req.params.Stream;

    const addData=new Data({
        Name,
        Age,
        Stream,
    })

   addData.save().then((res)=>{
             res.json("Data added success"+res)
   }).catch((err)=>{
            alert(`Data added error ${err}`)
            console.log("Data added error"+err)
   })


})

module.exports=router;