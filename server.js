var Hapi = require('hapi');
var Inert = require('inert');
var Jenny = require('jenny/lib/cli');
var Jill = require('jill');
var LeBlanc = require('leblanc');
var Nes = require('nes');
var Vision = require('vision');


// Declare internals

var internals = {};


internals.main = function () {

    var serverOptions = {
        debug: {
            request: ['received', 'error'],
            log: ['error']
        }
    };
    var server = new Hapi.Server(serverOptions);
    server.connection({ port: 8080, labels: ['web'] });

    server.register([Inert, Vision, Nes, LeBlanc], function (err) {

        server.register(Jill, { routes: { prefix: '/api' } }, function (err) {

            if (err) {
              return internals.errorHandler(err);
            }

            server.start(function (err) {

                if (err) {
                  return internals.errorHandler(err);
                }

                console.log('Server started at http://localhost:8080');

                Jenny.run({
                    url: 'http://localhost:' + server.info.port,
                    portname: '/dev/cu.usbmodem1411'
                });
            });
        });
    });
};


internals.errorHandler = function (err) {

    console.error(err);
    process.exit(1);
};


internals.main();
