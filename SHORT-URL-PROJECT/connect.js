
const mongoose = require("mongoose");

async function connnectToMongoDB(url) {
    return mongoose.connect(url);             // MongoDB ko connect karne ke liye mongoose ka url pass krna hoga index.js file main 
}

module.exports = {
    connnectToMongoDB,
}