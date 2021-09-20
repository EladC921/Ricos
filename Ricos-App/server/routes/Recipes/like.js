const express = require("express");
const { authenticateToken } = require("../../services/auth");
const { likeRecipe } = require("../../services/Recipes/like");
const router = express.Router();

router.post("/recipes/like", authenticateToken, async function (req, res, next) {
    try {
        const rid = req.body.rid
        const uid = req.user.uid

        if (!rid)
            res.status(400).send("Missing recipe id");
        else
            await likeRecipe(rid, uid)
                .then((result) => {
                    console.log(result)
                    if (result)
                        res.sendStatus(200)
                    else
                        res.sendStatus(500)
                }).catch((err) => {
                    console.log(err)
                    res.sendStatus(500)
                })
    } catch (err) {
        console.error(`Error while posting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
