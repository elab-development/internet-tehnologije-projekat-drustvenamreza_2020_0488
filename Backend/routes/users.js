const router = require("express").Router();


router.get('/', (req, res)=>{
res.send("hey its user rout");
})

module.exports = router