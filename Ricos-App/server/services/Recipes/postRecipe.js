const db = require("../db");

async function createRecipe(uid, date, title, desc, img, ingredients, steps) {
  const result = await db.query(
    "INSERT INTO `Recipe`(`uid`, `date`, `title`, `description`, `img`, `ingredients`, `steps`) VALUES(?, ?, ?, ?, ?, ?, ?); UPDATE Users SET numOfRecipes = 1 WHERE uid = ?;",
    [uid, date, title, desc, img, ingredients, steps, uid]
  );

  //const result = await db.query("UPDATE Users SET numOfRecipes = 1 WHERE uid = 1;")

  let message = "Error in creating recipe";

  if (result.affectedRows) {
    message = "Recipe created successfully";
  }

  return { message };
}

module.exports = {
  createRecipe,
};
