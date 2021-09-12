const express = require("express");
const { authenticateToken } = require("../../services/auth");
const router = express.Router();
const getMainRecipes = require("../../services/Users/getMainRecipes");

router.get("/users/main/", authenticateToken, async function (req, res, next) {
    try {
        const user = req.user
        return res.json(await getMainRecipes.getMainRecipes(user.uid))

        /*const uid = req.params.uid
        console.log(uid, req.user.uid)

        if (!uid)
            return res.status(400).json("Missing user id")
        else {
            if (req.user.uid != uid)
                return res.sendStatus(401)
            else
                return res.json(await getMainRecipes.getMainRecipes(uid))
        }*/
    } catch (err) {
        console.error(`Error while getting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
