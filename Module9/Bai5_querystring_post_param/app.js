var express = require('express');
var bodyParser = require('body-parser');
app = express();
var port = process.env.PORT || 1337;

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    console.log('url: '+req.url);
    next();
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});

app.post('/person', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400)
    res.send('Thank you');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, function(req, res){
    if (!req.body) return res.sendStatus(400)
    res.send('Thank you for the JSON Data');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.get('/api', function(req, res){
    res.json({firstName: 'Thanh', lastName: 'Tung'});
});

app.listen(port); 