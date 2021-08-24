const express = require("express");
const cors = require("cors");

const postRecipeRouter = require('./routes/postRecipe');

const app = express();

const posts = [
  {
    title: "Sushi with shoko",
    authorId: "1",
    authorName: "Elad Cohen",
    postId: "445",
    img: "https://static.wixstatic.com/media/19cfe7_caa41f1f05f34f819479f8587fe1faa0~mv2.jpg/v1/fill/w_640,h_800,al_c,q_85,usm_0.66_1.00_0.01/19cfe7_caa41f1f05f34f819479f8587fe1faa0~mv2.webp",
    likes: "1500",
    description: "Sushi with avocado mashu tov",
  },
  {
    title: "Malawach with Hilbe",
    authorId: "2",
    authorName: "Bug Karta",
    postId: "667",
    img: "https://i1.wp.com/gurmantur.com/wp-content/uploads/2018/08/Malawach.jpg",
    likes: "36952",
    description: "Malawach taim retzah",
  },
];



app.use(cors());
app.use('/postRecipe', postRecipeRouter);

const postRecipe = require('./services/postRecipe');
postRecipe.createRecipe(1, "CURRENT_TIMESTAMP", "elad", "elad", "ladshmok", "11", "11");

/*app.get("/posts/", (req, res) => {
  res.send(posts);
});*/

app.listen(8081, () => {
  console.log("Server is Listening");
});

module.exports = app;
