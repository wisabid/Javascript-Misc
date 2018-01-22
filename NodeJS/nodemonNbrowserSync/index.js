var http = require('http');
'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 2017;


app.get('/', (req, res) => {
	res.sendFile('index.html', { "root" : __dirname });
});

var server = app.listen(port, () => {
	console.log('Alfie! Your Fantastic Node App is really running on Port : ', port);
	console.log('Alfie!!')
})