const express = require("express");
const router = new express.Router();
const { PostMessage } = require("../models/postMessage");

router.get("/posts", async (req, res) => {
  try {
    const posts = await PostMessage.find({});
    res.send(posts);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/createpost", async (req, res) => {
  const newPost = new PostMessage(req.body);

  try {
    await newPost.save();
    res.status(201).send(newPost);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
