const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.get("/", (req, res) => {
  return Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
});

router.post(
  "/",
  [auth, [check("content", "Post cannot be blank").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(errors);
    try {
      const user = await (await User.findById(req.user.id)).isSelected(
        "-password"
      );

      const newPost = new Post({
        content: req.body.content,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.status(500).send("Server Error");
    }
  }
);

module.exports = router;
