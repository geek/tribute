/// index.js ///

// Include modules

var Data = require('./data');
var Routes = require('./routes');


exports.register = function (server, options, next) {

    server.dependency('nes');
    server.subscription('/command');
    server.subscription('/reading');

    var data = new Data(options);
    data.start(function (err) {

        if (err) {
            return next(err);
        }

        server.bind(data);
        server.route(Routes);

        next();
    });
};


exports.register.attributes = {
    name: 'jill',
    version: '0.0.2'
};


// still need data methods for route handlers
