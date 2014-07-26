var hapi = require('hapi');

function start(port, routes, serverOptions) {
	console.log('Starting server at port ' + port);
	var server = new hapi.Server(port, serverOptions);
	server.start(function() {
		console.log('Server has started at ' + server.info.uri);
	});
	
	for (var i = 0; i < routes.length; i++) {
		server.route(routes[i]);
	};
}

exports.start = start;
