const router = require("express").Router();

//update
//delete
//get user
//follow
//unfollow


router.get('/', (req, res)=>{
res.send("hey its user route");
})

module.exports = router