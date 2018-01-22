'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 4001;

//try running localhost:4001 after doing node express-trial.js from cmd
app.get('/express', function (req, res) {
	res.sendFile('express-trial.html', { "root" : __dirname });
});

var server = app.listen(port, function () {
	console.log('Node is running on Port : ', port);
})