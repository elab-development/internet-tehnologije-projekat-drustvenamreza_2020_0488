const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//update
router.put("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)

            }catch(err){
                return res.status(500).json(err)
            }
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            })
            res.status(200).json("Account je azuriran")

        }catch(err){
            return res.status(500).json(err + " greskaaa")
        }

    }else{
        return res.status(403).json("Mozes da update-ujes samo svoj nalog!")
    }
})
//delete
//get user
//follow
//unfollow


// router.get('/', (req, res)=>{
// res.send("hey its user route");
// })

module.exports = router