const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authController = require('../controllers/authController');

//register
router.post('/register', authController.register);
// router.post('/register', async (req, res)=>{
// try{

//     //generate new password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt)

//     //create new user
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: hashedPassword
//     })

// //save user and return response
//     const user = await newUser.save();
//     res.status(200).json(user);
// } catch(err){
//     res.status(500).json(err)
// }

// })

//LOGIN
router.post('/login', authController.login);

//LOGOUT

module.exports = router