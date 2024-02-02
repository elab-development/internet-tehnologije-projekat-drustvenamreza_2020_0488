const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

const postController = require('../controllers/postController');

//create post
router.post("/", postController.createPost);
// router.post("/", async (req, res)=>{
//     const newPost = new Post(req.body)

//     try{
//         const savedPost = await newPost.save();
//         res.status(200).json(savedPost)

//     }catch(err){
//         res.status(500).json(err + " :greska")
//     }
// })


//update post
router.put("/:id", postController.updatePost);
// router.put("/:id", async (req, res)=>{
    
//     // try{
        
//     //     const post = await Post.findById(req.params.id)

//     //     if(post.userId === req.body.userId){
//     //         await post.updateOne({$set:req.body})
//     //         res.status(200).json("post je azuriran")
//     //     }else{
//     //         res.status(403).json("mozes samo svoj post da menjas")
//     //     }
//     // }catch(err){
//     //     res.status(500).json(err + " :greska")
//     // }
// })
//delete post
router.delete("/:id", postController.deletePost);
// router.delete("/:id", async (req, res)=>{
    
//     // try{
        
//     //     const post = await Post.findById(req.params.id)

//     //     if(post.userId === req.body.userId){
//     //         await post.deleteOne()
//     //         res.status(200).json("post je obrisan")
//     //     }else{
//     //         res.status(403).json("mozes samo svoj post da obrises")
//     //     }
//     // }catch(err){
//     //     res.status(500).json(err + " :greska")
//     // }
// })
//like a post/dislike
router.put("/:id/like", postController.likePost);
// router.put("/:id/like", async (req, res)=>{
    
//     // try{
        
//     //     const post = await Post.findById(req.params.id)

//     //     if(!post.likes.includes(req.body.userId)){
//     //         await post.updateOne({$push:{likes:req.body.userId}})
//     //         res.status(200).json("post je lajkovan")
//     //     }else{
//     //         await post.updateOne({$pull:{likes:req.body.userId}})
//     //         res.status(200).json("post je dislajkovan")
//     //     }
//     // }catch(err){
//     //     res.status(500).json(err + " :greska")
//     // }
// })

//get a post
router.get("/:id", postController.getPost);
// router.get("/:id", async (req, res)=>{
    
//     // try{
        
//     //     const post = await Post.findById(req.params.id)
//     //     res.status(200).json(post)
//     // }catch(err){
//     //     res.status(500).json(err + " :greska")
//     // }
// })
//get timeline posts
// router.get("/timeline/all", async (req, res)=>{
//     try{
        
//         const currentUser = await User.findById(req.body.userId)
//         const userPosts = await Post.find({userId: currentUser._id})
//         const friendPosts = await Promise.all(
//             currentUser.followings.map(friendId=>{
//                 return Post.find({userId:friendId})
//             })
//         )

//         res.json(userPosts.concat(...friendPosts))
//     }catch(err){
//         res.status(500).json(err + " :greska")
//     }
// })

module.exports = router