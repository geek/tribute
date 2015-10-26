/// index.js ///

// Include modules

var Routes = require('./routes');


exports.register = function (server, options, next) {

    server.dependency('nes');

    // For arduinos
    server.subscription('/command');

    // For dashboard
    server.subscription('/reading');

    server.route(Routes);

    next();
};


exports.register.attributes = {
    name: 'jenny',
    version: '0.0.2'
};


// still need routes
