const connectToMongo=require('./db');
const express = require("express");
const app=express();
connectToMongo();




app.get("/",function(req,res){
    res.send("home");
});


app.listen(3000,function(){
     console.log("Server started on port 3000");
});