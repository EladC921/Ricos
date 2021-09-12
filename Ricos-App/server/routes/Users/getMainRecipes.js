const express = require("express");
const router = express.Router();
const getMainRecipes = require("../../services/Users/getMainRecipes");

router.get("/users/:uid/main/", async function (req, res, next) {
    try {
        const uid = req.params.uid;

        if (!uid)
            res.json("You forgot to add something!");
        else
            res.json(await getMainRecipes.getMainRecipes(uid));
    } catch (err) {
        console.error(`Error while getting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
