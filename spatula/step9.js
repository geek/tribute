// Load modules

var Hoek = require('hoek');
var Mongo = require('mongodb');


// Shortcuts

var MongoClient = Mongo.MongoClient;


// Declare internals

var internals = {
    defaults: {
        host: '127.0.0.1',
        port: '27017',
        db: 'jill'
    }
};


module.exports = internals.Data = function (options) {

    this.settings = Hoek.applyToDefaults(internals.defaults, options || {});
};


internals.Data.prototype.start = function (callback) {

    var self = this;

    MongoClient.connect('mongodb://' + this.settings.host + ':' + this.settings.port + '/' + this.settings.db, function (err, db) {

        if (err) {
            return callback(err);
        }

        self._db = db;
        self._boards = db.collection('boards');
        self._commands = db.collection('commands');
        self._logs = db.collection('logs');

        return callback();
    });
};


internals.Data.prototype.getBoard = function (id, callback) {

    this._boards.findOne({ id: id }, callback);
};


internals.Data.prototype.getBoards = function (callback) {

    this._boards.find().toArray(callback);
};


internals.Data.prototype.updateBoard = function (id, board, callback) {

    var self = this;

    this.getBoard(id, function (err, currentBoard) {

        // ignore err, can happen if board doesn't exist
        if (currentBoard) {
            Hoek.merge(currentBoard, board);
            board = currentBoard;
        }

        board.id = id;

        self._boards.update({ id: id }, board, { upsert: true }, callback);
    });
};


internals.Data.prototype.saveReading = function (boardId, addonId, reading, callback) {

    var self = this;

    if (!boardId) {
        return callback(new Error('Need board ID'));
    }

    this.getBoard(boardId, function (err, board) {

        // ignore err, can happen if board doesn't exist
        if (!board) {
            board = {};
        }

        board.addons = board.addons || {};
        board.addons[addonId] = board.addons[addonId] || { readings: [] };
        board.addons[addonId].readings.push(reading);

        self.updateBoard(boardId, board, callback);
    });
};


internals.Data.prototype.updateAddon = function (boardId, addonId, addon, callback) {

    var self = this;

    this.getBoard(boardId, function (err, board) {

        // ignore err, can happen if board doesn't exist
        if (!board) {
            board = {};
        }

        board.addons = board.addons || {};
        board.addons[addonId] = board.addons[addonId] || { readings: [] };
        if (addon.type) {
            board.addons[addonId].type = addon.type;
        }

        if (addon.name) {
            board.addons[addonId].name = addon.name;
        }

        self.updateBoard(boardId, board, callback);
    });
};


internals.Data.prototype.getAddon = function (boardId, addonId, callback) {

    this.getBoard(boardId, function (err, board) {

        if (!board) {
            return callback(new Error('Board ' + boardId + ' not found'));
        }

        var addon = board.addons && board.addons[addonId];
        if (!addon) {
            return callback(new Error('Addon ' + addonId + ' not found'));
        }

        return callback(null, addon);
    });
};


internals.Data.prototype.addCommand = function (command, callback) {

    this._commands.insert(command, callback);
};


internals.Data.prototype.getCommands = function (callback) {

    var self = this;

    this._commands.find().toArray(function (err, commands) {

        if (err) {
            return callback(err);
        }

        if (!commands || !commands.length) {
            return callback();
        }

        // Remove all documents
        self._commands.remove({}, function (err) {

            callback(err, commands);
        });
    });
};


/// need nes client that talks arduino gateway and jenny
