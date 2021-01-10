require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const port = 4000;

const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
