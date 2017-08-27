var express = require('express');

app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 5000;


app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log('url: '+req.url);
    next();
});

// Call html controller
htmlController(app);

// Call api controller
apiController(app);

app.listen(port); 