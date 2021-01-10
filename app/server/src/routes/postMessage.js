const express = require("express");
const router = new express.Router();
const { PostMessage } = require("../models/postMessage");

router.get("/getPosts", async (req, res) => {
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

router.put("/posts/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["message"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const editedPost = await PostMessage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!editedPost) {
      return res.status(404).send();
    }

    res.send(editedPost);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
