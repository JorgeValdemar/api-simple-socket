var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var server = app.listen(3000);

require('./routes')(app, expressWs);

console.log('Servidor iniciado na porta' + server.address().port);
