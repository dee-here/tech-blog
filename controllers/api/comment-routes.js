const router = require("express").Router();
const {Comment} = require("../../models/");
const withAuth = require("../../utils/auth");

//Create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Comment.create({
        ...req.body,
    //   title: req.body.title,
    //   text: req.body.content,
      user_id: req.session.userId,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;