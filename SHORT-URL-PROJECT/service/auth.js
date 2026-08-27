//  const sessionIdToUserMap = new Map();   
   // this is for stateful authentication, we store the user object in memory for the session

const jwt = require('jsonwebtoken');  
    // this is for stateless authentication, we store the user object in the JWT token

const secret = "Krushna@123";

// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret);
}

function getUser(token){
    if(!token) return null;
    try{
       return jwt.verify(token, secret);
    }
    catch(error){
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}