const db = require("../db");

/* Returns all relevant user information.
  If sent by a loggen in user - also returns if the user is following or not.

  uid: The uid (user id) of the user the profile belongs to
  ruid: Requesting uid (user id), the id of the user performing the request, might be null
*/
async function getUser(ruid, uid) {
  try {
    /*console.log(`SELECT U.uid, U.firstName, U.lastName, U.numOfRecipes, U.numOfFollowers, U.numOfFollowing, U.profilePic, U.bio, IF(F.followerId IS NOT NULL, True, False) following FROM Users U
    LEFT JOIN (SELECT * FROM Follows WHERE followerId = ${ruid}) F on U.uid = F.uid
    WHERE U.uid = ${uid}`)*/
    const result = await db.query(
      `SELECT U.uid, U.firstName, U.lastName, U.numOfRecipes, U.numOfFollowers, U.numOfFollowing, U.profilePic, U.bio, IF(F.followerId IS NOT NULL, True, False) following FROM Users U
    LEFT JOIN (SELECT * FROM Follows WHERE followerId = ?) F on U.uid = F.uid
    WHERE U.uid = ?`
      , [ruid, uid])

    return { result }

  } catch (err) {
    console.error(err)
    return -1
  }

}

module.exports = {
  getUser,
};
