const express = require('express');
const router = express.Router();
const quotes = require('../services/postRecipe');

router.post('/postRecipe', async function (req, res, next) {
    try {
        console.log(req.body)
        res.json(await quotes.create(...req.body));
    } catch (err) {
        console.error(`Error while posting quotes `, err.message);
        next(err);
    }
});

module.exports = router;