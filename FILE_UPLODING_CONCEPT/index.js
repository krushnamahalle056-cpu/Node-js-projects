const path = require("path");
const express = require("express");
const multer  = require('multer');

const app = express();
const PORT = 8002;

const upload = multer({ dest: 'uploads/' });  // jo bhi file upload hogi use uploads destination folder me store karega

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false}));  // middleware

app.get("/" , (req,res)=>{
    return res.render("homepage");
});

app.post("/upload",upload.single('ProfileImage'), (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
})

app.listen(PORT, () => console.log(`Server Started at PORT : 8002`));