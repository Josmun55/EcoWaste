const express = require('express');

const EcoWasteApp = function (app) {

    const EcoWebHandler = require('./routes/ecoWebHandler');
    EcoWebHandler.init(app, express);
}

EcoWasteApp.prototype.options = {};

module.exports = EcoWasteApp;