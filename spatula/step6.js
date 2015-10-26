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


/// Need a way to establish the database connection
