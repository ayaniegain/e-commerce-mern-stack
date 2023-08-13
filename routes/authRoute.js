const express = require("express");
const {registerController,loginController,getController} = require("../controllers/authController");
const {requirSignin,isAdmin} = require("../middlewares/authMiddleware");

//router object
const router =express.Router()

//routing
//REGISTER -- METHOD POST
router.post('/register',registerController)

//LOGIN -- METHOD POST
router.post('/login', loginController)

//get data from protected route 
router.get('/test',requirSignin,isAdmin, getController)

module.exports = router;