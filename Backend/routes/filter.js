//paginacija i filtriranje

const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const userController = require('../controllers/userController');
const authMiddleware = require("../middleware/authMiddleware");

const filterController = require('../controllers/filterController');

router.get('/users', filterController.filter);
// router.get('/users', async (req, res)=>{

//     try {
//         const page = parseInt(req.body.page) || 1;
//         const pageSize = parseInt(req.body.pageSize) || 2;
//         const nameFilter = req.body.username;
    
//         // Formiranje objekta za MongoDB upit
//         const query = {};
//         if (nameFilter) {
//           query.username = { $regex: new RegExp(nameFilter, 'i') }; // Filtriranje po imenu, case-insensitive
//         }
    
//         // Izvršavanje upita sa paginacijom
//         const users = await User.find(query)
//           .skip((page - 1) * pageSize)
//           .limit(pageSize);
    
//         res.json(users);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Greška prilikom dohvatanja korisnika.' });
//       }
// })


module.exports = router