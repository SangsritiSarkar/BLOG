const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();
//console.log("MONGO_URL:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL,{})
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err=>{
    console.error("Error connecting to server",err);
});


app.listen("5000",()=>{
    console.log("Backend is running");
});