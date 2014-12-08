var Hapi = require('hapi');
var Jill = require('jill');
var Leblanc = require('leblanc');


var server = new Hapi.Server();
server.connection({ port: 15301, labels: 'web' });
server.connection({ port: 15302, labels: 'api', routes: { cors: { origin: ['http://jshoedown.com', 'http://jshoedown.com:15301'] }} });

server.select('api').register(Jill, function (err) {

    if (err) {
        console.error(err);
        process.exit(err);
    }
});

server.select('web').register({ register: Leblanc, options: { apiUrl: 'http://jshoedown.com:15302' } }, function (err) {

    if (err) {
        console.error(err);
;        process.exit(err)
    }
});


server.start(function (err) {

    if (err) {
        console.error(err);
        process.exit(err);
    }

    console.log('Server started');
});