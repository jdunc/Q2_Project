'use strict'

exports.seed = function(knex) {
    return knex('users').del()
        .then(() => knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"))
        .then(() => knex('users').insert([{
            //id: 1,
            first: 'Patti',
            last: 'Gibson',
            email: 'pattigibson@gibson-properties.com',
            password: '12345678901234567892'
        }]));
};

// name
// spouse
// email
// phone
// street
// city
// state
// zip
// notes
