const express = require("express");
const { validateToken } = require("../../services/auth");
const { getUser } = require("../../services/Users/getUser");
const router = express.Router();

router.get("/users/:uid/", validateToken, async function (req, res, next) {
    try {
        const uid = req.params.uid
        // requesting uid (the user the is requesting the info)
        let ruid = (req.user) ? req.user.uid : "NULL"

        if (!uid)
            res.status(400).send("Missing uid")
        else
            await getUser(ruid, uid)
            .then((data) => {
                res.json(data)
            })
    } catch (err) {
        console.error(`Error getting recipe`, err.message);
        next(err);
    }
});

module.exports = router;
