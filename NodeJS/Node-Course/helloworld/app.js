function sayhello() {

	console.log('Hello Alfie!');
	global.console.log('Console.log function, setTimeout, clearTimeout, SetInterval, ClearInterval etc are all functions defined on global object in Node contrary to window object in browser!');
	console.log(Node is a js runtime environment and not a framework/language. It is asynchronous non blocking I/O ');
	global.setTimeout(function() {
		console.log('Unfortunately variable objects are not part of global object in node while global variable objects are always part of window object in browsers! So are the functions!')
		var msg = 'hi';
		console.log(global.msg)
	}, 1000);
}

sayhello(); //go to terminal and run node app.js