/// boards handler ///


// Load modules

var Joi = require('joi');


// Declare internals

var internals = {};

module.exports = {
    validate: {
        params: {
            id: Joi.number()
        }
    },
    handler: function (request, reply) {

        // Remember that we bound settings to this
        var settings = JSON.stringify(this.settings);

        boardContext(request.params.id, request.server.plugins.jill, function (err, context) {

            if (err) {
                return reply(err);
            }

            context.title = 'Board ' + request.params.id;
            context.settings = settings;

            var options = {
                layout: 'default'
            };

            reply.view('board', context, options);
        });
    }
};


var boardContext = function (id, jill, callback) {

    // this wasn't exposed in jill yet, so we will need to go back and do that
    jill.getBoard(id, function (err, board) {

        if (err) {
            return callback(err);
        }

        var allReadings = [];

        var addonKeys = board.addons ? Object.keys(board.addons) : [];
        var friendlyBoard = {
            id: board.id,
            name: board.name || ('Board ' + board.id),
            addonCount: addonKeys.length - 1
        };

        allReadings = allReadings.concat(internals.boardReadings(board));

        allReadings.sort(function (reading1, reading2) {

            if (reading1.time < reading2.time) {
                return -1;
            }
            if (reading1.time > reading2.time) {
                return 1;
            }

            return 0;
        });

        var readings = internals.convertToFriendlyReadings(allReadings.slice(0, 15));

        var context = {
            board: friendlyBoard,
            readings: readings
        };

        return callback(null, context);
    });
};


internals.boardReadings = function (board) {

    var readings = [];
    var addonKeys = board.addons ? Object.keys(board.addons) : [];
    for (var i = 0, il = addonKeys.length; i < il; ++i) {
        var addonKey = addonKeys[i];
        if (addonKey !== '255') {           // Arduino ID
            readings = readings.concat(board.addons[addonKey].readings);
        }
    }

    return readings;
};


internals.convertToFriendlyReadings = function (readings) {

    var now = Date.now();

    var friendlyReadings = [];
    for (var i = 0, il = readings.length; i < il; ++i) {
        var reading = readings[i];
        var formatter = internals.readingFormatters[reading.type];
        friendlyReadings.push({
            type: reading.type,
            icon: internals.readingIcons[reading.type],
            time: Moment(reading.time).fromNow(),
            title: formatter ? formatter(reading.value) : reading.value
        });
    }

    return friendlyReadings;
};


/// Go expose the getBoard method on jill ///
