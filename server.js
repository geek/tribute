var Hapi = require('hapi');
var Jill = require('jill');
var Leblanc = require('leblanc');


var server = new Hapi.Server();
server.connection({ port: 15031 });

server.plugins.register(Jill, function (err) {

    if (err) {
        console.error(err);
    }
});

server.plugins.register(Leblanc, { apiUrl: 'http://jshoedown.com' }, function (err) {

    if (err) {
        console.error(err);
    }
});


server.start(function (err) {

    if (err) {
        console.error(err);
    }
    else {
        console.log('Server started');
    }
});