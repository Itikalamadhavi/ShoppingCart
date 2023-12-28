import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/",function(req,res){
    res.send("express is working!");
})

app.listen(3001,function(){
    console.log('====================================');
    console.log("express is running in 3001");
    console.log('====================================');
})