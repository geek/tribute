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

        // Will now be accessible under server.plugins.jill.getBoard
        server.expose('getBoard', data.getBoard.bind(data));

        next();
    });
};


exports.register.attributes = {
    name: 'jill',
    version: '0.0.3'
};


// Run it all at server.js
