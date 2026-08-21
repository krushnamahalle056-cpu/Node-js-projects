const express = require("express");
const {connectMongoDb} = require("./Connection/connection");

const {logReqRes} = require("./Middleware/index");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;


// // Connection  -- Mongoose ka hoga
connectMongoDb("mongodb://127.0.0.1:27017/youtube-kru-1").then(()=>
    console.log("MongoDB connected")
);

// Midelware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));


// //Routes
app.use("/api/users", userRouter);


app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`));

