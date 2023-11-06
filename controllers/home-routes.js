//console.log("inside home-routes.js !!");

const router = require('express').Router();
const {User, Post, Comment } = require('../models');

//use utils for auth !!

router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll();
        console.log("dbPostData: ", dbPostsData);
        const postsData = dbPostsData.map((post)=> {
            console.log("inside map: with post: ", post);
            return post.get({ plain: true});
        });
        
        console.log("postData: ", postsData);
        res.render('posts', {postsData});

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
});

module.exports = router;