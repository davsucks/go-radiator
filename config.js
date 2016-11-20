var env = process.env.NODE_ENV || 'development';

var config = {};

config.db = env === 'production' ? 'mongodb://ds019836.mlab.com:19836/heroku_rv194pdv' : 'mongodb://localhost/todo';

module.exports = config;
