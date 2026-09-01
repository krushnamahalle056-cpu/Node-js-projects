const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blogify")
.then(e => console.log("MongoDB connected:"));

app.set("view engine", "ejs");    // set view engine
app.set("views" , path.resolve("./views")); // set views directory

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));