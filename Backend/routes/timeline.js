const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

const timelineController = require('../controllers/timelineController');
//get timeline posts
router.get("/all", timelineController.getTimeline);

module.exports = router