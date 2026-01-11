const express = require("express");

const app = express();

app.use("/user", [(req,res,next) =>{
    console.log("HELLO11");
    next();
    // res.send("HELLO");
}],
(req,res,next)=>{
    res.send("HELLO2");
})

// app.use("/",(req,res)=>{
//     res.send("Hello Everyone");
// });

// app.get("/dashboard",(req,res)=>{
//     res.send("Dashboard ");
// })
// app.post("/test",(req,res)=>{
//     res.send("POST request");
// })

app.listen('7777', ()=>{
    console.log("Connected to server 7777....");
});


