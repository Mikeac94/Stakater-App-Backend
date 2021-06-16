require('dotenv').config()
var express = require('express');
var router = express.Router();

// api to print hello `{process.env.NAME}`
router.get('/', function(req, res, next) {
    console.log('process.env.NAME -->', process.env.NAME);
    res.send(` Hello... ${process.env.NAME}`);
});

module.exports = router;