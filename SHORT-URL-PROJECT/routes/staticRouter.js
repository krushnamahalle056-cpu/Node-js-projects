const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

router.get("/", restrictTo(["USER"]), async (req, res) => {
    // restrictTo(["USER"]) is a inline middlware
    const allUrls = await URL.find({createdBy:req.user._id});
    return res.render("home", {
        urls: allUrls,
    });
});

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;