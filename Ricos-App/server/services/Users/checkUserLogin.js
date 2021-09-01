const db = require("../db");

async function checkUserLogin(usernameOrMail, password) {
  const result = await db.query(
    "SELECT * FROM `Users` WHERE (username = ? OR mail = ?) AND password = ?",
    [usernameOrMail, usernameOrMail, password]
  );

  return result.length != 0;
}

module.exports = {
  checkUserLogin,
};
