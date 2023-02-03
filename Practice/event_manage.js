const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterOverFlow', () => {
    console.log('Please Turn Off The Motor!');
    setTimeout(() => {
        console.log('Please Turn Off The Motor! Gentle Reminder');
    },3000);
});

console.log("The Script Is Running...");
myEmitter.emit('WaterOverFlow');
console.log("The Script Is Still Running...");