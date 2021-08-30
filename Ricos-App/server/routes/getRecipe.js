const express = require("express");
const router = express.Router();
const getRecipe = require("../services/getRecipe");

router.get("/getRecipe/:rid", async function (req, res, next) {
  try {
    const rid = req.params.rid;

    if (!rid)
      res.json("You forgot to add something!");
    else
      res.json(
        await getRecipe.getRecipe(rid)
      );
  } catch (err) {
    console.error(`Error while getting recipe`, err.message);
    next(err);
  }
});

module.exports = router;
