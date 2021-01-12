const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
  process.env.ConnectionURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) return console.log("Successfully connected to DB.");
    console.log("Error connecting to DB");
  }
);
