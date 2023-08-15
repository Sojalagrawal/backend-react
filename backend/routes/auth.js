const express=require("express");
const User=require("../models/User")
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Harryisagoodboy"; 
//Create a User using POST "/api/auth/".Doesn't require Auth 
router.post('/createuser',[
    body('name',"Enter a valid name").isLength({min:3}),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Password must be atleast 5 characters").isLength({min:5})
],
    async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }


    // const user=User(req.body);
    // user.save();
    // res.send(req.body);

    // User.create({
    //     name:req.body.name,
    //     password:req.body.password,
    //     email:req.body.email
    // }).then((user)=>res.json(user))
    // .catch(err=>{console.log(err)
    //    res.json({error:"please enter a unique value for email"})});
    // })



    //Check whether the user with this email exists already or not
    try{
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:"Sorry a userwith this email already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        secPass=await bcrypt.hash(req.body.password,salt);
        
        user=await User.create({
            name:req.body.name,
                password:secPass,
                email:req.body.email
        });
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        res.json({authtoken});
    }catch(error){
        console.log(error.message);
        res.status(500).send("some error occured");
    }
    
})
module.exports=router;
