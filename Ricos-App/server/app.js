require("dotenv").config();
const env = process.env;

const express = require("express");
const cors = require("cors");
const port = env.PORT || 8081
const postRecipeRouter = require("./routes/postRecipe");
const getRecipeRouter = require("./routes/getRecipe");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(postRecipeRouter);
app.use(getRecipeRouter);

app.listen(port, () => {
  console.log("Server is Listening");
});

module.exports = app;
