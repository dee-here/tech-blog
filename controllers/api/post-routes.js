const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require("../../utils/auth");


router.post('/posts/create', withAuth, async (req, res) => {
    console.log('/posts/create', 'called !!!');
    try {
        const newPost = await Post.create({
            title: req.body.title,
            text: req.body.content,
            user_id: req.session.userId
        });
        console.log('new post created : ', newPost);
        console.log("req.body.title ", req.body.title);
        console.log("req.body.content ", req.body.content);
        console.log("req.session.userId ", req.session.userId);
        res.status(200).json(newPost);
        // res.render('dashboard');
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.post("/posts/create", withAuth, async(res,res)=>{
// // const newPost = await Post.create{
// //     title: req.body.title,
// //     user_id: req.session.userId
// }

// })