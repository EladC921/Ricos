const express = require("express");
const { createUserToken } = require("../../services/auth");
const router = express.Router();
const checkUserLogin = require("../../services/Users/checkUserLogin");

router.post("/users/login", async function (req, res, next) {
  try {
    const usernameOrMail = req.body.name;
    const password = req.body.password;

    if (!usernameOrMail || !password)
      res.status(400).send("Missing username/password")
    else {
      await checkUserLogin.checkUserLogin(usernameOrMail, password)
        .then((loginCreds) => {
          if (loginCreds == null)  // credentials incorrect
            res.status(401).send("Bad credentials")
          else {
            const user = {
              uid: loginCreds.uid,
              username: loginCreds.username,
              mail: loginCreds.mail,             
              firstName: loginCreds.firstName, 
              lastName: loginCreds.lastName 
            }
            
            res.status(200).send(createUserToken(user))
          }
        })
    }


  } catch (err) {
    console.error(`Error while getting user information`, err.message);
    next(err);
  }
});

module.exports = router;
