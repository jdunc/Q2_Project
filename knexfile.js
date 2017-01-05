module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/rolodex_dev'
    },

    production: {
        client: 'pg',
        connection: process.env.DATAVASE_URL
    },

    test: {
        client: 'pg',
        connection: 'postgres://localhost/rolodex_test'
    }
};
