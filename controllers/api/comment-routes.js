const router = require("express").Router();
const {Comment} = require("../../models/");
const withAuth = require("../../utils/auth");

//Create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.content,
      user_id: req.session.userId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;