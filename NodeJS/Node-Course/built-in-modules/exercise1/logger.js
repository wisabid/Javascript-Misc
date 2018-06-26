const EventEmitter = require('events');

const emitter = new EventEmitter();

function logger() {
	console.log('GOnna raise an event now!');
	emitter.on('alfiecrying', (arg) => {
		console.log(`=======================ALFIE kuttan IS CRYING FOR ${arg.for} since last ${arg.time}=================`);
	});
	emitter.emit('alfiecrying', {for : 'milk', time : '10 minutes'});
	
}


module.exports.logger = logger;

