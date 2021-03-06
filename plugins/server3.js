var Hapi = require('hapi');
var Nes = require('nes');
var Example3 = require('./example3');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.register([Nes, Example3], function (err) {

    if (err) {
        console.error(err);
        process.exit(1);
    }

    server.start(function (err) {

        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log('server started on port: ' + server.info.port);
    });
});
