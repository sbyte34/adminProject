const mongoose = require("mongoose");
const validator =require("validator");

mongoose.set('strictQuery', false);

const datachema = new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('invalid email')
                }
            }
        },
        age:{
            type:String,
            require:true
        },
        mobile:{
            type:String,
            require:true,
            unique:true
        },
        course:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        desc:{
            type:String,
            require:true
        },
        url:{
            type:String,
            require:true
        }

});

const data = new mongoose.model("data",datachema);

module.exports=data;