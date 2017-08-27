var express = require('express');
app = express();
var port = process.env.PORT || 1337;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('url: '+req.url);
    next();
});

app.get('/', function(req, res){
    res.send('<html><head><link rel=stylesheet href=assets/css/bootstrap.min.css></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body><h1>Persion id: '+req.params.id+'</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({firstName: 'Thanh', lastName: 'Tung'});
});

app.listen(port); 