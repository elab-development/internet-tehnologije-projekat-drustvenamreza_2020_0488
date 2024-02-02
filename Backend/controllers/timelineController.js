const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");


exports.getTimeline = async (req, res) => {

    try{
        
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId=>{
                return Post.find({userId:friendId})
            })
        )

        res.json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err + " :greska")
    }
};