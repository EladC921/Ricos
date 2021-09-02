const express = require("express");
const router = express.Router();
const getUser = require("../../services/Users/getUser");

router.get("/users/:uid/", async function (req, res, next) {
    try {
        const uid = req.params.uid;

        if (!uid)
            res.json("You forgot to add something!");
        else
            res.json(await getUser.getUser(uid));
    } catch (err) {
        console.error(`Error while getting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
