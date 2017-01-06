'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')
    //const bcrypt = require('bcrypt-as-promised');

const methodOverride = require('method-override'); //used to manipulate POST
// const Joi = require('joi');
// const validations = require('../validations/signup');
// const ev = require('express-validation');

router.get('/register', (req, res, next) => {
    knex('users') //table
        .orderBy('id')
        .then((user) => {
            res.render('register')
        })

    .catch((err) => {
        next(err);
    });
});

router.post('/register', function(req, res) {
    //console.log(req.body);
    knex('users').insert({ //table
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: req.body.password
        })
        //.then(() => knex.raw("ALTER SEQUENCE users_id RESTART WITH 1"))
        .then(function() {
            //res.redirect('views/login')
        })
});

module.exports = router;
// users
// id
// first
// last
// email
// password
