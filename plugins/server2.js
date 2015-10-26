var Hapi = require('hapi');
var Example2 = require('./example2');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.register(Example2, function (err) {

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
