const EventEmitter = require('events');

var emmiter = new EventEmitter();

emmiter.on('logging', (e) => console.log(e));

emmiter.emit('logging', 'I am a table');