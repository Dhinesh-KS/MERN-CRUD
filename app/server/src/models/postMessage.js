const mongoose = require("mongoose");

const PostMessage = mongoose.model("PostMessage", {
  title: {
    type: String,
  },
  message: {
    message: {
      type: String,
    },
  },
});

module.exports = { PostMessage };
