/// leblanc.js ///

// Load Modules

var Hoek = require('hoek');
var Routes = require('./routes');


// Declare internals

var internals = {
    defaults: {}
};


exports.register = function (server, options, next) {

    var settings = Hoek.applyToDefaults(internals.defaults, options);

    server.dependency('nes');

    server.route(Routes);

    next();
};


exports.register.attributes = {
    name: 'leblanc',
    version: '0.0.1'
};


// you will need views, since this is the dashboard
