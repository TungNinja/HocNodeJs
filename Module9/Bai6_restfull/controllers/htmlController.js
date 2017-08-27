var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
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
}