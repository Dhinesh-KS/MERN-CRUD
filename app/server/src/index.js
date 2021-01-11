require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const postMessageRoute = require("./routes/postMessage");
const port = 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin : "http://192.168.43.88:3000"}))
app.use(postMessageRoute);

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
