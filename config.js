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
    views: {
        engines: {
            html: require('handlebars')
        },
        path: 'view'
    }
};

exports.routes = routes;
exports.serverOptions = options;
