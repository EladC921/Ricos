const db = require("../db");

async function likeRecipe(rid, uid) {
    try {
        const insertQ = await db.query(
            "INSERT INTO `RecipeLikes`(`uid`, `rid`) VALUES(?, ?)",
            [uid, rid]
        )

        if (insertQ.affectedRows != 0) {
            const updateQ = await db.query(
                "UPDATE Recipe SET numOfLikes = numOfLikes + 1 WHERE rid = ?",
                [rid]
            )

            if (updateQ.affectedRows != 0)
                return true
        }

    } catch (err) {
        console.log(err)
        return false
    }

    return false
}

module.exports = {
    likeRecipe,
};
