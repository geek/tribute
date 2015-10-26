////// Assume this is our routes.js file //////

// Load modules

var Board = require('./board');
var Boards = require('./boards');
var Addon = require('./addon');


module.exports = [
    { path: '/boards', method: 'GET', config: Boards.get },

    { path: '/board/{boardId}', method: 'GET', config: Board.get },
    { path: '/board/{boardId}', method: 'PUT', config: Board.update },

    { path: '/board/{boardId}/{addonId}', method: 'GET', config: Addon.get },
    { path: '/board/{boardId}/{addonId}', method: 'PUT', config: Addon.update },
    { path: '/board/{boardId}/{addonId}/reading', method: 'POST', config: Addon.createReading },
    { path: '/board/{boardId}/{addonId}/command', method: 'POST', config: Addon.createCommand }
];


// need a config for boards in boards.js
