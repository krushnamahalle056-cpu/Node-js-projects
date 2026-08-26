const {getUser} = require("../service/auth")

async function restrictToLoggedInUsersOnly(req, res, next) {
    const userUid = req.headers['Authorization'];

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

    if (!userUid) {
        req.user = null;
        return next();
    }

    const user = await getUser(userUid);

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUsersOnly,
    checkAuth,
}