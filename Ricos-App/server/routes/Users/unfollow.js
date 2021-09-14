const express = require("express");
const { authenticateToken } = require("../../services/auth");
const { unfollowUser } = require("../../services/Users/unfollow");
const router = express.Router();

router.delete("/users/unfollow", authenticateToken, async function (req, res, next) {
    try {
        const uid = req.body.uid
        const user = req.user

        if (!uid)
            res.status(400).send("Missing uid")
        else {
            await unfollowUser(user.uid, uid)
            .then((result) => {
                if (result)
                    res.sendStatus(200)
                else
                    res.sendStatus(500)
            })
        }
    } catch (err) {
        console.error(`Error unfollowing user`, err.message);
        next(err);
    }
});

module.exports = router;
