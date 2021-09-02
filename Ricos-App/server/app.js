require("dotenv").config();
const env = process.env;

const express = require("express");
const cors = require("cors");
const port = env.PORT || 8081;

const getRecipeRouter = require("./routes/Recipes/getRecipe");
const getUserRecipesRouter = require("./routes/Users/getRecipes");
const getUserRouter = require("./routes/Users/getUser");
const getCheckUserLoginRouter = require("./routes/Users/checkUserLogin");

const postRecipeRouter = require("./routes/Recipes/postRecipe");
const postUserRouter = require("./routes/Users/postUser");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(getRecipeRouter);
app.use(getUserRecipesRouter)
app.use(getUserRouter)
app.use(getCheckUserLoginRouter);

app.use(postRecipeRouter);
app.use(postUserRouter);

app.listen(port, () => {
  console.log("Server is Listening");
});

module.exports = app;
