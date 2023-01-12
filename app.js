require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const data =require("./modules/userSchema");
require("./db/conn")


const cors = require("cors");
const router = require("./routes/router");
const port = process.env.PORT|| 3006;







//middleware
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.json("server start")
})
app.use(router);






app.listen(port,(req,res)=>{
    console.log(`connect on port, ${port}`);
})