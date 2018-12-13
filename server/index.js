/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');

// allow requests in webpack-dev-server mode (on :8080)
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(helmet.hidePoweredBy());
// disable IEx to open other files with same rights
app.use(helmet.ieNoOpen());
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));

// mutation : GraphQLHub.MutationsType,

// rootValue: req.rootValue,
// formatError: formatError,
// pretty: req.query.pretty,

let expressGraphQL = require('express-graphql');
let schema = require('./localSchema');
const path = require('path');

app.use(cors(corsOptions));

/* eslint-disable no-unused-vars,prettier/prettier */
app.use('/graphql', expressGraphQL(req => ({
    schema: schema.default,
    graphiql: true,
    pretty: true
})));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
    console.log('Running in production mode, serving build artifacts of react app.');
}
else {
    app.use(express.static('../public'));
    console.log('Running in dev mode, serving only /public folder');
}

// doesn't work with webpack-dev-server :(
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(app.get('port'), function () {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
