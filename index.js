const EventEmitter  = require('events');
const Logger = require('./logger'); // log emitter
const UserManager = require('./userManager'); // Login / logout Tracker

const emitter = new EventEmitter();

// emitter.on('greet', () => 
// {
//     console.log('Hello, himanshu from the event');
// });

// emitter.emit('greet');

// emitter.on('user', (user) => 
// {
//     console.log(`User name is ${user.name} and age is ${user.age}`);
// });

// emitter.emit('user', {name: "Himanshu", age: 30});


const logger = new Logger();
logger.on('log', (data) => 
{
    console.log(`[${data.timestamp.toISOString()}] ${data.message}`);
});

// logger.log('Server started');
// logger.log('User Signed in.');

const userManager = new UserManager();
userManager.on('login', user => 
{
    console.log(`${user} logged in.`);
});

userManager.on('logout', user => 
{
    console.log(`${user} logged out.`);
});

userManager.login('Himanshu');
setTimeout(() => {
    userManager.logout('Himanshu');
}, 5000);




