const express = require('express');
const http = require('http');

// initialization
const app = express();
const server = http.createServer(app);
const port = 5050;

// Start EcoWaste as a stand-alone server

const EcoWasteApp = function (app) {

    const EcoWebHandler = require('./routes/EcoPathHandler');
    EcoWebHandler.init(app, express);
}

new EcoWasteApp(app);

server.listen(port, function () {

    console.log('Server listening on port ' + port + '!');
});