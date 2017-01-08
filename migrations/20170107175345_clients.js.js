'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('clients', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.string('spouse')
            .notNullable();
        table.string('email')
            .unique()
            .notNullable();
        table.integer('phone')
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
            .notNullable().defaultTo('-');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
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
