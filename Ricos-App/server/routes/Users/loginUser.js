const express = require("express");
const router = express.Router();
const checkUserLogin = require("../../services/Users/loginUser");

router.get("/users/login", async function (req, res, next) {
  try {
    const usernameOrMail = req.query.name;
    const password = req.query.password;

    if (!usernameOrMail || !password) res.json("You forgot to add something!");
    else res.json(await checkUserLogin.loginUser(usernameOrMail, password));
  } catch (err) {
    console.error(`Error while getting user information`, err.message);
    next(err);
  }
});

module.exports = router;
