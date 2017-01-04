'use strict';

var express = require('express');
var user = require('user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', (req, res, next) => {
    user.login(req.body.name, req.body.password, function (userObj) {
        res.json(userObj);
    }, function (err) {
        res.status(500).send(err);
    });
});

module.exports = router;
