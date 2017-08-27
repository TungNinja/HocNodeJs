var express = require('express');
app = express();

var port = process.env.PORT || 1337;

app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({firstName: 'Thanh', lastName: 'Tung'});
});

app.listen(port);