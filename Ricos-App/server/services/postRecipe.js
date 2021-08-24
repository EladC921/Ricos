const db = require('./db');

async function createRecipe(uid, date, title, desc, img, ingredients, steps) {
    const data = await db.query("INSERT INTO `Recipe`(`uid`, `date`, `title`, `description`, `img`, `ingredients`, `steps`) VALUES(?, '?', '?', '?', '?', '?', '?')", 
        [uid, date, title, desc, img, ingredients, steps])

    let message = 'Error in creating quote';

    if (result.affectedRows) {
        message = 'Quote created successfully';
    }

    return { message };
}

module.exports = {
    createRecipe
}