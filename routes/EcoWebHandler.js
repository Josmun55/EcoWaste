
const express = require('express');
const router = express.Router();

class EcoRouteHandler {

    constructor() { }

    attach(router) {

        router.get('/', function (request, response) {
            response.render('./dashboard');
        });

        router.get('/dashboard', function (request, response) {
            response.render('./dashboard', {});
        });

        router.get('/ecobrand', function (request, response) {
            response.render('./ecobrand', { data: {} });
        });

        router.post('/login', function (request, response) {

            EcoLogic.login(request.body,function(result){
                console.log(result)
                response.render('./dashboard', { data: result.data });
            }, function(error){
                console.log("error", error)
                response.render('./dashboard', { data: {}});
            })
        });

        router.get('/ecoteam', function (request, response) {
            response.render('./ecoteam', { data: {} });
        });

        router.get('/login', function (request, response) {
            response.render('./login', { data: {} });
        });

        router.post('/client/register', function (request, response) {
            EcoLogic.register(request.body,function(result){
                console.log(result)
                response.render('./dashboard',{ data: {} });
            }, function(error){
                console.log("error", error)
                response.render('./dashboard',{ data: {} });
            })
        });
    }
}


new EcoRouteHandler().attach(router);
module["exports"] = router;

