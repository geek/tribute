var Hapi = require('hapi');
var Jill = require('jill');
var Leblanc = require('leblanc');


var server = new Hapi.Server();
server.connection({ port: 15031, labels: 'web' });
server.connection({ port: 15032, labels: 'api', routes: { cors: { origin: ['http://jshoedown.com', 'http://jshoedown.com:15031'] }} });

server.select('api').register(Jill, function (err) {

    if (err) {
        console.error(err);
        process.exit(err);
    }
});

server.select('web').register({ register: Leblanc, options: { apiUrl: 'http://jshoedown.com:15032' } }, function (err) {

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