'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')
    //const bcrypt = require('bcrypt-as-promised');

const methodOverride = require('method-override'); //used to manipulate POST
// const Joi = require('joi');
// const validations = require('../validations/signup');
// const ev = require('express-validation');

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login', function(req, res) {
    //console.log(req.body);
    knex('users').where({
            email: req.body.email,
            password: req.body.password
        })
        //.then(() => knex.raw("ALTER SEQUENCE users_id RESTART WITH 1"))
        .then(function() {
            console.log('got it');
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
