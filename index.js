const EventEmitter  = require('events');

const emitter = new EventEmitter();

// emitter.on('greet', () => 
// {
//     console.log('Hello, himanshu from the event');
// });

// emitter.emit('greet');

emitter.on('user', (user) => 
{
    console.log(`User name is ${user.name} and age is ${user.age}`);
});

emitter.emit('user', {name: "Himanshu", age: 30});
