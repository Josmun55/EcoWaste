const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require('ejs');


const EcoPathHandler = {
    init: function (app, express) {

        app.use(express.static(path.join(__dirname, '../public')));

        const viewsPath = path.join(__dirname, '../views');
        app.set('view engine', 'ejs');
        app.set('views', viewsPath);

        // console.log(path.join(__dirname, '../public'));
        // console.log(viewsPath);

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        router.use('/',require('./EcoWebHandler'));

        EcoPathHandler.router = router;
        app.use("/", router);
    }
}

module["exports"] = EcoPathHandler;