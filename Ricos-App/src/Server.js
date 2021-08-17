const express = require("express");
const app = express();
const posts = [];
app.get("/", (req, res) => {
  res.send("Great Succes");
});

app.listen(8081, () => {
  console.log("Server is Listening");
});
