const mongoose = require("mongoose");


// Schema      // -- MongoDB lecture --

const userSchema = new mongoose.Schema({

        firstName: {

            type : String,

            required : true,   // require true means firstName jaruri hai 

        },

        lastName : {

            type : String,

        },

        email:{

            type : String,

            require : true,    // require true means email jaruri hai 

            unique: true,     // unique true means koi same email id nhi bana sakta

        },

        jobTitle:{

            type: String

        },

        gender:{

            type : String

        }

    },

    {timestamps: true}   // timestamps is use for id kitne baje create hui thi our kitne baje update hui thi  (additional info about user id)

);     


const User = mongoose.model('user', userSchema);

module.exports = User;