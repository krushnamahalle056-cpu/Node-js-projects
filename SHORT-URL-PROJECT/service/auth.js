//  const sessionIdToUserMap = new Map();   
   // this is for stateful authentication, we store the user object in memory for the session

const jwt = require('jsonwebtoken');  
    // this is for stateless authentication, we store the user object in the JWT token

const secret = "Krushna@123";

// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }

function setUser(user){
    return jwt.sign(user, secret);
}

function getUser(token){
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser,
}