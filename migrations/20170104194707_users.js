'use strict';

exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('first')
            .notNullable();
        table.string('last')
            .notNullable();
        table.string('email')
            .unique()
            .notNullable();
        table.specificType('password', 'char(20)')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
// ┌───────────────────────────────────────────────────────────────┐
// │                            users                              │
// ├─────────────┬─────────────────────────┬───────────────────────┤
// │id           │serial                   │not null               │
// |name         |varchar                  |not null               |
// │email        │varchar(255)             │not null default ''    │
// |password     |password, char60         |not null               |
// └─────────────┴─────────────────────────┴───────────────────────┘
