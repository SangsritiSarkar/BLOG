const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch(err=>{
    console.error("Error connecting to server",err);
});

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "images");
    },filename:(req,file,cb)=>{
       cb(null,"hello.png");
    },
});

const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000",()=>{
    console.log("Backend is running");
});