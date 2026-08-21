const {v4: uuidv4} = require('uuid')
const User = require('../models/user');

const{setUser} = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/");   // after creating the user back to the signup page 
 
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({email, password});

    if(!user) return res.render("login",{
        error: "invalid Username or Password",
    
    });

    const sessionId = uuidv4();
    setUser(sessionId , user);
    res.cookie('uid', sessionId);

    return res.redirect("/");   // after creating the user back to the signup page 
}

module.exports={
    handleUserSignup,
    handleUserLogin,

}