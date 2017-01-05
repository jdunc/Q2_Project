'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')
const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser'); //parses information from POST
const methodOverride = require('method-override'); //used to manipulate POST
// const Joi = require('joi');
// const validations = require('../validations/signup');
// const ev = require('express-validation');

router.get('/users', (req, res, next) => {
    res.sendfile("register.html");
    // knex('users')
    //     .orderBy('id')
    //     .then((users) => {
    //         res.send(users);
    //     })
    //     .catch((err) => {
    //         next(err);
    //     });
});

router.post('/users', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password
            //res.end('yes');
    }));
    console.log('you posted stuff ' + req.body.first + '!');
});

module.exports = router;
// users
// id
// first
// last
// email
// password
