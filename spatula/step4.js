/// board.js


// Load modules

var Boom = require('boom');
var Joi = require('joi');


exports.get = {
    description: 'Return a board',
    validate: {
        params: {
            boardId: Joi.number().required().description('Id for the board')
        }
    },
    handler: function (request, reply) {

        this.getBoard(request.params.boardId, function (err, board) {

            reply(err || board);
        });
    }
};


exports.update = {
    description: 'Update a board',
    validate: {
        params: {
            boardId: Joi.number().required().description('Id for the board')
        },
        payload: {
            name: Joi.string().optional().description('name of board'),
            version: Joi.string().optional().description('version of board sketch'),
            battery: Joi.string().alphanum().optional().description('battery percentage')
        }
    },
    handler: function (request, reply) {

        var board = {
            name: request.payload.name,
            version: request.payload.version,
            battery: request.payload.battery
        };

        this.updateBoard(request.params.boardId, board, function (err, result) {

            reply(err ? Boom.internal(err) : result);
        });
    }
};


/// need addon config/handlers
