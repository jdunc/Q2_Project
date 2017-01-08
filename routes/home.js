'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex')


const methodOverride = require('method-override'); //used to manipulate POST

router.get('/home', (req, res, next) => {
    res.render('home');
    console.log('getting in routes home.js');
    console.log(req.body);
});

router.post('/home', function(req, res) {
  res.render('home', {
    data:req.body
  });
    console.log('posting to home:',req.body);
    // knex('users').where({
    //         name: req.body.name
    //     });
        // .then(function() {
        //     console.log('posting in login.js');
        //     res.send({
        //         redirect: '/home'
        //     })
        // })
});

module.exports = router;
