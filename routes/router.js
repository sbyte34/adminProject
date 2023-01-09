const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const data =require("../modules/userSchema");

router.get("/",(req,res)=>{
    console.log("connected router")
});
//   register data user connectivity code
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,course,address,desc,url} = req.body;

    if(!name || !email || !age || !mobile || !course || !address || !desc||!url){
        res.status(422).json('please fill the data');
        
    }
    try{
        const predata= await data.findOne({email:email});
        console.log(predata);
    
        if(predata){
            res.status(422).json("user is already exists");
            alert("user already exists")}
        else{
            const adddata = new data({
                name,email,age,mobile,course,address,desc,url
            });
            await adddata.save();
            res.status(201).json(adddata);
            console.log(adddata);

        }


    }
    catch(error){
        
         res.status(422).json(error);
      
    }
    
})
// get user data connectivity code
router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await data.find();
        res.status(201).json(userdata);
        console.log(userdata);
        
    }catch(error){
        res.status(422).json(error);
    }
})
//get individual user
router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await data.findById({_id:id});
        // const userindividual = await data.findById(req.params.id);
        console.log(userindividual);
        res.status(201).json(userindividual)        
    } catch (error) {
        res.status(422).json(error)
//         res.status(404).json(error)
    }
})

router.patch("/updateuser/:id", async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await data.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})
//delete user data code
router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await data.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})





module.exports=router;