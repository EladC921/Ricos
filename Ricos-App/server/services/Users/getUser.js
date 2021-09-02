const db = require("../db");

async function getUser(uid) {
  const result = await db.query("SELECT * FROM `Users` WHERE uid = ?", [uid]);

  return { result };
}

module.exports = {
  getUser,
};
