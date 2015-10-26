// Load modules

var Boom = require('boom');
var Joi = require('joi');

exports.register = function (server, options, next) {

    server.dependency('nes');
    server.subscription('/board');

    server.route([
        { path: '/board/{boardId}', method: 'GET', config: getBoard }
    ]);

    next();
};


exports.register.attributes = {
    name: 'jenny',
    version: '0.0.1'
};


var boards = [];
var getBoard = {
    validate: {
        params: {
            boardId: Joi.number().required()
        }
    },
    handler: function (request, reply) {

        var board = boards[request.params.boardId];

        if (!board) {
            return reply(Boom.notFound('Board not found'));
        }

        reply(board);
    }
};
