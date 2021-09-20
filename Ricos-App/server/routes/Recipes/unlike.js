const express = require("express");
const { authenticateToken } = require("../../services/auth");
const { unlikeRecipe } = require("../../services/Recipes/unlike");
const router = express.Router();

router.delete("/recipes/unlike", authenticateToken, async function (req, res, next) {
    try {
        const rid = req.body.rid
        const user = req.user

        if (!rid)
            res.status(400).send("Missing recipe id")
        else {
            await unlikeRecipe(user.uid, rid)
            .then((result) => {
                if (result)
                    res.sendStatus(200)
                else
                    res.sendStatus(500)
            })
        }
    } catch (err) {
        console.error(`Error unliking recipe`, err.message);
        next(err);
    }
});

module.exports = router;
