'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

const bodyParser = require('body-parser');

const users = require('./routes/users');
// const clients = require('./routes/clients');
// const inventory = require('./routes/inventory');
// const agents = require('./routes/agents');

app.disable('x-powered-by');
app.use(bodyParser.json());

app.use(users);
// app.use(clients);
// app.use(agents);
// app.use(inventory);

app.use((err, req, res, next) => {
    if (err.status) {
        return res
            .status(err.status)
            .set('Content-Type', 'text/plain')
            .send(err.message);
    }
    console.error(err.stack);
    res.sendStatus(500);
});

app.listen(app.get('port'), function() {
    console.log('Listening on port', app.get('port'));
});

module.exports = app;
