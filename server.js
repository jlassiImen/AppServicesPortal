var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({limit: '50mb'}));


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