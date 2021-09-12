require("dotenv").config();
const env = process.env;

const express = require("express");
const cors = require("cors");
const port = env.PORT || 8081;

/* Recipes */
const getRecipeRouter = require("./routes/Recipes/getRecipe");
const postRecipeRouter = require("./routes/Recipes/postRecipe");

/* Users */
const getUserRecipesRouter = require("./routes/Users/getRecipes");
const getUserMainRecipesRouter = require("./routes/Users/getMainRecipes");
const getUserRouter = require("./routes/Users/getUser");
const getCheckUserLoginRouter = require("./routes/Users/checkUserLogin");
const postUserRouter = require("./routes/Users/postUser");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Recipes */
// /recipes/get/:rid
app.use(getRecipeRouter);
// /recipes/post
app.use(postRecipeRouter);

/* Users */
// /users/:uid/recipes
app.use(getUserRecipesRouter)
// /users/:uid/main
app.use(getUserMainRecipesRouter);
// /users/:uid
app.use(getUserRouter)
// /users/login
app.use(getCheckUserLoginRouter);
// /users/post
app.use(postUserRouter);

app.listen(port, () => {
  console.log("Server is Listening");
});

module.exports = app;
