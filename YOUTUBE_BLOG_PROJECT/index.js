const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");    // set view engine
app.set("views" , path.resolve("./views")); // set views directory

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));