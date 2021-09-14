const db = require("../db");

async function followUser(followerId, followsId) {
    try {
        const result = await db.query(
            "INSERT INTO `Follows`(`uid`,`followerId`,`date`) VALUES(?, ?, ?)",
            [followsId, followerId, "CURRENT_TIMESTAMP"]
        )

        return result.affectedRows != 0
        
    } catch (err) {
        console.log(err)
        return false
    }
}

module.exports = {
    followUser,
};
