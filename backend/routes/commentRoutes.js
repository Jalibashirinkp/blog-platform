const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");
const auth = require("../middleware/auth");

// Add Comment
router.post("/:postId", auth, async (req, res) => {
  try {
    const comment = new Comment({
      comment: req.body.comment,
      user: req.user.id,
      post: req.params.postId,
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Comments of a Post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
    }).populate("user", "username");

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;