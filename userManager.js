const EventEmitter = require('events');

class UserManger extends EventEmitter 
{
    login(user)
    {
        this.emit('login', user);
    }

    logout(user)
    {
        this.emit('logout', user);
    }
}

module.exports = UserManger;