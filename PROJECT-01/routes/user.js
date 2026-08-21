const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,         // He aapn saglya file la require kel aahe 
    handleDeleteUserById, 
    handleCreateNewUser ,
} = require("../controllers/user");

const router = express.Router();

// Routes

router
.route('/')
.get( handleGetAllUsers )        //   '/' ka matlab sabhi users milege
.post(handleCreateNewUser)


router
.route('/:id')
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;