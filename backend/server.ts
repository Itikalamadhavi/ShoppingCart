import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModel from './models/user'

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://itikalamadhavi007:Madhu1999@shoppingcartcluster.41qjwtu.mongodb.net/?retryWrites=true&w=majority")

app.post("/login",function(req,res){
    console.log('====================================');
    console.log("form connected");
    console.log('====================================');
    userModel.create(req.body)
    .then((user: any)=>res.json(user))
    .catch((err: any)=>res.json(err))

})

app.listen(3001,function(){
    console.log("express is running in 3001");
})