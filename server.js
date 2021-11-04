const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();

//use ssl (secure) version of website
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use('/', serveStatic(__dirname + ' / dist '));
app.use(history());

// app.listen(process.env.PORT || 5000);
app.listen(process.env.PORT || 3000, function() {
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});