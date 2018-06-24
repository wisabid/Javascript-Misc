var url = 'http://apiurl.bla';

function logMessage(msg) {
	//api calling happens here
	console.log(msg);
}

function welcome(nm) {
	console.log(`====================== W E L C O M E     ${nm}.  ======================`);
}

module.exports.logit = logMessage;
module.exports.welcome = welcome;