const db = require("./db");

async function getRecipe(rid) {
    const result = await db.query("SELECT * FROM `Recipe` WHERE rid = ?", [rid]);

    /*let message = "Error getting recipe";

    if (result) {
        message = result;
    }*/

    return { result };
}

module.exports = {
    getRecipe,
};
