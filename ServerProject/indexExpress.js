// <----   lecture http with Express.js   ----->

const express = require("express");

const app = express();
// app is basicaly handlar function

app.get('/',(req,res)=>{
    return res.send("Hello from home page");
});

app.get('/about',(req,res)=>{
    return res.send("Hello from about page "+ "Hey "+ req.query.name + " your age is "+ req.query.age);
})


app.listen(3000,()=>{console.log("Server Started Again")})



