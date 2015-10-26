/// data.js ///

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


/// need to add to plugin routes after starting up
