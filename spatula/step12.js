/// leblanc.js ///


// Load Modules

var Path = require('path');
var Handlebars = require('handlebars');
var Hoek = require('hoek');
var Routes = require('./routes');


// Declare internals

var internals = {
    defaults: {
        apiUrl: 'http://localhost:8080/api'
    }
};


exports.register = function (server, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    server.dependency('inert');
    server.dependency('nes');
    server.dependency('vision');

    server.views({
        engines: {
            html: Handlebars
        },
        isCached: false,
        path: Path.join(__dirname, './views'),
        layoutPath: Path.join(__dirname, './views/layouts')
    });

    server.bind({ settings: settings });
    server.route(Routes);

    next();
};


exports.register.attributes = {
    name: 'leblanc',
    version: '0.0.1'
};


// now go add routes
