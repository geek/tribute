// Load modules

var Boom = require('boom');

exports.register = function (server, options, next) {

    server.route([
        { path: '/board/{boardId}', method: 'POST', handler: createBoard },
        { path: '/board/{boardId}', method: 'GET', handler: getBoard }
    ]);

    next();
};


exports.register.attributes = {
    name: 'jenny',
    version: '0.0.1'
};


var boards = [];
var getBoard = function (request, reply) {

    var board = boards[request.params.boardId];

    if (!board) {
        return reply(Boom.notFound('Board not found'));
    }

    reply(board);
};

var createBoard = function (request, reply) {

    boards[request.params.boardId] = request.payload;
    reply.create('/board/' + request.params.boardId);
};
