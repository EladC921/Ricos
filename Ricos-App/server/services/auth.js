require('dotenv').config({ path: __dirname + '/../.env' });
const env = process.env
const jwt = require('jsonwebtoken')

// Creates a token with the user information, using the secret key
const createUserToken = (user) => {
    return jwt.sign(user, env.TOKEN_SECRET_KEY)
}

/* Middleware used to check if given token is valid,
 and assing the user information to the request.
 Used where authorization is needed.
 Sends error response code if token isn't found or isn't valid.
 */
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (token == null)
        return res.status(401).send("Bad token")

    jwt.verify(token, env.TOKEN_SECRET_KEY, (err, user) => {
        if (err)
            return res.sendStatus(403)

        req.user = user
        next()
    })
}

/* Middleware that adds user information from token,
  if a token isn't found, doesn't add the user information, and doesn't send an error code.
  If token is invalid, responses with 403.
 */
const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (token == null)
        next()

    else {
        jwt.verify(token, env.TOKEN_SECRET_KEY, (err, user) => {
            if (err)
                return res.sendStatus(403)

            req.user = user
            next()
        })
    }
}

module.exports = {
    createUserToken,
    authenticateToken,
    validateToken
}