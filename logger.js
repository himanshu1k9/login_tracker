const EventEmitter  = require('events');

const emitter = new EventEmitter();

class Logger extends EventEmitter
{
    log(message)
    {
        this.emit('log', { message, timestamp: new Date() });
    }
}

module.exports = Logger;