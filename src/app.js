const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Hello Everyone");
});

app.use("/dashboard",(req,res)=>{
    res.send("Dashboard ");
})

app.listen('7777', ()=>{
    console.log("Connected to server 7777....");
});


