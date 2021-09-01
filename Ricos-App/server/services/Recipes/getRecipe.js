const db = require("../db");

async function getRecipe(rid) {
  const result = await db.query("SELECT * FROM `Recipe` WHERE rid = ?", [rid]);

  return { result };
}

module.exports = {
  getRecipe,
};
