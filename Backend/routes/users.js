const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//update
router.put("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){

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
router.delete("/:id", async(req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){

        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account je obrisan")

        }catch(err){
            return res.status(500).json(err + " greskaaa")
        }

    }else{
        return res.status(403).json("Mozes da delete-ujes samo svoj nalog!")
    }
})
//get user
router.get("/:id", async(req, res)=>{
try{

    const user = await User.findById(req.params.id)
    const {password, isAdmin, updatedAt, ...other} = user._doc //pravi dokument i u njega smesta objekat koji sadrzi sve ove propertije
    res.status(200).json(other) //saljemo mu samo other (sve bez napisanih properyija)
}catch(err){
    return res.status(500).json(err + " greskaaa")
}

});


//follow
//unfollow


// router.get('/', (req, res)=>{
// res.send("hey its user route");
// })

module.exports = router