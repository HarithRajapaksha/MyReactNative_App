const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();

//create an express application
const app=express();
const PORT=process.env.PORT || 3200;

//get the mongoDB connection URL
const URL=process.env.DB_URL;

//create mongoDb connection
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('error',(err)=>{
    console.error("MongoDB connection error"+err);
})

db.once('close',()=>{
    console.log("Db connection succesfull");
})

app.listen(PORT,()=>{
    console.log("Server is runnig on port "+PORT);
})