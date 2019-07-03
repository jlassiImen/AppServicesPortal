var compression = require('compression');
var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); //Declare Express-Validator

var app = express();  //required for Express-Validator
app.use(compression());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({ limit: '50mb' }));


app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// api routes
app.use('/', require('./backend/routes'));



app.use(express.static(__dirname + '/dist'));  
app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/index.html');  
}); 


//app.use(express.static(__dirname + '/src'));
//app.use(bodyParser.urlencoded({'extended': 'true'}));
//app.use(bodyParser.json({limit: '50mb'}));

app.listen(process.env.PORT || 8080); 
