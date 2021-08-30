const db = require("./db");

async function createRecipe(uid, date, title, desc, img, ingredients, steps) {
  const result = await db.query(
    "INSERT INTO `Recipe`(`uid`, `date`, `title`, `description`, `img`, `ingredients`, `steps`) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [uid, date, title, desc, img, ingredients, steps]
  );

  let message = "Error in creating post";

  if (result.affectedRows) {
    message = "Post created successfully";
  }

  return { message };
}

module.exports = {
  createRecipe,
};
