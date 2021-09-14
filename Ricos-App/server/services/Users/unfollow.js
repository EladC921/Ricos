const db = require("../db");

async function unfollowUser(followerId, followsId) {
    try {
        const result = await db.query(
            "DELETE FROM `Follows` WHERE uid = ? and followerId = ?",
            [followsId, followerId]
        )

        return result.affectedRows != 0

    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = {
    unfollowUser,
};
