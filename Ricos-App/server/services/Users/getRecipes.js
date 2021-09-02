const db = require("../db");

async function getRecipes(uid) {
  const result = await db.query("SELECT * FROM `Recipe` WHERE uid = ?", [uid]);

  return { result };
}

module.exports = {
  getRecipes,
};
