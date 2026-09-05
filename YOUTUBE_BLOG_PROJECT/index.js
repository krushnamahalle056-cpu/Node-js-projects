const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/blogify")
.then(e => console.log("MongoDB connected:"));

app.set("view engine", "ejs");    // set view engine
app.set("views" , path.resolve("./views")); // set views directory

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  // to parse form data
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.get("/", (req, res) => {
    res.render("home",{
        user: req.user,

    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));