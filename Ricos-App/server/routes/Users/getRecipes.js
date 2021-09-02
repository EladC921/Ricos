const express = require("express");
const router = express.Router();
const getRecipes = require("../../services/Users/getRecipes");

router.get("/users/:uid/recipes/", async function (req, res, next) {
    try {
        const uid = req.params.uid;

        if (!uid)
            res.json("You forgot to add something!");
        else
            res.json(await getRecipes.getRecipes(uid));
    } catch (err) {
        console.error(`Error while getting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
