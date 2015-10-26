/// routes.js  ///


// Load modules

var Path = require('path');
var Boards = require('./boards');
var Board = require('./board');
var Commands = require('./commands');
var Home = require('./home');
var Logs = require('./logs');


/// See how inert comes in with the directory and file handlers!
/// Also notice the route paths with strict param*1 options

module.exports = [
    { path: '/3rd-party/{file*}', method: 'GET', config: { handler: { directory: { path: Path.join(__dirname, '../../assets/3rd-party') } } } },
    { path: '/css/{file*1}', method: 'GET', config: { handler: { directory: { path: Path.join(__dirname, '../../assets/css') } } } },
    { path: '/js/{file*1}', method: 'GET', config: { handler: { directory: { path: Path.join(__dirname, '../../assets/js') } } } },
    { path: '/node_modules/nes.js', method: 'GET', config: { handler: { file: Path.join(__dirname, '../../assets/3rd-party/js/nes.js') } } },
    { path: '/node_modules/node_modules/ws.js', method: 'GET', config: { handler: { file: Path.join(__dirname, '../../assets/3rd-party/js/ws.js') } } },
    { path: '/', method: 'GET', config: Home },
    { path: '/boards', method: 'GET', config: Boards },
    { path: '/board/{id}', method: 'GET', config: Board },
    { path: '/logs', method: 'GET', config: Logs },
    { path: '/commands', method: 'GET', config: Commands }
];


/// What about the browser side javascript
