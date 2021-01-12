require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const postMessageRoute = require("./routes/postMessage");
const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(postMessageRoute);

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
