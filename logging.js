const EventEmitter = require('events');

var emmiter = new EventEmitter();

emmiter.on('logging', (e) => console.log(e));

const input = {x: 1, y: 2, a: 3, b: 4};
const {x, y, ...z} = input;
emmiter.emit('logging', z);