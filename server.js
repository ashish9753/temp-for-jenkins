import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "hello from server created by Ashish Sharma"
    })
})

app.listen(3001, ()=>{
    console.log("server is running on Port 3001");
})