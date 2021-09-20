const db = require("../db");

async function unlikeRecipe(uid, rid) {
    try {
        const deleteQ = await db.query(
            "DELETE FROM RecipeLikes WHERE uid = ? and rid = ?",
            [uid, rid]
        )

        if (deleteQ.affectedRows != 0) {
            const updateQ = await db.query(
                "UPDATE Recipe SET numOfLikes = numOfLikes - 1 WHERE rid = ?",
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
    unlikeRecipe,
};
