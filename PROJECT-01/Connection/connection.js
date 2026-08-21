const mongoose = require("mongoose");

async function connectMongoDb(url){        // url mongodb se liya tha  terminal se
    return mongoose.connect(url)
}

module.exports ={
    connectMongoDb,
}