var Hapi = require('hapi');
var Jill = require('jill');
var Leblanc = require('leblanc');


var server = new Hapi.Server();
server.connection({ port: 15031 });

server.register(Jill, function (err) {

    if (err) {
        console.error(err);
        process.exit(err);
    }
});

server.register({ register: Leblanc, options: { apiUrl: 'http://jshoedown.com' } }, function (err) {

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