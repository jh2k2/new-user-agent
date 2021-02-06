const user_agent = require('./user_agent.json');

module.exports.test = function() {
    return user_agent[Math.floor(Math.random() * user_agent.length)]['user_agent'];
}