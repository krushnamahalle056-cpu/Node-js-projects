const path = require("path");
const express = require("express");

const userRoute = require("./routes/user");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");    // set view engine
app.set("views" , path.resolve("./views")); // set views directory

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));