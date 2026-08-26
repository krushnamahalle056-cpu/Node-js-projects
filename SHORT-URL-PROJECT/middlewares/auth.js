const {getUser} = require("../service/auth")

async function restrictToLoggedInUsersOnly(req, res, next) {
    const userUid = req.headers['Authorization'];
    console.log(req.headers);
    if (!userUid) {
        return res.redirect("/login");
    }
    const token = userUid.split(" Bearer ")[1];  // "Bearer [23u1234ukjjsh]"

    const user = getUser(token);

    if (!user) {
        return res.redirect("/login");
    }

    req.user = user;
    next();
}


async function checkAuth(req, res, next) {
    const userUid = req.headers['Authorization'];
    const token = userUid.split(" Bearer ")[1];

    if (!userUid) {
        req.user = null;
        return next();
    }

    const user =  getUser(token);

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUsersOnly,
    checkAuth,
}