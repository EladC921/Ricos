const db = require("../db");

async function getMainRecipes(uid) {
  const result = await db.query(
      `SELECT R.*, CONCAT_WS(' ', U.firstName, U.lastName) as fullName FROM Recipe R
      JOIN Users U ON U.uid = R.uid JOIN Follows F ON F.uid = R.uid
      WHERE F.followerId = ?
      ORDER BY R.date DESC
      `,
      [uid]);

  return { result };
}

module.exports = {
  getMainRecipes,
};
