const express = require("express");
const serveStatic = require("serveStatic");
const history = require("connect-history-api-fallback");
const enforce = require("express-sslify");

const app = express();

//use ssl (secure) version of website
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(serveStatic(__dirname + "/dist"));
app.use(history());

app.listen(process.env.PORT || 5000);