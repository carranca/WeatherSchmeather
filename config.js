var routes = [
	{
		method: 'GET',
	    path: '/',
	    handler: function (request, reply) {
	        reply('Hello, world!');
	    }
	}
];

var options = {

};

exports.routes = routes;
exports.serverOptions = options;
