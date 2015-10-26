/// addon.js ///


// Load modules

var Joi = require('joi');


// Declare internals

var internals = {};


exports.update = {
    description: 'Update meta-data about an addon',
    validate: {
        params: {
            boardId: Joi.number().required().description('Board ID'),
            addonId: Joi.number().required().description('Addon ID')
        },
        payload: {
            type: Joi.string().alphanum().optional().description('addon type'),
            name: Joi.string().alphanum().optional().description('addon name'),
            boardId: Joi.number().optional()
        }
    },
    handler: function (request, reply) {

        var addon = {
            type: request.payload.type,
            name: request.payload.name
        };

        this.updateAddon(request.params.boardId, request.params.addonId, addon, function (err, data) {

            return reply(err || data);
        });
    }
};

exports.get = {
    description: 'Get an addon by ID',
    validate: {
        params: {
            boardId: Joi.number().required().description('Board ID'),
            addonId: Joi.number().required().description('Addon ID')
        }
    },
    handler: function (request, reply) {

        this.getAddon(request.params.boardId, request.params.addonId, function (err, addon) {

            return reply(err || addon);
        });
    }
};


exports.createCommand = {
    description: 'Send a command to a board and addon',
    validate: {
        params: {
            boardId: Joi.number().required().description('Board ID'),
            addonId: Joi.number().required().description('Addon ID')
        },
        payload: {
            value: Joi.any().required().description('Value of command to send to the addon'),
            type: Joi.string().optional().description('Type of command to send').default('light_switch')
        }
    },
    handler: function (request, reply) {

        var command = {
            boardId: request.params.boardId,
            addonId: request.params.addonId,
            type: request.payload.type,
            value: request.payload.value
        };

        // Send notification to all subscribers
        request.server.publish('/command', command);

        this.addCommand(command, function (err, data) {

            return reply(err || data);
        });
    }
};


exports.createReading = {
    description: 'Create a reading from a board addon',
    validate: {
        params: {
            boardId: Joi.number().required().description('Board ID'),
            addonId: Joi.number().required().description('Addon ID')
        }
    },
    handler: function (request, reply) {

        var reading = {
            boardId: request.params.boardId,
            addonId: request.params.addonId,
            type: request.payload.type,
            value: request.payload.value,
            time: request.payload.time
        };

        // Send notification to all subscribers
        request.server.publish('/reading', reading);

        this.saveReading(request.params.boardId, request.params.addonId, reading, function (err, result) {

            return reply(err || result);
        });
    }
};


// need data/api bound to handlers
