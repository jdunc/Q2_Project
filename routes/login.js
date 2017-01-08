'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')
    //const bcrypt = require('bcrypt-as-promised');

const methodOverride = require('method-override'); //used to manipulate POST

router.get('/login', (req, res, next) => {
    res.render('login');
    console.log('getting in routes login.js');

});

router.post('/login', function(req, res) {
    //console.log(req.body);
    knex('users').where({
            email: req.body.email,
            password: req.body.password
        })
        .then(function() {
            res.redirect('/home')
        })
});

module.exports = router;
// users
// id
// first
// last
// email
// password
