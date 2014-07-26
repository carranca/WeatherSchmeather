var server = require('./server');
var config = require('./config');

server.start(8888, config.routes, config.serverOptions);
