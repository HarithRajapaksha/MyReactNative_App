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

//get one person data
router.route("/oneUser/:id").get(async(req,res)=>{
    let id=req.params.id;

   try {      
    alldata.findById(id).then((data)=>{
        res.json(data)
    })

   } catch (error) {
     console.log("One data are read error "+error)
   }
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

//data update
router.route("/update/:id").put(async(req,res)=>{
    let id=req.params.id;
    const{name,age,stream}=req.body;

    const updateData=({name,age,stream})

    try {
        await alldata.findByIdAndUpdate(id,updateData).then(()=>{
            res.send("data updated");
        })
    } catch (error) {
        res.send("Data not updated")
    }
})

module.exports = router;