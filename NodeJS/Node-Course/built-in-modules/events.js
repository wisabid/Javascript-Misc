const EventEmitter = require('events'); //notice 1st E..it is in caps to indicate the events class (Pascal Naming convention)
//when we do the above require, what we get is a not an object or function..but A CLASS. - a blueprint which indicates the behaviour of a class..so to use it , we obviously need an instance of it. see below
//Classes such as http and events in node , raises an event, a signal to indicate something has just happened
const emitter = new EventEmitter(); //instantiating..

//emitter.addlistener can also be used ..but here v used on method
emitter.on('messageToBeLogged', (data) => {
	console.log(`It is ${data.what} and it happened during ${data.when}`);
})
emitter.emit('messageToBeLogged', {what : 'alert message', when : 'night time'});
