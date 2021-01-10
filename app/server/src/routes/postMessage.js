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

module.exports = router;
