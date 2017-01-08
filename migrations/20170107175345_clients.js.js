'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.string('spouse')
            .notNullable();
        table.string('email')
            .unique()
            .notNullable();
        table.integer('phone' [12])
            .notNullable();
        table.string('street')
            .notNullable();
        table.string('street_2')
            .notNullable();
        table.string('city')
            .notNullable();
        table.string('state', [2])
            .notNullable();
        table.integer('zip')
            .notNullable();
        table.string('notes')
            .text
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
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
