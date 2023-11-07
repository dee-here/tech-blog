const router = require('express').Router();
const {User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//use utils for auth ?!!

router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: User
        });
        console.log("dbPostsData with user: ", dbPostsData);
        const postsData = dbPostsData.map((post)=> {
            return post.get({ plain: true});
        });
        console.log("PostsData with user: ", postsData);
        console.log("postData: ", postsData);
        res.render('home', {
            postsData,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');

});

router.get("/signin", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});


router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.session.userId,{
            include: [Post]});
        console.log("dbPostData: ", dbUserData);
        console.log('check if re has session and loggedin !!', req.session.loggedIn);
        const userData = dbUserData.get({plain: true})
        // const postsData = dbPostsData.map((post)=> {
        //     // console.log("inside map: with post: ", post);
        //     return post.get({ plain: true});
        // });
        
        console.log("userData: ", userData);
        res.render('dashboard');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;