var express = require('express');
var app = express();
var mysql = require('mysql');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));


app.use('/', function(req, res, next){
    console.log('url: '+req.url);
    res.render('index');
});

app.listen(port); 