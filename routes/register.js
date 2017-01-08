'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
//const bcrypt = require('bcrypt-as-promised');

const methodOverride = require('method-override'); //used to manipulate POST
// const Joi = require('joi');
// const validations = require('../validations/signup');
// const ev = require('express-validation');

router.get('/register', (req, res, next) => {
    knex('users') //table
        .orderBy('id')
        .then((register) => {
            res.render('register')
        })

    .catch((err) => {
        next(err);
    });
});

router.post('/register', function(req, res) {
    knex('users').insert({ //table
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: req.body.password
        })
        .then(function() {
            res.redirect('/login')
        })
});

module.exports = router;
// users
// id
// first
// last
// email
// password
