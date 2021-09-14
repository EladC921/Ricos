const express = require("express");
const { authenticateToken } = require("../../services/auth");
const { followUser } = require("../../services/Users/follow");
const router = express.Router();

router.post("/users/follow", authenticateToken, async function (req, res, next) {
    try {
        const uid = req.body.uid
        const user = req.user

        if (!uid)
            res.status(400).send("Missing uid")
        else {
            if (user.uid == uid)
                res.status(400).send("User can't follow itself")
            else {
                await followUser(user.uid, uid)
                    .then((result) => {
                        if (result)
                            res.sendStatus(200)
                        else
                            res.sendStatus(500)
                    })
            }
        }
    } catch (err) {
        console.error(`Error following user`, err.message);
        next(err);
    }
});

module.exports = router;
