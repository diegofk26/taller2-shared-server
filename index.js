// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var manejadorDeIntereses = require("./intereses.js");


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router







// TODO: Alta de intereses
router.post('/interests', function(req, res) {

    if(manejadorDeIntereses.losParametrosDelAltaSonValidos(req)){

      manejadorDeIntereses.darDeAltaInteres(req);
      res.status(201);
      res.send('Todo OK');

    }
    else {

      res.status(400);
      res.send('Formato de interes invalido');

    }

  });
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
