const express = require("express");
const router = express.Router();
const postUser = require("../../services/Users/postUser");

router.post("/users/post", async function (req, res, next) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    if (!username || !password || !mail || !firstName || !lastName)
      res.json("You forgot to add something!");
    else {
      res.json(
        await postUser.createUser(username, password, mail, firstName, lastName)
      );
      console.log("User post function was called");
    }
  } catch (err) {
    console.error(`Error while posting user`, err.message);
    next(err);
  }
});

module.exports = router;
