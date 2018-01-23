var express = require('express');
var app = express();
var fs = require('fs');

//serve static files
//app.use(express.static('src')); //src will not be part of static file for example, it will be localhost:2018/css/styles.css and NOT localhost:2018/src/css/styles.css
app.use('/virtualpath', express.static('src')); //now u will have to use http://localhost:2018/virtualpath/css/styles.css

app.get('/', (req, res) => {
	res.sendFile('index.html', { root : __dirname });
	
});

app.get('/delete', (req, res) => {
	console.log('IN DELETE !', req.query.pth, req.query.ext);
	fs.readdir(req.query.pth, (err, files) => {
		files.map((file) => {
			console.log(file);
			let match = file.match(/\.txt$/i);
			console.log(match);
			if (match) {
				fs.unlink(req.query.pth+'/'+match.input, (err) => {
					console.log('File Deleted!', err)
				});
			}
			return;
		})
	})
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('Files Deleted!!');
})



var server = app.listen(2018, () => {
	console.log('BulkDel app is running on Port : ', 2018);
})