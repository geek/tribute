/// boards.js ////


// Load modules

var Boom = require('boom');


exports.get = {
    id: 'boards',
    description: 'Get all connected boards',
    handler: function (request, reply) {

        this.getBoards(function (err, boards) {

            reply(err ? Boom.internal(err) : boards);
        });
    }
};


/// need board.js route handlers
