const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      include: User,
    });
    const postsData = dbPostsData.map((post) => {
      return post.get({ plain: true });
    });

    res.render("home", {
      postsData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signin", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      where: { user_id: req.session.userId },
      include: User,
    });

    const postsData = dbPostsData.map((post) => {
      return post.get({ plain: true });
    });

    res.render("dashboard", {
      postsData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/home", async (req, res) => {
  try {
    const dbPostsData = await Post.findAll({
      include: User,
    });
    const postsData = dbPostsData.map((post) => {
      return post.get({ plain: true });
    });
    res.render("home", {
      postsData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get a specific post details with its id
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postId = req.params.id;
    const dbPostsData = await Post.findAll({
      where: { id: postId },
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const postsData = dbPostsData.map((post) => {
      return post.get({ plain: true });
    });

    res.render("viewPost", {
      postsData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create a post
router.get("/posts/create", withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("createPost", { loggedIn: req.session.loggedIn });
});

//Edit a post with id
router.get("/posts/edit/:id", withAuth, async (req, res) => {
    console.log("Edit a post with id");
    if (!req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  //get the post info and pass it into handlebars

  try {
    const postId = req.params.id;
    const dbPostsData = await Post.findAll({
      where: { id: postId },
    //   include: [
    //     {
    //       model: User,
    //     },
    //   ],
    });
    const postData = dbPostsData.map((post) => {
      console.log("edit post with: ", post);
      return post.get({ plain: true });
    });
    const postToEdit = postData[0];
    //console.log("edit post with: ", postData, postData[0]);
    res.render("editPosts", {postToEdit, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

    
  });

module.exports = router;
