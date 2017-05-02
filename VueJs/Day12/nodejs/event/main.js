var events = require('events');

var event = new events.EventEmitter();

event.on('boom', (foo, bar) => {
	console.log('listener1', foo, bar);
});

event.on('peng', (foo, bar) => {
	console.log('listener1', foo, bar);
});

event.emit('boom', 'nima', 'sile');

event.emit('peng', 'niba', 'yesile');
