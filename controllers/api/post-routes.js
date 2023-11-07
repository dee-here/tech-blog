const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require("../../utils/auth")
// router.post("/", withAuth, async(res,res)=>{
// const newPost = await Post.create{
//     title: req.body.title,
//     user_id: req.session.userId
// }

// })