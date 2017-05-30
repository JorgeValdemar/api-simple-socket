#!/usr/bin/env node
var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
//var server = app.listen(process.env.PORT || 3000);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
var server = app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port );
});

require('./routes')(app, expressWs);

//console.log('Servidor iniciado na porta' + server.address().port);
