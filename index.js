'use strict';
//Ex[ress]
const express = require('express');
const app = express();
const path = require('path');

//Middlewares
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/static');
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//Routes
const register = require('./routes/register');
const login = require('./routes/login');
const home = require('./routes/home');

// const clients = require('./routes/clients');
// const inventory = require('./routes/inventory');
// const agents = require('./routes/agents');

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})); // this solves the problem of posting to terminal but not being able to post to browser

app.use(express.static(path.join(__dirname, 'static')));


app.use(register);
app.use(login);
app.use(home);

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
