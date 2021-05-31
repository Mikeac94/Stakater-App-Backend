require('dotenv').config()
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('process.env.NAME -->', process.env.NAME);
    res.send(` Hello... ${process.env.NAME}`);
});

module.exports = router;