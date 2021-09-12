require('dotenv').config({path: __dirname + '/../.env'});
const env = process.env
const jwt = require('jsonwebtoken')

const createUserToken = (user) => {
    return jwt.sign(user, env.TOKEN_SECRET_KEY)
}

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

module.exports = {
    createUserToken,
    authenticateToken
}