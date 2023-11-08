const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require("../../utils/auth");


router.post('/create', withAuth, async (req, res) => {
    console.log('/create', 'called !!!');
    try {
        const newPost = await Post.create({
            title: req.body.title,
            text: req.body.content,
            user_id: req.session.userId,
        });
        console.log('new post created : ', newPost);
        console.log("req.body.title ", req.body.title);
        console.log("req.body.content ", req.body.content);
        console.log("req.session.userId ", req.session.userId);
        res.status(200).json(newPost);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;