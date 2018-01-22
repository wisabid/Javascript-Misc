var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	console.log(req, res);
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('Hi Alfie! This app will delete your file');
	fs.unlink('../test.txt', function(err) {
		// if (err) throw err;
		console.log('File Deleted!')
	})
}).listen(4000);
