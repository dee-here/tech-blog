const router = require('express').Router();
const {User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: User,
        });
        // console.log("dbPostsData with user: ", dbPostsData.User.username);
        const postsData = dbPostsData.map((post)=> {
            // console.log("dbPostsData with user: ", post?.user?.username);
            return post.get({ plain: true});
        });
        // console.log("PostsData with user: ", postsData);
        // console.log("postData: ", postsData);
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
        // const dbUserData = await User.findByPk(req.session.userId,{
        //     include: [Post]});
        // console.log("dbPostData: ", dbUserData);
        // console.log('check if re has session and loggedin !!', req.session.loggedIn);
        // const userData = dbUserData.get({plain: true})
        // // const postsData = dbPostsData.map((post)=> {
        // //     // console.log("inside map: with post: ", post);
        // //     return post.get({ plain: true});
        // // });

        // const dbPostsData = await Post.findByPk(req.session.userId,{
        //     include: User
        // });

        const dbPostsData = await Post.findAll({
            where: { user_id: req.session.userId},
            include: User,
        });
        // console.log("dashbaord posts with User:***: ", dbPostsData);
        // console.log("/dashbaord dbPostsData?.user?.username: ", dbPostsData?.user?.username);
        const postsData = dbPostsData.map((post)=> {
            // console.log("dbPostsData with user: ", post?.user?.username);
            return post.get({ plain: true});
        });
        // console.log("PostsData with user: ", postsData);
        // console.log("postData: ", postsData);
        res.render('dashboard', {
            postsData,
            loggedIn: req.session.loggedIn,
        });

        // console.log("userData: ", userData);
        // res.render('dashboard');

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/home', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: User,
        });
        // console.log("dbPostsData with user: ", dbPostsData.User.username);
        const postsData = dbPostsData.map((post)=> {
            // console.log("dbPostsData with user: ", post?.user?.username);
            return post.get({ plain: true});
        });
        // console.log("PostsData with user: ", postsData);
        // console.log("postData: ", postsData);
        res.render('home', {
            postsData,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {

        const postId = req.params.id;
        const dbPostsData = await Post.findAll({
          where: { id: postId },
          include: [
            {
              model: Comment,
            }
          ],
        });
        //  console.log("/post/:id with user: ", dbPostsData);
        const postsData = await  dbPostsData.map((post, index)=> {
             console.log(index, "/post/:id with comments: ",  post);
             post.comments?.forEach(async element => {
                // console.log('comment ==> ', element);
               const userName = await User.findOne({
                where: {id: element.id}
               });
               post.comments.userName = userName;
               console.log("comment creator is: ", post, userName);
             });
            return post.get({ plain: true});
        });
        console.log("comments with username &%&%: ", postsData);
        // console.log("postData: ", postsData);
        res.render('viewPost', {
            postsData,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;