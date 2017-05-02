var events = require('events');

var event = new events.EventEmitter();

event.on('boom', (foo, bar) => {
	console.log('listener1', foo, bar);
});

event.on('peng', (foo, bar) => {
	console.log('listener2', foo, bar);
});

event.once('peng', (foo, bar) => {
	console.log('once: listener3 listening to peng as well', foo, bar);
});

event.on('peng', (foo, bar) => {
	console.log('listener3 listening to peng as well', foo, bar);
});



event.emit('boom', 'nima', 'sile');

event.emit('peng', 'niba', 'yesile');
event.emit('peng', 'niba', 'yesile');
