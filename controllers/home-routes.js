//console.log("inside home-routes.js !!");

const router = require('express').Router();
const {User, Post, Comment } = require('../models');
console.log('User : ', User);
console.log('Post : ', Post);
console.log('Comment : ', Comment);

//use utils for auth !!

router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll();
        // console.log("dbPostData: ", dbPostsData);
        const postsData = dbPostsData.map((post)=> {
            // console.log("inside map: with post: ", post);
            return post.get({ plain: true});
        });
        
        console.log("postData: ", postsData);
        res.render('home', {
            postsData,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll();
        // console.log("dbPostData: ", dbPostsData);
        // const postsData = dbPostsData.map((post)=> {
        //     // console.log("inside map: with post: ", post);
        //     return post.get({ plain: true});
        // });
        
        // console.log("postData: ", postsData);
        res.render('login');

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        console.log('req : ',req);
        console.log('res : ',res);
        const dbPostsData = await Post.findAll();
        // console.log("dbPostData: ", dbPostsData);
        // const postsData = dbPostsData.map((post)=> {
        //     // console.log("inside map: with post: ", post);
        //     return post.get({ plain: true});
        // });
        
        // console.log("postData: ", postsData);
        res.render('dashboard');

    } catch (err) {
        console.log(err);
        res.status.json(err);
    }
});

module.exports = router;