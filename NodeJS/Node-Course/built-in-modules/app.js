const mypath = require('path'); //builtin modules are always without any ./ or ../ (relative paths)

let parsedpath = mypath.parse(__filename);
console.log(parsedpath);


const operatingS = require('os');
console.log(`Hi Alfie ! I'm ${operatingS.platform()} and you are logged into  ${operatingS.type()}. I have total ${operatingS.totalmem()} memory. Only ${operatingS.freemem()} is free now.`);


const fileS = require('fs');
fileS.readdir('$', function(error, files) {
	if ( error ) console.log(error);
	else console.log(files);
})