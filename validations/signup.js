'use strict';

const Joi = require('joi');

module.exports.post = {
    body: {
        name: Joi.string()
            .label('Name')
            .required()
            .regex(/^[A-z].*$/)
            .trim()
            .alphanum(),

        email: Joi.string()
            .label('Email')
            .required()
            .trim()
            .email(),

        password: Joi.string()
            .label('Password')
            .required()
            .min(8)
            .regex(/[A-z]/)
            .regex(/[0-9]/)
            .regex(/[!?/.,']/)
    }
};
