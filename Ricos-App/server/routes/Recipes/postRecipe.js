const express = require("express");
const router = express.Router();
const postRecipe = require("../../services/Recipes/postRecipe");

router.post("/recipes/post", async function (req, res, next) {
  try {
    const uid = req.body.uid;
    const date = req.body.date;
    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;
    const ingredients = req.body.ingredients;
    const steps = req.body.steps;

    if (
      !uid ||
      !date ||
      !title ||
      !description ||
      !img ||
      !ingredients ||
      !steps
    )
      res.json("You forgot to add something!");
    else
      res.json(
        await postRecipe.createRecipe(
          uid,
          date,
          title,
          description,
          img,
          ingredients,
          steps
        )
      );
  } catch (err) {
    console.error(`Error while posting recipe`, err.message);
    next(err);
  }
});

module.exports = router;
